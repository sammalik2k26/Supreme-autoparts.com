'use client'

import Link from 'next/link'
import { MAKES, getMakeLogoUrl } from '../../lib/vehicle'

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
          </Link>
          <Link href="/" className="text-[#D4AF37] hover:underline font-medium">← Back to Home</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <img src="/car.svg" alt="" className="h-5 w-5" />
            <span className="text-sm font-medium">50+ Trusted Brands</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-[#D4AF37]">Brand</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Find quality auto parts for your vehicle from the world's leading automotive manufacturers. 
            We carry OEM and aftermarket parts for all major brands.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search brands..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-[#D4AF37] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {MAKES.map((make) => (
            <Link
              key={make}
              href={`/?make=${encodeURIComponent(make)}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#D4AF37]/30 transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:-translate-y-1"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={getMakeLogoUrl(make)}
                  alt={make}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-medium text-gray-900 text-center group-hover:text-[#D4AF37] transition-colors">
                {make}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">50+</div>
              <div className="text-gray-600 mt-1">Vehicle Brands</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">1M+</div>
              <div className="text-gray-600 mt-1">Parts Available</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">100%</div>
              <div className="text-gray-600 mt-1">Quality Guaranteed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#D4AF37]">24/7</div>
              <div className="text-gray-600 mt-1">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#D4AF37] to-[#B29026] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Can't Find Your Brand?
          </h2>
          <p className="text-white/80 mb-6">
            Contact us and we'll help you source the parts you need for any vehicle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Supreme Auto Parts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
