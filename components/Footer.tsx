import React from "react";
import Link from "next/link";
import { Cpu, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cpu className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                MEFRON
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              India's premier electronics manufacturing company offering end-to-end EMS solutions from prototyping to mass production.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#industries" className="text-muted-foreground hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="#infrastructure" className="text-muted-foreground hover:text-primary transition-colors">Infrastructure</Link></li>
              <li><Link href="#company" className="text-muted-foreground hover:text-primary transition-colors">Our Company</Link></li>
              <li><Link href="#blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">PCB Assembly</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Plastic Injection Molding</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Wire & Cable Harness</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Rapid Prototyping</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Box Build Assembly</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                <span>Sector 63, Noida, Uttar Pradesh, India - 201301</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span>sales@mefron.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mefron Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
