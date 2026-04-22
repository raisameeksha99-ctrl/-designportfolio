import { Button } from "@/ui/button"

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
        Design Portfolio
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
        Welcome to your new React + Vite portfolio. Tailwind CSS and shadcn/ui are ready to go.
      </p>
      <Button variant="default" size="lg">
        Get Started
      </Button>
    </div>
  )
}

export default App
