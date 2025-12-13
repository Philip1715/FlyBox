import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { AppDownload } from "@/components/app-download"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <AppDownload />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
