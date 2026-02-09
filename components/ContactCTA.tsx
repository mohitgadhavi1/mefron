"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40"
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/30 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Looking for a Reliable Electronic <br className="hidden md:block" />
              Manufacturing Partner?
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Join hundreds of companies that trust Mefron Technologies for their most critical electronics manufacturing needs. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="secondary" className="rounded-full px-10 h-16 text-lg font-bold bg-white text-primary hover:bg-white/90 border-none w-full sm:w-auto">
                <Mail className="mr-3 w-5 h-5" /> Talk to our experts
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                Request a Quote <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
