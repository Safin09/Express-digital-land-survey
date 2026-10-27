
import { Link } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle =
    "text-sm font-medium text-slate-700 transition-colors hover:text-green-700"

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">

        {/* Logo */}
        <Link to="/" className="font-bold tracking-tight text-green-900">
          EXPRESS DIGITAL
          <span className="block text-xs font-normal tracking-widest text-slate-600">
            LAND SURVEY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link to="/services" className={linkStyle}>Services</Link>
          <Link to="/projects" className={linkStyle}>Our Work</Link>
          <Link to="/about" className={linkStyle}>About</Link>
          <Link to="/contact" className={linkStyle}>Contact</Link>
        </div>

        {/* Request Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-semibold text-green-950 transition hover:bg-lime-400 md:flex"
        >
          Request a Survey <ArrowUpRight size={18} />
        </Link>
        {/* Mobile Menu Button */}  
        {/* new commit */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="text-green-900 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <Link to="/services" className={linkStyle} onClick={() => setMenuOpen(false)}>Services</Link>
            <Link to="/projects" className={linkStyle} onClick={() => setMenuOpen(false)}>Our Work</Link>
            <Link to="/about" className={linkStyle} onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" className={linkStyle} onClick={() => setMenuOpen(false)}>Contact</Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-fit items-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-semibold text-green-950"
            >
              Request a Survey <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
