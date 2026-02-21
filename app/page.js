'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { CATEGORIES, toSlug, getCategorySlug } from '../lib/categories'

const FEATURED_BRANDS = [
  { name: 'ACDelco', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/acdelco.gif' },
  { name: 'Mopar', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/mopar.gif' },
  { name: 'Wagner', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/wagner.gif' },
  { name: 'Sachs', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/sachs.gif' },
  { name: 'Valeo', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/valeo.gif' },
  { name: 'Brembo', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/brembo.gif' },
  { name: 'Continental', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/continental.gif' },
  { name: 'Dorman', img: 'https://1800battery-images.s3.us-west-2.amazonaws.com/brands/dorman.png' },
  { name: 'Bosch', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/bosch.gif' },
  { name: 'Motorcraft', img: 'https://digital-assets.opticatonline.com/brand-logos/400x160/motorcraft.gif' }
]

const CUSTOMER_REVIEWS = [
  { name: 'Charles', time: '21 hours ago', text: 'Claudio went the extra mile to install a battery in my Audi A6, which has a very difficult installation. The battery works great. I would highly recommend Supreme Auto Parts.' },
  { name: 'Steven', time: '1 day ago', text: 'It was all great! Fast shipping and excellent quality parts.' },
  { name: 'Ronald', time: '4 days ago', text: 'Outstanding service. Knowledgeable staff, very friendly but professional. Quick service. I would recommend them and will use them again.' },
  { name: 'JERMAINE', time: '2 days ago', text: 'The Tech was on time, did the job fast, very friendly, and professional. Excellent service!' },
  { name: 'Rita', time: '5 days ago', text: 'Jason was quick, friendly and very informative. We so appreciate the fast service!' },
  { name: 'Tom', time: '3 days ago', text: "My technician was excellent. Professional and very friendly. The whole service was very easy. Highly recommend!" },
]

function StarRating() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="h-5 w-5 text-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  )
}

import { YEARS, MAKES, MAKE_MODELS } from '../lib/vehicle'

export default function Home() {
  const [year, setYear] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('make')
  const [categorySearch, setCategorySearch] = useState('')
  const [cartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuExpandedCategory, setMenuExpandedCategory] = useState(null)
  const [menuExpandedSub, setMenuExpandedSub] = useState(null)

  const closeMenu = () => setMenuOpen(false)
  const scrollToVehicleForm = () => {
    closeMenu()
    document.getElementById('vehicle-form')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToCategories = (close = false) => {
    if (close) closeMenu()
    document.getElementById('homepage-categories')?.scrollIntoView({ behavior: 'smooth' })
  }
  const toggleMenuCategory = (name) => {
    setMenuExpandedCategory((prev) => (prev === name ? null : name))
    setMenuExpandedSub(null)
  }
  const toggleMenuSub = (key) => {
    setMenuExpandedSub((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleSearchSubmit = (e) => {
    e?.preventDefault()
    if (searchQuery.trim()) {
      setCategorySearch(searchQuery.trim())
      scrollToCategories()
    }
  }
  const handleVehicleGo = () => {
    scrollToCategories()
  }

  return (
    <div id="top" className="min-h-screen bg-[#0F0F0F]">
      {/* Hamburger Menu Overlay */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/70" onClick={closeMenu} aria-hidden="true" />
          <div className="fixed top-0 left-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-[#1a1a1a] shadow-xl" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between border-b border-gold/20 px-4 py-4">
              <span className="text-lg font-bold text-white">Menu</span>
              <button type="button" onClick={closeMenu} className="p-2 text-gray-400 hover:bg-white/10 rounded" aria-label="Close menu">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="py-4">
              <div className="border-b border-gold/20 pb-4">
                <Link href="/#top" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-gold/10 font-medium">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <button type="button" onClick={scrollToVehicleForm} className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-gold/10 font-medium">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Find Parts by Vehicle
                </button>
                <button type="button" onClick={() => scrollToCategories(true)} className="flex w-full items-center gap-3 px-4 py-3 text-left text-white hover:bg-gold/10 font-medium">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Shop by Category
                </button>
                <Link href="/cart" onClick={closeMenu} className="flex items-center gap-3 px-4 py-3 text-white hover:bg-gold/10 font-medium">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gold">Categories</h3>
                  <Link href="/c" onClick={closeMenu} className="text-sm font-medium text-gold hover:underline">View all</Link>
                </div>
                {CATEGORIES.slice(0, 10).map((cat) => {
                  const categorySlug = getCategorySlug(cat)
                  const isCatOpen = menuExpandedCategory === cat.name
                  return (
                    <div key={cat.name} className="border-b border-white/5">
                      <button type="button" onClick={() => toggleMenuCategory(cat.name)} className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gold/10 ${isCatOpen ? 'bg-gold/10' : ''}`}>
                        <span className="font-medium text-white truncate">{cat.name}</span>
                        <svg className={`h-5 w-5 shrink-0 text-gold transition-transform ${isCatOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isCatOpen && (
                        <div className="bg-black/30 py-2">
                          {cat.subcategories?.slice(0, 5).map((sub) => {
                            const subName = typeof sub === 'string' ? sub : sub.name
                            return (
                              <Link key={subName} href={`/c/${categorySlug}/${toSlug(subName)}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gray-300 hover:text-gold hover:bg-gold/5">
                                {subName}
                              </Link>
                            )
                          })}
                          <Link href={`/c/${categorySlug}`} onClick={closeMenu} className="block px-8 py-2 text-sm text-gold hover:underline">
                            View all {cat.name} →
                          </Link>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Top Bar - Dark Premium Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F] border-b border-gold/20">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button type="button" onClick={() => setMenuOpen(true)} className="p-2 text-white hover:bg-gold/10 rounded" aria-label="Menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search parts, brands, or part numbers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-white/5 border border-gold/30 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none text-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gold hover:text-gold-light">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-2">
            <Link href="/c" className="hidden sm:flex items-center gap-2 px-3 py-2 text-white hover:bg-gold/10 rounded-lg transition-colors">
              <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span className="text-sm font-medium">Categories</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-2 px-3 py-2 text-white hover:bg-gold/10 rounded-lg" aria-label={`${cartCount} items in cart`}>
              <span className="relative">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-black">
                    {cartCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[68px]"></div>

      {/* Hero Section - Premium Dark with Gold Accents */}
      <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                <span className="text-gold text-sm font-semibold uppercase tracking-wider">Premium Auto Parts</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Quality Parts.<br />
                <span className="text-gold">Unbeatable</span> Prices.
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Shop over 100,000+ auto parts from top brands. Same-day delivery available with optional professional installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" onClick={scrollToVehicleForm} className="group px-8 py-4 bg-gold hover:bg-gold-light text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                  Find Parts for Your Vehicle
                  <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button type="button" onClick={scrollToCategories} className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-colors">
                  Browse All Parts
                </button>
              </div>
            </div>

            {/* Vehicle Selector Card */}
            <div id="vehicle-form" className="bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl border border-gold/20 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                  <svg className="h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                Find Parts by Vehicle
              </h2>
              
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {['make', 'vin'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      activeTab === tab 
                        ? 'bg-gold text-black' 
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {tab === 'make' ? 'Year / Make / Model' : 'VIN Lookup'}
                  </button>
                ))}
              </div>

              {activeTab === 'make' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select Year</option>
                      {YEARS.map(y => <option key={y} value={y} className="bg-[#1a1a1a]">{y}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Make</label>
                    <select
                      value={make}
                      onChange={(e) => { setMake(e.target.value); setModel(''); }}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select Make</option>
                      {MAKES.map((m) => <option key={m} value={m} className="bg-[#1a1a1a]">{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Model</label>
                    <select
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      disabled={!make}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none disabled:opacity-50"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select Model</option>
                      {(MAKE_MODELS[make] || []).map(m => <option key={m} value={m} className="bg-[#1a1a1a]">{m}</option>)}
                    </select>
                  </div>
                  <button type="button" onClick={handleVehicleGo} className="w-full py-4 bg-gold hover:bg-gold-light text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                    Search Parts
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              )}

              {activeTab === 'vin' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">VIN Number</label>
                    <input type="text" placeholder="Enter your 17-digit VIN" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none" />
                  </div>
                  <p className="text-xs text-gray-500">Find your VIN on the driver's side dashboard or door jamb</p>
                  <button type="button" onClick={scrollToCategories} className="w-full py-4 bg-gold hover:bg-gold-light text-black font-bold rounded-lg transition-colors">
                    Decode VIN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#1a1a1a] border-y border-gold/10 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: '✓', title: 'Fitment Guarantee', desc: '100% compatibility' },
              { icon: '↩', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '🔧', title: 'Expert Support', desc: '24/7 assistance' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl mb-2">{item.icon}</span>
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="homepage-categories" className="bg-[#0F0F0F] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Shop by Category</h2>
              <p className="text-gray-500 mt-2">Find exactly what you need</p>
            </div>
            <Link href="/c" className="hidden md:flex items-center gap-2 px-4 py-2 bg-gold/10 hover:bg-gold/20 text-gold rounded-lg transition-colors">
              View All
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search categories..."
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-gold/20 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {CATEGORIES.filter(cat => {
              if (!categorySearch) return true
              return cat.name.toLowerCase().includes(categorySearch.toLowerCase())
            }).map((cat) => {
              const categorySlug = getCategorySlug(cat)
              return (
                <Link
                  key={cat.name}
                  href={`/c/${categorySlug}`}
                  className="group relative bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-gold/30 overflow-hidden transition-all hover:shadow-lg hover:shadow-gold/5"
                >
                  <div className="aspect-square p-4 flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={cat.img}
                        alt={cat.name}
                        className="max-h-24 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-white font-bold text-sm text-center group-hover:text-gold transition-colors">{cat.name}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-[#1a1a1a] py-16 border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
              Trusted Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">Premium Brands</h2>
            <p className="text-gray-500 mt-2">We partner with the industry's leading manufacturers</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {FEATURED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="group bg-white/5 rounded-xl border border-white/5 hover:border-gold/30 p-6 flex items-center justify-center min-h-[100px] transition-all"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  referrerPolicy="no-referrer"
                  className="max-h-10 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="bg-[#0F0F0F] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-3">
              <StarRating />
              <span className="text-gray-400">Based on <span className="text-white font-bold">6,087</span> reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-xl border border-white/5 p-6 hover:border-gold/20 transition-colors">
                <StarRating />
                <p className="text-gray-300 mt-4 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-light py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Ready to Find Your Parts?</h2>
          <p className="text-black/70 text-lg mb-8">Join thousands of satisfied customers who trust Supreme Auto Parts</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button type="button" onClick={scrollToVehicleForm} className="px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-lg transition-colors">
              Search by Vehicle
            </button>
            <Link href="/c" className="px-8 py-4 bg-white/20 hover:bg-white/30 text-black font-bold rounded-lg transition-colors border border-black/10">
              Browse All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-16 px-6 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <img src="/logo.svg" alt="Supreme Auto Parts" className="h-12 w-auto" />
              </Link>
              <p className="text-gray-500 max-w-md">
                Your trusted source for premium auto parts. Quality products, competitive prices, and exceptional service.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/c" className="block text-gray-400 hover:text-white transition-colors">Shop Categories</Link>
                <Link href="/brands" className="block text-gray-400 hover:text-white transition-colors">Brands</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-4">Support</h4>
              <div className="space-y-2">
                <Link href="/track-order" className="block text-gray-400 hover:text-white transition-colors">Track Order</Link>
                <Link href="/return-policy" className="block text-gray-400 hover:text-white transition-colors">Returns</Link>
                <Link href="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms-and-conditions" className="block text-gray-400 hover:text-white transition-colors">Terms</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Supreme Auto Parts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
