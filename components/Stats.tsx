"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Components Delivered", value: "80Mn+" },
  { label: "Skilled Employees", value: "1200+" },
  { label: "Manufacturing Facility", value: "150,000+", unit: "Sqft" },
  { label: "Satisfied Clients", value: "500+" },
];

export function Stats() {
  return (
    <section className="py-20 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label} {stat.unit && <span className="lowercase">{stat.unit}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
