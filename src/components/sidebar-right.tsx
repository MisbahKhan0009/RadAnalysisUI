"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar, User, Activity, Download } from "lucide-react"
import { toast } from "sonner"

export function SidebarRight(props: React.ComponentProps<typeof Sidebar>) {
  const [notes, setNotes] = React.useState("")

  function generateDummyPdfBlob() {
    const pdf =
`%PDF-1.1
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 90 >>
stream
BT
/F1 24 Tf
100 730 Td (RadAnalysis Report) Tj
/F1 12 Tf
100 700 Td (Findings:) Tj
100 680 Td ( - Dummy PDF export successful) Tj
100 660 Td ( - Notes: ${(notes||"None").substring(0,60)}) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000061 00000 n 
0000000116 00000 n 
0000000265 00000 n 
0000000482 00000 n 
trailer
<< /Root 1 0 R /Size 6 >>
startxref
560
%%EOF`
    return new Blob([pdf], { type: "application/pdf" })
  }

  function handleDownload() {
    try {
      const blob = generateDummyPdfBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `analysis-report-${new Date().toISOString().slice(0,10)}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      setTimeout(() => URL.revokeObjectURL(url), 5000)
      toast.success("PDF report downloaded")
    } catch (e) {
      toast.error("Failed to generate PDF")
    }
  }

  return (
    <Sidebar side="right" variant="floating" collapsible="none" {...props}>
      <SidebarHeader className="px-4 pt-4 pb-2">
        <h2 className="text-sm font-semibold tracking-tight">Analysis</h2>
      </SidebarHeader>
      <SidebarContent className="px-0">
        <ScrollArea className="h-full px-4">
          <div className="flex flex-col gap-4 pb-4">
            {/* Analysis Report */}
            <Card className="bg-background/60 border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Analysis Report</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Dr. Sarah Wilson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-muted-foreground" />
                  <Badge variant="secondary" className="text-[10px]">Brain</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Findings */}
            <Card className="bg-background/60 border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Findings</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    <span>No significant abnormalities detected</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    <span>Image quality: Good</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                    <span>Segmentation accuracy: 95.2%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Additional Notes */}
            <Card className="bg-background/60 border-muted">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Enter additional observations or notes..."
                  className="min-h-[110px] text-xs resize-none"
                />
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="mt-auto px-4 pb-4 pt-2">
        <Button onClick={handleDownload} className="w-full gap-2" size="sm">
          <Download className="h-4 w-4" />
          Download PDF Report
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
