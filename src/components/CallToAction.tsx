import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Revolutionize Your Golf Game?</h2>
        <p className="text-xl mb-8">
          Experience the future of golfing with our eco-friendly, efficient, and exhilarating Golf Ebikes.
        </p>
        <Button size="lg" variant="secondary">
          Shop Now
        </Button>
      </div>
    </section>
  )
}

