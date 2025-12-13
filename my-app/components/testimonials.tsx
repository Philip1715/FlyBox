import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Martinez",
    location: "Singapura → Indonesia",
    content:
      "Layanannya mantap! Saya bisa kirim paket dari Indonesia dengan mudah dan hemat. Travelernya ramah dan terpercaya.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Rian Haryanto",
    location: "Indonesia → Malaysia",
    content:
      "Aplikasi ini membantu saya kirim jajanan lokal untuk keluarga di luar negeri dengan harga yang sangat terjangkau.",
    rating: 5,
    avatar: "RH",
  },
  {
    name: "Aisha Lee",
    location: "Indonesia → China",
    content:
      "Bergabung dengan grup delivery sangat menguntungkan! Ongkir jadi murah dan bisa chat sama yang lain. Puas!",
    rating: 5,
    avatar: "AL",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Dipercaya oleh Ribuan Pengguna
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Lihat apa yang komunitas kami katakan tentang PackShare
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="mb-6 text-muted-foreground italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
