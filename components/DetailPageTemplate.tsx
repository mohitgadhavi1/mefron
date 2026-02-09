"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageContent } from "@/lib/site-data";

interface DetailPageTemplateProps {
  data: PageContent;
  category: string;
}

export function DetailPageTemplate({ data, category }: DetailPageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-border bg-card/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-primary/5 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </Link>
          
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
                {category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {data.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="prose prose-invert prose-lg max-w-none"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {data.content || "Experience the Mefron advantage through our precision-engineered solutions tailored to your specific needs."}
                </p>
              </motion.div>

              {data.features && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Key Capabilities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.features.map((feature, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-card/40 border border-border rounded-xl">
                        <CheckCircle2 className="text-primary shrink-0 w-5 h-5" />
                        <span className="text-sm font-medium text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-8">
              {data.specs && (
                <div className="p-8 bg-primary/5 border border-primary/20 rounded-3xl space-y-6">
                  <h3 className="text-xl font-bold text-white">Technical Specs</h3>
                  <div className="space-y-4">
                    {Object.entries(data.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-2 border-b border-white/10 text-sm">
                        <span className="text-muted-foreground font-medium">{key}</span>
                        <span className="text-white font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-8 bg-card border border-border rounded-3xl text-center space-y-6">
                <h3 className="text-xl font-bold text-white">Ready to start?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Discuss your project requirements with our technical experts today.
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full h-12 font-bold">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
