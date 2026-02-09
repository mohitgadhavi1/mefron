"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Get in Touch</h1>
              <p className="text-lg text-muted-foreground mb-12">
                Have a project in mind? Our team of experts is ready to help you bring your electronics to life.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Our Location</h3>
                    <p className="text-muted-foreground">Sector 63, Noida, Uttar Pradesh, India - 201301</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">sales@mefron.com</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 123 456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12 bg-card border border-border rounded-[2rem] shadow-2xl"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">First Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/70 ml-1">Last Name</label>
                    <input type="text" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70 ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"></textarea>
                </div>
                <Button className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold gap-2">
                  Send Message <Send size={18} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
