"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Users, Award, Globe } from "lucide-react";

export default function CounterSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <Counter
            icon={
              <Building className="h-10 w-10 mb-4 mx-auto text-primary-foreground/80" />
            }
            end={15}
            suffix="+"
            text="Years of Experience"
          />
          <Counter
            icon={
              <Users className="h-10 w-10 mb-4 mx-auto text-primary-foreground/80" />
            }
            end={500}
            suffix="+"
            text="Satisfied Clients"
          />
          <Counter
            icon={
              <Award className="h-10 w-10 mb-4 mx-auto text-primary-foreground/80" />
            }
            end={50}
            suffix="+"
            text="Quality Products"
          />
          <Counter
            icon={
              <Globe className="h-10 w-10 mb-4 mx-auto text-primary-foreground/80" />
            }
            end={100}
            suffix="%"
            text="Customer Satisfaction"
          />
        </div>
      </div>
    </section>
  );
}

function Counter({ icon, end, suffix = "", text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      {icon}
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-primary-foreground/80">{text}</p>
    </motion.div>
  );
}
