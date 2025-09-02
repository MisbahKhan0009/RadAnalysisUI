export default function NotFound() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground">404</p>
        <h2 className="text-xl font-medium">Page not found</h2>
        <p className="text-sm text-muted-foreground">Use the sidebar to get back.</p>
      </div>
    </div>
  )
}
