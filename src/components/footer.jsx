
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#122F24] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company information */}
          <div>
            <Link to="/" className="text-xl font-bold">
              EXPRESS DIGITAL
              <span className="block text-sm font-normal tracking-widest">
                LAND SURVEY
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">
              Digital land surveying, map preparation, and
              land-record support for clearer property decisions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-lime-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-lime-300">Services</Link></li>
              <li><Link to="/projects" className="hover:text-lime-300">Our Work</Link></li>
              <li><Link to="/about" className="hover:text-lime-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-lime-300">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">Our Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>Digital Land Survey</li>
              <li>Map Preparation</li>
              <li>Deed & Mouza Map Retrieval</li>
              <li>Demarcation & Overlap</li>
              <li>Record Verification</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact Information</h3>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <p className="flex items-start gap-3">
                <MapPin size={19} className="shrink-0 text-lime-300" />
                <span>Add your business address here</span>
              </p>

              <p className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-lime-300" />
                <span>Add your business phone number</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-lime-300" />
                <span>Add your business email</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col justify-between gap-4
          border-t border-white/15 pt-6 text-sm text-white/60 md:flex-row">

          <p>
            © {new Date().getFullYear()} Express Digital Land Survey.
            All rights reserved.
          </p>

          <p>
            Owner & Surveyor: Faysal Ahamed Shanto
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1 hover:text-lime-300"
          >
            Request a Survey <ArrowUpRight size={16} />
          </Link>

        </div>
      </div>
    </footer>
  )
}
