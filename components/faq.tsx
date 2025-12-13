"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Bagaimana cara kerja jasa titip kirim di FlyBox?",
    answer:
      "FlyBox menghubungkan Anda dengan traveler yang bepergian ke destinasi Anda atau memungkinkan Anda bergabung dengan grup pengiriman untuk berbagi biaya. Anda cukup cari traveler atau grup, koordinasikan detail, dan lacak pengiriman secara real-time.",
  },
  {
    question: "Apakah pengiriman saya aman dan terjamin?",
    answer:
      "Ya! Semua traveler di platform kami telah melalui proses verifikasi. Kami juga menyediakan sistem pembayaran aman, asuransi pengiriman, dan sistem rating untuk memastikan kepercayaan komunitas.",
  },
  {
    question: "Berapa biaya yang bisa saya hemat?",
    answer:
      "Pengguna kami rata-rata menghemat hingga 70% dari biaya pengiriman konvensional, terutama saat bergabung dengan grup delivery. Semakin banyak anggota yang bergabung, semakin murah biaya per orang.",
  },
  {
    question: "Bagaimana cara melacak paket saya?",
    answer:
      "Aplikasi kami menyediakan pelacakan real-time dengan notifikasi di setiap tahap pengiriman. Anda bisa chat langsung dengan traveler dan melihat update status paket kapan saja.",
  },
  {
    question: "Apa saja barang yang bisa dikirim?",
    answer:
      "Anda bisa mengirim berbagai barang seperti makanan ringan, buku, pakaian, elektronik kecil, dan produk personal. Barang yang dilarang termasuk item berbahaya, ilegal, atau yang dilarang oleh regulasi penerbangan.",
  },
  {
    question: "Negara mana saja yang dilayani FlyBox?",
    answer:
      "FlyBox melayani pengiriman ke negara-negara ASEAN (Singapur, Malaysia, Thailand, Vietnam, Filipina, dll) dan East Asia (China, Korea Selatan, Jepang). Kami terus memperluas jangkauan ke destinasi baru.",
  },
  {
    question: "Bagaimana cara gabung atau buat grup pengiriman?",
    answer:
      "Sangat mudah! Cukup buka aplikasi, pilih rute yang Anda inginkan, dan cari grup yang tersedia. Anda juga bisa membuat grup sendiri dan mengundang orang lain untuk bergabung dan berbagi biaya pengiriman.",
  },
  {
    question: "Apakah ada batas berat atau ukuran paket?",
    answer:
      "Setiap traveler atau grup memiliki batas maksimal yang berbeda. Biasanya berkisar 5-20 kg tergantung kapasitas bagasi. Detail batas akan tertera saat Anda memilih traveler atau grup.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan melalui aplikasi dengan sistem escrow yang aman. Dana akan ditahan hingga paket berhasil diterima. Kami mendukung berbagai metode pembayaran termasuk transfer bank, e-wallet, dan kartu kredit.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">Punya pertanyaan? Kami punya jawabannya</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Masih ada pertanyaan lain?</p>
            <a href="mailto:support@flybox.com" className="text-primary hover:underline font-medium">
              Hubungi Tim Support Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
