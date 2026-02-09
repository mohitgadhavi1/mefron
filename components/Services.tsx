"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Zap, 
  Layers, 
  Settings, 
  Box, 
  Activity, 
  ShieldCheck 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "PCB Assembly",
    slug: "pcb-assembly",
    description: "High-speed SMT lines and experienced engineers delivering customized PCB solutions.",
    icon: Activity,
  },
  {
    title: "Plastic Injection Molding",
    slug: "plastic-injection-molding",
    description: "State-of-the-art technology ensuring high-quality, complex part production.",
    icon: Layers,
  },
  {
    title: "Wire & Cable Harness",
    slug: "cable-wire-harness-assembly",
    description: "Reliable assembly services guaranteeing seamless connectivity and robust performance.",
    icon: Zap,
  },
  {
    title: "Rapid Prototyping",
    slug: "rapid-prototyping",
    description: "Fast-track your product development with our agile prototyping capabilities.",
    icon: Settings,
  },
  {
    title: "Box Build Assembly",
    slug: "box-build-electro-mechanical-assembly",
    description: "Full system integration of electromechanical components into functional systems.",
    icon: Box,
  },
  {
    title: "Testing & Quality",
    slug: "testing-quality",
    description: "Rigorous quality control and testing to meet and exceed global industry standards.",
    icon: ShieldCheck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Core Services</h2>
          <p className="text-muted-foreground text-lg">
            Mefron Technologies offers a comprehensive suite of electronics manufacturing services, 
            backed by decades of expertise and cutting-edge infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/services/${service.slug}`}>
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all group h-full cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="text-primary w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
