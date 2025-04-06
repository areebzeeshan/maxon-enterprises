"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Pill,
  FlaskRoundIcon as Flask,
  HeartPulse,
  Stethoscope,
  Phone,
} from "lucide-react";

export default function MainNav() {
  return (
    <>
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Maxon Enterprises Logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
          <span className="hidden font-bold sm:inline-block">
            Maxon Enterprises
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-sky-100 to-sky-50 p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Pharmaceutical Solutions
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Comprehensive pharmaceutical distribution and supply
                          chain management for healthcare providers.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    href="#"
                    title="Distribution"
                    icon={<Pill className="h-4 w-4" />}
                  >
                    Nationwide pharmaceutical distribution
                  </ListItem>
                  <ListItem
                    href="#"
                    title="Medical Supplies"
                    icon={<Flask className="h-4 w-4" />}
                  >
                    High-quality medical supplies and equipment
                  </ListItem>
                  <ListItem
                    href="#"
                    title="Healthcare Solutions"
                    icon={<HeartPulse className="h-4 w-4" />}
                  >
                    Innovative healthcare solutions
                  </ListItem>
                  <ListItem
                    href="#"
                    title="Consulting"
                    icon={<Stethoscope className="h-4 w-4" />}
                  >
                    Expert healthcare consulting services
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="mr-2 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <MobileNav />
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-between md:hidden">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Maxon Enterprises Logo"
            width={40}
            height={40}
            className="h-8 w-auto"
          />
          <span className="font-bold">Maxon Enterprises</span>
        </Link>
        <Link href="#contact">
          <Button size="sm" variant="ghost" className="gap-1">
            <Phone className="h-4 w-4" />
            Contact
          </Button>
        </Link>
      </div>
      <div className="hidden md:flex md:flex-1 md:justify-end">
        <Link href="#contact">
          <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
        </Link>
      </div>
    </>
  );
}

function MobileNav() {
  return (
    <div className="grid gap-6 p-4">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/images/logo.png"
          alt="Maxon Enterprises Logo"
          width={40}
          height={40}
          className="h-8 w-auto"
        />
        <span className="font-bold">Maxon Enterprises</span>
      </Link>
      <div className="grid grid-flow-row auto-rows-max text-sm">
        <Link
          href="/"
          className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
        >
          Services
        </Link>
        <Link
          href="#about"
          className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
        >
          About
        </Link>
        <Link
          href="#blog"
          className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
        >
          Blog
        </Link>
        <Link
          href="#contact"
          className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, icon, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex items-center gap-2 text-sm font-medium leading-none">
              {icon}
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
