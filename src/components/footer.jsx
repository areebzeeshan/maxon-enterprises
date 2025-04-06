import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Maxon Enterprises Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-lg font-bold">Maxon Enterprises</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in pharmaceutical distribution and healthcare
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#blog"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Pharmaceutical Distribution
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Medical Supplies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Healthcare Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  Logistics & Supply Chain
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  123 Pharmaceutical Avenue, Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+92 21 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  info@maxonenterprises.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Maxon Enterprises. All rights
              reserved.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link
                href="#"
                className="hover:text-primary hover:underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-primary hover:underline transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="hover:text-primary hover:underline transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
