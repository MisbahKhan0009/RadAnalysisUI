import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Image as ImageIcon, Upload } from "lucide-react"
import { toast } from "sonner" // added

const sampleImages = [
	"https://images.unsplash.com/photo-1755371034010-51c25321312d?q=80&w=800&auto=format&fit=crop", // sample medical style
	"https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=800&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&auto=format&fit=crop",
]

const MIN_ANALYZE_TIME = 1200 // ms delay

export default function AnalyzeImage() {
	const [selectedSrc, setSelectedSrc] = useState(null)
	const [outputSrc, setOutputSrc] = useState(null)
	const [analyzing, setAnalyzing] = useState(false)
	const fileInputRef = useRef(null)
	const analysisIdRef = useRef(0)

	// Auto analyze on selection
	useEffect(() => {
		if (!selectedSrc) return
		setAnalyzing(true)
		setOutputSrc(null)
		const currentId = ++analysisIdRef.current
		const start = performance.now()

		const img = new Image()
		img.crossOrigin = "anonymous"
		img.onload = () => {
			const finish = (processed) => {
				const elapsed = performance.now() - start
				const remain = Math.max(0, MIN_ANALYZE_TIME - elapsed)
				setTimeout(() => {
					if (analysisIdRef.current !== currentId) return
					setOutputSrc(processed)
					setAnalyzing(false)
					toast.success("Analysis complete")
				}, remain)
			}

			try {
				const canvas = document.createElement("canvas")
				const ctx = canvas.getContext("2d")
				canvas.width = img.width
				canvas.height = img.height
				ctx.drawImage(img, 0, 0)
				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
				const data = imageData.data
				for (let i = 0; i < data.length; i += 4) {
					const r = data[i],
						g = data[i + 1],
						b = data[i + 2]
					const gray = 0.299 * r + 0.587 * g + 0.114 * b
					data[i] = data[i + 1] = data[i + 2] = gray
				}
				ctx.putImageData(imageData, 0, 0)
				// Simple pseudo edge overlay
				const edgeData = ctx.getImageData(0, 0, canvas.width, canvas.height)
				const ed = edgeData.data
				for (let y = 1; y < canvas.height - 1; y++) {
					for (let x = 1; x < canvas.width - 1; x++) {
						const idx = (y * canvas.width + x) * 4
						const gx =
							-ed[idx - 4 - canvas.width * 4] - 2 * ed[idx - canvas.width * 4] - ed[idx + 4 - canvas.width * 4] +
							ed[idx - 4 + canvas.width * 4] + 2 * ed[idx + canvas.width * 4] + ed[idx + 4 + canvas.width * 4]
						const gy =
							-ed[idx - 4 - canvas.width * 4] - 2 * ed[idx - 4] - ed[idx - 4 + canvas.width * 4] +
							ed[idx + 4 - canvas.width * 4] + 2 * ed[idx + 4] + ed[idx + 4 + canvas.width * 4]
						let mag = Math.min(255, Math.sqrt(gx * gx + gy * gy))
						ed[idx] = 255
						ed[idx + 1] = 255 - mag
						ed[idx + 2] = 255 - mag
					}
				}
				ctx.globalAlpha = 0.35
				ctx.putImageData(edgeData, 0, 0)
				finish(canvas.toDataURL("image/png"))
			} catch {
				finish(selectedSrc) // fallback
			}
		}
		img.onerror = () => {
			const elapsed = performance.now() - start
			const remain = Math.max(0, MIN_ANALYZE_TIME - elapsed)
			setTimeout(() => {
				if (analysisIdRef.current !== currentId) return
				setOutputSrc(selectedSrc)
				setAnalyzing(false)
				toast.error("Failed to analyze image")
			}, remain)
		}
		img.src = selectedSrc

		return () => {
			// invalidate this analysis if component unmounts or new one starts
		}
	}, [selectedSrc])

	const handleFile = (e) => {
		const file = e.target.files?.[0]
		if (!file) return
		const reader = new FileReader()
		reader.onload = (ev) => setSelectedSrc(ev.target.result)
		reader.readAsDataURL(file)
	}

	return (
		<div className="flex flex-col gap-6">
			{/* Gallery */}
			<Card>
				<CardContent className="p-4">
					<div className="mb-4 text-sm font-medium">Sample Images</div>
					<div className="grid grid-cols-3 gap-4">
						{sampleImages.map((src, i) => (
							<button
								key={i}
								type="button"
								onClick={() => setSelectedSrc(src)}
								className={`group relative aspect-video w-full overflow-hidden rounded-md border text-left ring-offset-background transition hover:ring-2 hover:ring-ring focus:outline-none focus:ring-2 focus:ring-ring ${
									selectedSrc === src ? "ring-2 ring-primary" : "border-border"
								}`}
							>
								<img
									src={src}
									alt={`sample-${i + 1}`}
									className="h-full w-full object-cover transition group-hover:scale-105"
									loading="lazy"
								/>
								{selectedSrc === src && (
									<span className="absolute inset-0 bg-primary/20" />
								)}
							</button>
						))}
					</div>
					<div className="mt-6">
						<input
							ref={fileInputRef}
							type="file"
							accept="image/*"
							className="hidden"
							onChange={handleFile}
						/>
						<Button
							variant="outline"
							onClick={() => fileInputRef.current?.click()}
							className="gap-2"
						>
							<Upload className="h-4 w-4" />
							Upload Image
						</Button>
					</div>
				</CardContent>
			</Card>

			{/* Results */}
			<div className="grid gap-6 md:grid-cols-2">
				<Card className="relative">
					<CardContent className="flex aspect-video items-center justify-center p-2">
						{selectedSrc ? (
							<img
								src={selectedSrc}
								alt="input"
								className="h-full w-full rounded-md object-contain"
							/>
						) : (
							<Placeholder label="Input Image" />
						)}
					</CardContent>
				</Card>
				<Card className="relative">
					<CardContent className="flex aspect-video items-center justify-center p-2">
						{analyzing && (
							<div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
								<Loader2 className="h-6 w-6 animate-spin" />
								Processing...
							</div>
						)}
						{!analyzing && outputSrc && (
							<img
								src={outputSrc}
								alt="output"
								className="h-full w-full rounded-md object-contain"
							/>
						)}
						{!analyzing && !outputSrc && <Placeholder label="Output Image" />}
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

function Placeholder({ label }) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed text-xs text-muted-foreground">
			<ImageIcon className="h-6 w-6 opacity-60" />
			{label}
		</div>
	)
}