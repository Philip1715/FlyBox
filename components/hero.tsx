import { Apple, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-100/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Jasa Titip Kirim ASEAN & East Asia <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-primary bg-clip-text text-transparent">Berbasis Komunitas</span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl">
            Hubungkan dengan traveler atau gabung grup pengiriman untuk hemat biaya. Kirim paket ke Singapur, Malaysia,
            Thailand, China, Korea, Jepang dan negara lainnya dengan aman dan terpercaya.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto group bg-foreground text-background hover:bg-foreground/90">
              <Apple className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="text-xs opacity-90">Download di</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>

            <Button size="lg" variant="outline" className="w-full sm:w-auto group border-2 bg-transparent" asChild>
              <a href="https://www.figma.com/proto/nJ2njf0q7yp0QjCBcMueXQ/PPD-TK?node-id=15-389&p=f&t=lEqCTnUDDPEEmnVc-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A4955&starting-point-node-id=15%3A389&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-5 w-5 fill-current" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download di</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-muted-foreground">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-muted-foreground">Negara ASEAN & Asia</div>
            </div>
            <div className="col-span-2 text-center sm:col-span-1">
              <div className="mb-2 text-3xl font-bold bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">70%</div>
              <div className="text-sm text-muted-foreground">Hemat Biaya</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
