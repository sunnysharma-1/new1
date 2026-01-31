import { Shield, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand (now with contact info) */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Rangerss Security</div>
                <div className="text-xs text-white/70">We Make You Feel Secure</div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>Ground Floor, Vee Bee Mall, Samarvarni Road,<br />Tokarkhada, Silvassa-396230, D&NH</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>+91 99981 87871</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span>info@rangerss.in</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/70 hover:text-white transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#why-us"
                  className="text-white/70 hover:text-white transition"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Security Officers</li>
              <li className="text-white/70">Security Guards</li>
              <li className="text-white/70">Supervisors</li>
              <li className="text-white/70">Armed Personnel</li>
              <li className="text-white/70">24/7 Monitoring</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-white/70">
                Shop No. 107, Silvassa
              </li>
              <li>
                <a
                  href="tel:+919998187871"
                  className="text-white hover:text-accent transition"
                >
                  +91 9998187871
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rangerss.in"
                  className="text-white hover:text-accent transition"
                >
                  info@rangerss.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">
            © {currentYear} Rangerss Security & Surveillance. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer >
  )
}
