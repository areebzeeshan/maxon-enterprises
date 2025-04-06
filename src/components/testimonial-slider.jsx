"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Dr. Ahmed Khan",
    role: "Medical Director, City Hospital",
    content:
      "Maxon Enterprises has been our trusted pharmaceutical partner for over 5 years. Their commitment to quality and timely delivery has been exceptional.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Pharmacy Manager, HealthCare Pharmacy",
    content:
      "Working with Maxon Enterprises has significantly improved our inventory management and customer satisfaction. Their wide range of products and competitive pricing make them our preferred distributor.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Dr. Fatima Malik",
    role: "CEO, Wellness Clinic",
    content:
      "The team at Maxon Enterprises understands our needs and provides tailored solutions. Their customer service is outstanding, and they always go the extra mile to ensure our satisfaction.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Hear from our satisfied clients about their experience working
              with Maxon Enterprises.
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-4xl mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    <Quote className="h-12 w-12 text-primary/20 mb-6" />
                    <p className="text-lg md:text-xl italic mb-8">
                      "{testimonials[current].content}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                        <Image
                          src={
                            testimonials[current].image || "/placeholder.svg"
                          }
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold">
                        {testimonials[current].name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              prevSlide();
              setAutoplay(false);
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-primary p-2 rounded-full z-10 transition-all shadow-md md:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setAutoplay(false);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-primary p-2 rounded-full z-10 transition-all shadow-md md:translate-x-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
