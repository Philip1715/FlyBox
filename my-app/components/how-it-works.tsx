import { Search, Users, PackageCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    icon: Search,
    title: "1. Cari Traveler atau Buat Grup",
    description:
      "Temukan traveler yang menuju destinasi Anda atau buat grup pengiriman untuk menggabungkan paket dan berbagi biaya.",
  },
  {
    icon: Users,
    title: "2. Gabung dan Koordinasi",
    description:
      "Bergabung dengan grup yang sesuai, diskusikan detail pengiriman, dan atur jadwal bersama anggota lain.",
  },
  {
    icon: PackageCheck,
    title: "3. Lacak & Terima Paket",
    description:
      "Pantau pengiriman secara real-time dengan notifikasi. Terima paket Anda dengan aman di lokasi tujuan.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Cara Kerja PackShare</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Pengiriman lintas negara yang sederhana, aman, dan hemat biaya
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
