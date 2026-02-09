"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px" 
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              India's Leading EMS Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
          >
            One-Stop Solution for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-primary">
              Electronics Manufacturing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Mefron Technologies delivers excellence from prototyping to full-scale production. 
            We empower global innovators with precision PCB assembly and robust manufacturing solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 w-full sm:w-auto">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-bold border-white/20 hover:bg-white/5 text-white w-full sm:w-auto">
              <Play className="mr-2 w-4 h-4 fill-white" /> Watch Overview
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
