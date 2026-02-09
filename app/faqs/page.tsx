"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/lib/site-data";

export default function FAQsPage() {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h1>
            <p className="text-lg text-muted-foreground italic">
              Everything you need to know about working with Mefron.
            </p>
          </div>

          <div className="space-y-12">
            {faqsData.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h2 className="text-2xl font-bold text-white border-l-4 border-primary pl-4">
                  {category.category}
                </h2>
                <div className="bg-card border border-border rounded-3xl overflow-hidden px-8">
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, i) => (
                      <AccordionItem key={i} value={`item-${idx}-${i}`} className="border-border/50">
                        <AccordionTrigger className="text-white hover:text-primary transition-colors text-left py-6">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
