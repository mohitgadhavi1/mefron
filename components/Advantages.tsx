"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  "End-to-end electronic manufacturing solutions under one roof",
  "Global strong supply chain network",
  "Committed to industry standards and best practices",
  "Scalable production capabilities from prototype to mass production",
  "Cutting-edge technology for precise and efficient manufacturing",
  "Swift manufacturing processes designed for rapid turnarounds",
];

export function Advantages() {
  return (
    <section id="company" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Why Mefron as your <br />
              <span className="text-primary">Manufacturing Partner?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We empower our customers towards sustainable business growth. We believe trust and transparency foster long-term relationships with customers. We provide affordable yet high-quality product solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-sm font-medium text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-900/40 border border-primary/20 flex items-center justify-center p-8 relative">
              {/* Decorative elements representing manufacturing/tech */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center grayscale" />
              
              <div className="relative z-10 w-full h-full border-2 border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-10 bg-black/40 backdrop-blur-sm">
                <div className="w-20 h-20 bg-primary rounded-2xl mb-6 flex items-center justify-center shadow-2xl shadow-primary/50">
                  <span className="text-white font-bold text-3xl">M</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Quality & Excellence</h3>
                <p className="text-muted-foreground">Certified with ISO-9001, ISO-14001, and ISO-45001 standards.</p>
              </div>

              {/* Floaties */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 p-4 bg-primary/20 backdrop-blur-md rounded-xl border border-primary/30"
              >
                <span className="text-xs font-bold text-white tracking-widest uppercase">Trusted</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
