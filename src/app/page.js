"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  FlaskRoundIcon as Flask,
  HeartPulse,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Pill,
  Stethoscope,
  Truck,
} from "lucide-react";

import MainNav from "@/components/main-nav";
import Footer from "@/components/footer";
import HeroSlider from "@/components/hero-slider";
import TestimonialSlider from "@/components/testimonial-slider";
import CounterSection from "@/components/counter-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <HeroSlider />
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-sky-50"
        >
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
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Leading Pharmaceutical Distribution
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Maxon Enterprises has been a trusted name in the
                  pharmaceutical industry for over a decade, providing
                  high-quality medical supplies and healthcare solutions across
                  the country.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Quality Assurance</h3>
                      </div>
                      <p className="text-muted-foreground">
                        We ensure all products meet the highest quality
                        standards and regulatory requirements.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">
                          Nationwide Distribution
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        Our extensive distribution network ensures timely
                        delivery across the country.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">
                          Customer-Centric Approach
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        We prioritize our customers' needs and provide
                        personalized solutions.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=550&width=800"
                  width={800}
                  height={550}
                  alt="About Us Image"
                  className="h-full w-full object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <CounterSection />

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
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
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Comprehensive Pharmaceutical Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We offer a wide range of services to meet the diverse needs of
                  healthcare providers and patients.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Pill className="h-10 w-10 text-primary" />,
                  title: "Pharmaceutical Distribution",
                  description:
                    "We distribute a wide range of pharmaceutical products from leading manufacturers to pharmacies, hospitals, and clinics.",
                },
                {
                  icon: <Flask className="h-10 w-10 text-primary" />,
                  title: "Medical Supplies",
                  description:
                    "We provide high-quality medical supplies and equipment to healthcare facilities, ensuring they have the tools they need.",
                },
                {
                  icon: <Truck className="h-10 w-10 text-primary" />,
                  title: "Logistics & Supply Chain",
                  description:
                    "Our efficient logistics and supply chain management ensure timely delivery of products to our clients.",
                },
                {
                  icon: <HeartPulse className="h-10 w-10 text-primary" />,
                  title: "Healthcare Consulting",
                  description:
                    "We provide expert advice and consulting services to healthcare providers to optimize their operations.",
                },
                {
                  icon: <Stethoscope className="h-10 w-10 text-primary" />,
                  title: "Medical Equipment",
                  description:
                    "We supply and maintain a wide range of medical equipment for hospitals, clinics, and healthcare facilities.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "24/7 Support",
                  description:
                    "Our dedicated customer support team is available round the clock to address any queries or concerns.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  The Maxon Enterprises Advantage
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  What sets us apart from the competition and makes us the
                  preferred choice for healthcare providers.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <CheckCircle className="h-10 w-10 text-primary" />,
                  title: "Quality Assurance",
                  description:
                    "We ensure all products meet the highest quality standards and regulatory requirements.",
                },
                {
                  icon: <Truck className="h-10 w-10 text-primary" />,
                  title: "Timely Delivery",
                  description:
                    "Our efficient logistics ensure products reach you when you need them.",
                },
                {
                  icon: <Building2 className="h-10 w-10 text-primary" />,
                  title: "Industry Experience",
                  description:
                    "With years of experience, we understand the unique challenges of the pharmaceutical industry.",
                },
              ].map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {advantage.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{advantage.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {advantage.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <TestimonialSlider />

        <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
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
                  Latest News
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Stay Updated with Maxon Enterprises
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Read our latest blog posts to stay informed about industry
                  trends and company updates.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "New Pharmaceutical Products Launch",
                  description:
                    "Maxon Enterprises announces the launch of new pharmaceutical products to meet the growing healthcare needs.",
                  link: "/blog/new-products",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "Expanding Our Distribution Network",
                  description:
                    "We are expanding our distribution network to reach more healthcare providers across the country.",
                  link: "/blog/expanding-network",
                },
                {
                  image: "/placeholder.svg?height=200&width=400",
                  title: "Healthcare Industry Trends 2023",
                  description:
                    "Stay updated with the latest trends and developments in the healthcare and pharmaceutical industry.",
                  link: "/blog/industry-trends",
                },
              ].map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="p-0">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        width={400}
                        height={200}
                        alt="Blog Image"
                        className="aspect-[2/1] w-full object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="line-clamp-1">
                        {blog.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">
                        {blog.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Link
                        href={blog.link}
                        className="flex items-center text-sm text-primary hover:underline"
                      >
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="gap-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  View All Posts <MoveRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-sky-50"
        >
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
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Get in Touch with Maxon Enterprises
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Have questions or need more information? Reach out to us and
                  our team will get back to you.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Pharmaceutical Avenue, Karachi, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Phone</h3>
                    <p className="text-muted-foreground">+92 21 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Email</h3>
                    <p className="text-muted-foreground">
                      info@maxonenterprises.com
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <ul className="mt-4 space-y-2">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">
                        Monday - Friday
                      </span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                className="rounded-lg border bg-background p-6 shadow-sm"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold">Send Us a Message</h3>
                <form className="mt-6 space-y-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
                  Our Partners
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We collaborate with leading pharmaceutical companies and
                  healthcare providers.
                </p>
              </motion.div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/placeholder.svg?height=80&width=160"
                    width={160}
                    height={80}
                    alt="Partner Logo"
                    className="h-12 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to Partner with Maxon Enterprises?
                  </h2>
                  <p className="text-primary-foreground/80 md:text-xl/relaxed">
                    Join our network of healthcare providers and experience the
                    Maxon difference.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contact">
                    <Button variant="secondary" className="px-8">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Tabs defaultValue="hospitals" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="hospitals">Hospitals</TabsTrigger>
                    <TabsTrigger value="pharmacies">Pharmacies</TabsTrigger>
                    <TabsTrigger value="clinics">Clinics</TabsTrigger>
                  </TabsList>
                  <TabsContent
                    value="hospitals"
                    className="p-4 bg-primary-foreground text-foreground rounded-md mt-2"
                  >
                    <h3 className="text-lg font-bold">For Hospitals</h3>
                    <p className="mt-2">
                      We provide comprehensive pharmaceutical solutions for
                      hospitals, including bulk supplies, specialized
                      medications, and medical equipment.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="pharmacies"
                    className="p-4 bg-primary-foreground text-foreground rounded-md mt-2"
                  >
                    <h3 className="text-lg font-bold">For Pharmacies</h3>
                    <p className="mt-2">
                      We offer a wide range of pharmaceutical products,
                      competitive pricing, and timely delivery to help
                      pharmacies serve their customers better.
                    </p>
                  </TabsContent>
                  <TabsContent
                    value="clinics"
                    className="p-4 bg-primary-foreground text-foreground rounded-md mt-2"
                  >
                    <h3 className="text-lg font-bold">For Clinics</h3>
                    <p className="mt-2">
                      We provide tailored solutions for clinics, including
                      essential medications, medical supplies, and equipment to
                      support patient care.
                    </p>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
