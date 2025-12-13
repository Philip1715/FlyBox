import { Shield, TrendingDown, Globe, Clock, MessageSquare, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Traveler Terverifikasi",
    description: "Semua traveler telah terverifikasi dengan perlindungan pembayaran aman dan asuransi pengiriman.",
  },
  {
    icon: TrendingDown,
    title: "Hemat hingga 70%",
    description: "Biaya pengiriman grup lebih murah. Semakin banyak yang gabung, semakin hemat biaya untuk semua.",
  },
  {
    icon: Globe,
    title: "Jangkauan Global",
    description:
      "Terhubung dengan traveler ke lebih dari 50 negara. Temukan rute pengiriman ke mana pun Anda butuhkan.",
  },
  {
    icon: Clock,
    title: "Pelacakan Real-Time",
    description: "Tetap update dengan notifikasi live. Ketahui posisi paket Anda kapan saja dan di mana saja.",
  },
  {
    icon: MessageSquare,
    title: "Chat Grup",
    description:
      "Chat langsung dengan traveler dan anggota grup. Koordinasi detail pengiriman dengan mudah dan lancar.",
  },
  {
    icon: Star,
    title: "Sistem Rating",
    description: "Bangun kepercayaan melalui review terverifikasi. Rate traveler dan dapatkan poin reputasi komunitas.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Kenapa Pilih FlyBox?</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Semua yang Anda butuhkan untuk pengiriman ASEAN & East Asia yang aman dan terjangkau
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all hover:border-primary/50">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
