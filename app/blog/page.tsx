"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogData } from "@/lib/site-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListingPage() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Industrial <span className="text-primary">Insights</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends, technologies, and innovations in the electronics manufacturing industry.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="bg-card/40 border-border hover:border-primary/50 transition-all group h-full cursor-pointer">
                    <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] font-bold text-white/80 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5 bg-primary/20 backdrop-blur-md px-2 py-1 rounded">
                          <Calendar size={12} /> {post.date}
                        </span>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
