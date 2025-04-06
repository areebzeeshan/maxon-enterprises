"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Leading Pharmaceutical Distribution",
    description:
      "Your trusted partner in pharmaceutical distribution and healthcare solutions",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Explore Our Services",
    link: "#services",
  },
  {
    id: 2,
    title: "Quality Medical Supplies",
    description:
      "We provide high-quality medical supplies and equipment to healthcare facilities",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Learn More",
    link: "#about",
  },
  {
    id: 3,
    title: "Nationwide Distribution Network",
    description:
      "Our extensive distribution network ensures timely delivery across the country",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Contact Us",
    link: "#contact",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div className="relative h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image || "/placeholder.svg"}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[800px] text-center mx-auto text-white"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  {slides[current].title}
                </h1>
                <p className="mt-4 text-xl text-white/90">
                  {slides[current].description}
                </p>
                <div className="mt-8">
                  <Link href={slides[current].link}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      {slides[current].cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-primary w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={() => {
          prevSlide();
          setAutoplay(false);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => {
          nextSlide();
          setAutoplay(false);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-10 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
