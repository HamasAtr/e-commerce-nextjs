"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@wix/stores"

interface ProductProps {
  product: products.Product;
}

const models = [
  {
    image: "/img-1.jpg",
    name: "EcoGlide Pro",
    description: "Our flagship model with advanced features for the discerning golfer.",
    price: "$2,499",
  },
  {
    image: "/img-2.avif",
    name: "FairwayFlyer",
    description: "Perfect for beginners and intermediate players seeking reliability and comfort.",
    price: "$1,999",
  },
  {
    image: "/img-3.avif",
    name: "TurfTrekker",
    description: "Designed for rough terrain and long-distance golfing adventures.",
    price: "$2,799",
  }
]

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % models.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length)
  }

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Golf Ebike Models</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {models.map((model, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-2xl mx-auto">
                    <Image
                      src={model.image || "/placeholder.svg"}
                      alt={`Golf Ebike model ${model.name}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-2 text-primary">{model.name}</h3>
                    <p className="text-muted-foreground mb-4">{model.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-primary">{model.price}</span>
                      <Button>View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

