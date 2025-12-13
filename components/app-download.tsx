import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"

export function AppDownload() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-medium">Tersedia di iOS & Android</span>
            </div>

            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Download Aplikasi FlyBox
            </h2>

            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Kelola pengiriman Anda dengan mudah. Chat dengan traveler, lacak paket real-time, dan bergabung dengan
              komunitas pengiriman terpercaya.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group bg-foreground text-background hover:bg-foreground/90">
                <Apple className="mr-2 h-5 w-5" />
                <div className="text-left">
                  <div className="text-xs">Download di</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 bg-transparent">
                <Play className="mr-2 h-5 w-5 fill-current" />
                <div className="text-left">
                  <div className="text-xs">Download di</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold">4.8</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-secondary text-secondary" />
                  <span>Rating</span>
                </div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm text-muted-foreground">Download</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl"></div>
              <div className="relative flex gap-4 items-center justify-center">
                <img
                  src="/images/screenshot-133229.png"
                  alt="App Screenshot 1"
                  className="w-1/3 rounded-2xl shadow-2xl border-4 border-background"
                />
                <img
                  src="/images/screenshot-133253.png"
                  alt="App Screenshot 2"
                  className="w-1/3 rounded-2xl shadow-2xl border-4 border-background -translate-y-4"
                />
                <img
                  src="/images/screenshot-133229.png"
                  alt="App Screenshot 3"
                  className="w-1/3 rounded-2xl shadow-2xl border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}
