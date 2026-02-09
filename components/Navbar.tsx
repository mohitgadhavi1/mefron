"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Cpu } from "lucide-react";
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
import { cn } from "@/lib/utils";

const services = [
  { name: "PCB Assembly", href: "/services/pcb-assembly" },
  { name: "Injection Molding", href: "/services/plastic-injection-molding" },
  { name: "Wire Harness", href: "/services/cable-wire-harness-assembly" },
  { name: "Box Build", href: "/services/box-build-electro-mechanical-assembly" },
];

const infrastructure = [
  { name: "Manufacturing Hub", href: "/infrastructure/electronic-manufacturing-facilities" },
  { name: "R&D Center", href: "/infrastructure/electronic-r-and-d" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            MEFRON
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-white data-[state=open]:text-primary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-card border border-border rounded-xl">
                    {services.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            <div className="text-sm font-bold leading-none">{item.name}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                              Professional {item.name.toLowerCase()} for global innovators.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Infrastructure Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-white data-[state=open]:text-primary">
                   Infrastructure
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-2 p-4 bg-card border border-border rounded-xl">
                    {infrastructure.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            <div className="text-sm font-bold leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links */}
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-white")}>
                    Company
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-white")}>
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faqs" legacyBehavior passHref>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:text-white")}>
                    FAQs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact-us">
            <Button className="rounded-full px-6 font-semibold bg-primary hover:bg-primary/90 text-white border-none shrink-0 overflow-hidden">
               Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link href="/about-us" className="text-lg font-medium text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Company</Link>
              <Link href="/services/pcb-assembly" className="text-lg font-medium text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <Link href="/infrastructure/electronic-manufacturing-facilities" className="text-lg font-medium text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Infrastructure</Link>
              <Link href="/blog" className="text-lg font-medium text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
              <Link href="/contact-us" className="text-lg font-medium text-muted-foreground" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Button className="w-full rounded-full mt-4 bg-primary text-white">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
