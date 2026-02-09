"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, 
  Car, 
  Lightbulb, 
  Gamepad2, 
  HeartPulse, 
  Radio, 
  BatteryCharging, 
  Smartphone 
} from "lucide-react";

const industries = [
  { name: "Biometrics", icon: Shield, slug: "biometric" },
  { name: "Electric Vehicles", icon: BatteryCharging, slug: "electric-vehicle" },
  { name: "LED Lighting", icon: Lightbulb, slug: "led" },
  { name: "Toys & Games", icon: Gamepad2, slug: "toys" },
  { name: "Healthcare", icon: HeartPulse, slug: "healthcare" },
  { name: "Communication", icon: Radio, slug: "communication" },
  { name: "Automotive", icon: Car, slug: "automotive" },
  { name: "Consumer Electronics", icon: Smartphone, slug: "consumer-electronics" },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Providing tailored EMS solutions across diverse sectors with precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Link href={`/industries/${industry.slug}`}>
                <div className="bg-card/40 border border-border p-8 rounded-3xl text-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all cursor-pointer h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                    <industry.icon size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white transition-colors">{industry.name}</h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
