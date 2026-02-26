'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Notes', href: '/notes' },
    { name: 'Courses', href: '/courses' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Student Portal', href: '/student' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-accent">
            IftiVerse
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="mt-4 w-full px-6 py-2 bg-accent text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
