"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Users, Globe, Target } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", description: "To provide world-class electronics manufacturing services through innovation and quality." },
  { icon: Globe, title: "Global Reach", description: "A strong supply chain network ensuring cost-effective component sourcing globally." },
  { icon: Users, title: "Customer Centric", description: "Fostering long-term relationships through trust, transparency, and transparency." },
  { icon: Cpu, title: "Tech Driven", description: "Leveraging cutting-edge technology for precise and efficient manufacturing." },
];

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-8"
          >
            Pioneering the Future of <br />
            <span className="text-primary">Electronic Manufacturing</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mefron Technologies is India's premier electronics manufacturing company, 
            delivering excellence from prototyping to full-scale production for global innovators.
          </p>
        </div>
      </section>

      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-card border border-border rounded-3xl text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <v.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
