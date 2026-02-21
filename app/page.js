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
  { name: 'Charles', time: '4 days ago', text: 'Truly a Lifesaver, Thank you for your services.' },
  { name: 'Steven', time: '1 day ago', text: 'It was all great!' },
  { name: 'Ronald', time: '4 days ago', text: 'Outstanding service. Knowledgeable mechanic, very friendly but professional. Quick service. I would recommend them and will use them again if necessary.' },
  { name: 'JERMAINE', time: '2 days ago', text: 'The Tech was on time, did the job fast, very friendly, and professional. Excellent service!' },
  { name: 'Rita', time: '5 days ago', text: 'Jason was quick, friendly and very informative about electric cars. We so appreciate the fast service!' },
  { name: 'Tom', time: '3 days ago', text: "My technician, Stacey, was excellent. Professional and very friendly. The whole service was very easy. I called, about an hour later i had a new battery. I don't think there was an upcharge on the battery, but even if there was, it was worth it because i didn't have to get my car jumped or towed. I highly recommend this service." },
  { name: 'Bonnie', time: '3 days ago', text: "My battery was dead dead dead! So easy, make an appointment, schedule date and time, and your installer comes and installs your new battery! No hidden charges, no time missed from work, great company and service." },
  { name: 'Edward', time: '1 week ago', text: "my car battery died on a 2010 Honda Element and Isaac came to the apartment parking lot and delivered and installed a new one. The price was right, he showed up on time and the app kept me aware of his arrival track. It was every perfect service" },
  { name: 'Anonymous', time: '1 week ago', text: 'The technician who fixed my car was very efficient and helpful. Would use the service again.' },
  { name: 'Andrew', time: '1 week ago', text: 'I placed my order and within an hour my technician was on his way. Strongly recommend.' },
  { name: 'Michael', time: '1 week ago', text: 'Great service, pretty damned quick. The wait for arrival was a couple hours (so not good for emergencies) but when the tech arrived all was done within about 10 minutes.' },
  { name: 'Teresa', time: '1 week ago', text: "thank you...your a life saver...and your guy gave me the platinum car battery which i really wanted in the first place...i would rather have top quality then some cheap battery that would not last in bad winters.." },
  { name: 'Raul', time: '1 week ago', text: 'Great service..' },
  { name: 'Anonymous', time: '1 week ago', text: '10/10 excellent service, fast turnaround time and I can now start my car. Samuel was very friendly and efficient. I would recommend to anyone.' }
]

function StarRating() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
  const [location, setLocation] = useState('Your location (click to add)')
  const [activeTab, setActiveTab] = useState('make')
  const [categorySearch, setCategorySearch] = useState('')
  const [cartCount] = useState(0)
  const [expandedSub, setExpandedSub] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuExpandedCategory, setMenuExpandedCategory] = useState(null)
  const [menuExpandedSub, setMenuExpandedSub] = useState(null)

  const toggleSub = (key) => {
    setExpandedSub((prev) => (prev === key ? null : key))
  }

  const closeMenu = () => setMenuOpen(false)
  const scrollToVehicleForm = () => {
    closeMenu()
    document.getElementById('vehicle-form')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToCategories = (close = false) => {
    if (close) closeMenu()
    document.getElementById('homepage-categories')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToReviews = () => {
    closeMenu()
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToFeaturedBrands = () => {
    closeMenu()
    document.getElementById('featured-brands')?.scrollIntoView({ behavior: 'smooth' })
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
    if (year && make && model) {
      scrollToCategories()
    } else {
      scrollToCategories()
    }
  }

  return (
    <div id="top" className="min-h-screen bg-gray-50">
      {/* Hamburger Menu Overlay */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/50"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div
            className="fixed top-0 left-0 z-50 h-full w-full max-w-sm overflow-y-auto bg-white shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
              <span className="text-lg font-bold text-gray-900">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="py-4">
              {/* Main sections */}
              <div className="border-b border-gray-200 pb-4">
                <Link
                  href="/#top"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Home
                </Link>
                <button
                  type="button"
                  onClick={scrollToVehicleForm}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Add Vehicle
                  </div>
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => scrollToCategories(true)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Browse Categories
                  </div>
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={scrollToReviews}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Customer Reviews
                  </div>
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={scrollToFeaturedBrands}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    Featured Brands
                  </div>
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <Link
                  href="/c/battery/2476"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-gray-50 font-medium"
                >
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Battery Service
                </Link>
                <Link
                  href="/cart"
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 text-gray-900 hover:bg-gray-50 font-medium border-t border-gray-100"
                >
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Cart {cartCount > 0 && `(${cartCount})`}
                </Link>
              </div>

              {/* Categories with subcategories */}
              <div className="pt-4">
                <div className="flex items-center justify-between px-4 py-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Categories</h3>
                  <Link href="/c" onClick={closeMenu} className="text-sm font-medium text-[#ea290f] hover:underline">
                    View all
                  </Link>
                </div>
                {CATEGORIES.map((cat) => {
                  const categorySlug = getCategorySlug(cat)
                  const isCatOpen = menuExpandedCategory === cat.name
                  return (
                    <div key={cat.name} className="border-b border-gray-100">
                      <button
                        type="button"
                        onClick={() => toggleMenuCategory(cat.name)}
                        className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-gray-50 ${isCatOpen ? 'bg-gray-50' : ''}`}
                      >
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <img src={cat.img} alt="" className="h-10 w-10 shrink-0 rounded object-contain bg-gray-100" />
                          <span className="font-medium text-gray-900 truncate">{cat.name}</span>
                        </div>
                        <svg
                          className={`h-5 w-5 shrink-0 text-gray-400 transition-transform ${isCatOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isCatOpen && cat.subcategories?.map((sub) => {
                        const subName = typeof sub === 'string' ? sub : sub.name
                        const subSubs = typeof sub === 'object' ? (sub.subSubcategories ?? []) : []
                        const subKey = `menu-${cat.name}|${subName}`
                        const isSubOpen = menuExpandedSub === subKey
                        return (
                          <div key={subKey} className="border-t border-gray-100 bg-gray-50/50">
                            <button
                              type="button"
                              onClick={() => toggleMenuSub(subKey)}
                              className="flex w-full items-center justify-between gap-3 pl-12 pr-4 py-2.5 text-left text-sm hover:bg-gray-50"
                            >
                              <span className="text-gray-700 truncate">{subName}</span>
                              {subSubs.length > 0 && (
                                <svg
                                  className={`h-4 w-4 shrink-0 text-gray-400 transition-transform ${isSubOpen ? 'rotate-180' : ''}`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              )}
                            </button>
                            {isSubOpen && subSubs.length > 0 && (
                              <div className="pb-2">
                                {subSubs.map((subSub) => (
                                  <Link
                                    key={subSub}
                                    href={`/c/${categorySlug}/${toSlug(subName)}/${toSlug(subSub)}`}
                                    onClick={closeMenu}
                                    className="block pl-16 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#ea290f]"
                                  >
                                    {subSub}
                                  </Link>
                                ))}
                              </div>
                            )}
                            {isSubOpen && subSubs.length === 0 && (
                              <Link
                                href={`/c/${categorySlug}/${toSlug(subName)}`}
                                onClick={closeMenu}
                                className="block pl-16 pr-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#ea290f]"
                              >
                                View {subName}
                              </Link>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </nav>
          </div>
        </>
      )}

      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-3 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMenuOpen(true)} className="p-2 text-gray-600 hover:bg-gray-100 rounded" aria-label="Menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <Link href="/" className="flex items-center">
              <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/c" className="p-2 hover:bg-gray-100 rounded" aria-label="Browse categories">
              <img src="/car.svg" alt="Categories" className="h-6 w-6" />
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded"
              aria-label={`${cartCount} items in cart, view cart`}
            >
              <span className="relative">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[60px]"></div>

      {/* Header - Search bar section */}
      <header id="siteHeader" className="w-full bg-white border-b border-gray-200">
        <nav aria-label="Top">
          {/* Combined: Search bar + Add Vehicle + Location */}
          <div className="px-4 py-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-3">
              {/* Search bar */}
              <form onSubmit={handleSearchSubmit} className="flex-1 w-full">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search parts, categories, or part numbers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-gray-300 outline-none text-sm"
                  />
                </div>
              </form>
              
              {/* Add Vehicle + Location buttons */}
              <div className="flex items-center gap-2 w-full md:w-auto">
                <button type="button" onClick={scrollToVehicleForm} className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex-1 md:flex-none">
                  <img src="/car.svg" alt="" className="h-4 w-4" />
                  <span className="text-sm font-medium text-gray-700">Add Vehicle</span>
                </button>
                <button type="button" onClick={scrollToCategories} className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex-1 md:flex-none">
                  <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">{location}</span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>


      {/* Hero Section - Car engine background */}
      <section className="relative min-h-[420px] md:min-h-[500px] overflow-hidden">
        {/* Dark blurred engine background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div 
            className="absolute inset-0 w-full h-full opacity-40 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-40 p-6 md:p-10 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Your One-Stop Auto Parts Store
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Same-day delivery available and optional installation on select products
          </p>
          <button type="button" onClick={scrollToVehicleForm} className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg mb-8 transition-colors">
            Select your vehicle
          </button>

          {/* Vehicle Form Card */}
          <div id="vehicle-form" className="max-w-xl scroll-mt-4">
            {/* Tabs - pill style on dark background */}
            <div className="flex w-full gap-2 mb-0 flex-wrap">
              <button
                onClick={() => setActiveTab('make')}
                className={`flex items-center cursor-pointer px-3 py-2 text-sm font-semibold focus-visible:outline-none md:px-4 rounded-t-lg transition-colors ${activeTab === 'make' ? 'bg-white text-slate-900 font-bold' : 'text-white hover:bg-slate-100 hover:text-black'}`}
              >
                Make/Model
              </button>
              <button
                onClick={() => setActiveTab('plate')}
                className={`flex items-center cursor-pointer px-3 py-2 text-sm font-semibold focus-visible:outline-none md:px-4 rounded-t-lg transition-colors ${activeTab === 'plate' ? 'bg-white text-slate-900 font-bold' : 'text-white hover:bg-slate-100 hover:text-black'}`}
              >
                License Plate
              </button>
              <button
                onClick={() => setActiveTab('vin')}
                className={`flex items-center cursor-pointer px-3 py-2 text-sm font-semibold focus-visible:outline-none md:px-4 rounded-t-lg transition-colors ${activeTab === 'vin' ? 'bg-white text-slate-900 font-bold' : 'text-white hover:bg-slate-100 hover:text-black'}`}
              >
                VIN Search
              </button>
              <button
                onClick={() => setActiveTab('vehicles')}
                className={`flex items-center cursor-pointer px-3 py-2 text-sm font-semibold focus-visible:outline-none md:px-4 rounded-t-lg transition-colors ${activeTab === 'vehicles' ? 'bg-white text-slate-900 font-bold' : 'text-white hover:bg-slate-100 hover:text-black'}`}
              >
                My Vehicles
              </button>
            </div>
            <div className="bg-white rounded-xl rounded-tl-none shadow-xl p-6 text-slate-900 -mt-px">

            {/* Form fields - Make/Model tab */}
            {activeTab === 'make' && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-900">Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-300 outline-none"
                  >
                    <option value="">Please select Year</option>
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-900">Make</label>
                  <select
                    value={make}
                    onChange={(e) => {
                      const m = e.target.value
                      setMake(m)
                      const modelsForMake = MAKE_MODELS[m] || []
                      setModel(modelsForMake.includes(model) ? model : '')
                    }}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-300 outline-none"
                  >
                    <option value="">Please select Make</option>
                    {MAKES.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-900">Model</label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    disabled={!make}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-gray-300 outline-none disabled:bg-gray-50 disabled:text-gray-500"
                  >
                    <option value="">Please select Model</option>
                    {(MAKE_MODELS[make] || []).map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <button type="button" onClick={handleVehicleGo} className="mt-4 w-full py-3 bg-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2">
                  GO
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
            {activeTab === 'plate' && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-900">License Plate</label>
                  <input type="text" placeholder="Enter license plate" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg" />
                </div>
                <button type="button" onClick={scrollToCategories} className="mt-4 w-full py-3 bg-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2">GO &gt;</button>
              </div>
            )}
            {activeTab === 'vin' && (
              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-900">VIN Number</label>
                  <input type="text" placeholder="Enter VIN" className="w-full px-4 py-2.5 border border-gray-300 rounded-lg" />
                </div>
                <button type="button" onClick={scrollToCategories} className="mt-4 w-full py-3 bg-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-300 flex items-center justify-center gap-2">GO &gt;</button>
              </div>
            )}
            {activeTab === 'vehicles' && (
              <p className="text-gray-500 py-4">No saved vehicles. Add a vehicle above to get started.</p>
            )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories - AutoParts.com style */}
      <section id="homepage-categories" className="bg-white">
        <div className="container mx-auto px-5 py-16 md:px-3 max-w-7xl">
          <div className="mb-5 flex items-center gap-2 border-b-2 border-slate-200 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">CATEGORIES</h2>
          </div>
          <div className="mb-5 relative">
            <input
              id="category-search"
              name="categorySearch"
              type="search"
              placeholder="Search categories..."
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              autoComplete="off"
              role="searchbox"
              aria-label="Search categories by name or subcategory"
              className="w-full pl-10 h-16 rounded-sm bg-slate-100 border-2 border-slate-400 focus:border-[#ea290f] focus:outline-none focus:ring-1 focus:ring-[#ea290f]/90 text-gray-900 placeholder-gray-500"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3" role="list">
            {CATEGORIES.filter(cat => {
              if (!categorySearch) return true
              const q = categorySearch.toLowerCase()
              const matchName = cat.name.toLowerCase().includes(q)
              const matchSub = cat.subcategories?.some(s => {
                const name = typeof s === 'string' ? s : s.name
                const matchSubSub = (s.subSubcategories ?? []).some(ss => ss.toLowerCase().includes(q))
                return name.toLowerCase().includes(q) || matchSubSub
              })
              return matchName || matchSub
            }).map((cat) => {
              const categorySlug = getCategorySlug(cat)

              return (
                <Popover key={cat.name} className="relative">
                  {({ open }) => (
                    <div className={open ? 'relative z-50' : 'relative z-30'}>
                      <Popover.Button
                        className={`relative w-full overflow-hidden rounded-sm border border-solid bg-white transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#ea290f] focus:ring-offset-1 ${
                          open ? 'border-[#ea290f] shadow-md' : 'border-gray-200 hover:border-[#ea290f] hover:shadow-md'
                        }`}
                        style={{ minHeight: '80px' }}
                      >
                    <div className="flex flex-col min-h-[80px] pr-[120px] md:pr-[170px]">
                        <div className="flex min-h-[80px] items-center gap-1 p-2 md:p-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        <span className="flex-1 text-sm font-bold md:text-base text-gray-900 min-w-0 truncate">{cat.name}</span>
                      </div>
                    </div>
                    <div className="absolute top-0 right-4 z-10 flex h-full min-h-0 max-h-[80px] w-[96px] shrink-0 items-center justify-center md:w-[150px] pointer-events-none overflow-hidden">
                      <img
                        src={cat.img}
                        alt=""
                        className="rounded-md object-contain max-h-[77px] max-w-full w-auto"
                        width={80}
                        height={80}
                      />
                        </div>
                      </Popover.Button>
                      <Popover.Panel
                        className="backdrop-blur-sm absolute left-0 z-50 mt-[-5px] w-full border-2 border-black bg-white p-4 shadow-xl"
                      >
                        <div className="relative grid w-full grid-cols-1 gap-4 md:grid-cols-1" aria-label={`${cat.name} subcategories`}>
                        {cat.subcategories?.map((sub) => {
                          const subName = typeof sub === 'string' ? sub : sub.name
                          const subSubs = typeof sub === 'object' ? (sub.subSubcategories ?? []) : []
                          const subKey = `${cat.name}|${subName}`
                          const subOpen = expandedSub === subKey
                          return (
                            <div key={subKey}>
                              <button
                                type="button"
                                onClick={() => toggleSub(subKey)}
                                className={`flex w-full items-center gap-2 overflow-x-hidden rounded-sm border-2 px-2 py-2 text-left focus:outline-none focus:ring-2 focus:ring-[#ea290f] focus:ring-offset-1 ${
                                  subOpen
                                    ? 'border-black bg-white'
                                    : 'border-transparent bg-gray-100 hover:bg-gray-200'
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className={`h-4 w-4 shrink-0 transition-transform ${subOpen ? 'rotate-180 text-[#ea290f]' : 'text-gray-500'}`}
                                  aria-hidden="true"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                                <span className={`flex-1 truncate text-sm font-bold ${subOpen ? 'text-[#ea290f]' : 'text-gray-900'}`}>{subName}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className={`h-6 w-6 shrink-0 ${subOpen ? 'text-gray-400' : 'text-gray-300'}`} aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                              </button>
                              {subOpen && (
                                <div className="pl-6 pt-2 space-y-1">
                                  {subSubs.length > 0 ? (
                                    subSubs.map((subSub) => (
                                      <Link
                                        key={subSub}
                                        href={`/c/${categorySlug}/${toSlug(subName)}/${toSlug(subSub)}`}
                                        className="flex cursor-pointer items-center justify-between rounded-sm border-2 border-black bg-white px-2 py-2 text-left no-underline hover:bg-gray-50"
                                      >
                                        <span className="text-sm font-bold text-gray-900">{subSub}</span>
                                      </Link>
                                    ))
                                  ) : (
                                    <Link
                                      href={`/c/${categorySlug}/${toSlug(subName)}`}
                                      className="flex cursor-pointer items-center justify-between rounded-sm border-2 border-black bg-white px-2 py-2 text-left no-underline hover:bg-gray-50"
                                    >
                                      <span className="text-sm font-bold text-gray-900">{subName}</span>
                                    </Link>
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        })}
                        </div>
                        <Link
                          href={`/c/${categorySlug}`}
                          className="mt-4 block text-center text-sm font-medium text-[#ea290f] hover:underline"
                        >
                          View all {cat.name}
                        </Link>
                      </Popover.Panel>
                    </div>
                  )}
                </Popover>
              )
            })}
          </div>
        </div>
      </section>

      {/* Battery Promo & Service */}
      <section className="px-4 py-5 md:px-3">
        <div className="max-w-7xl mx-auto px-5 pt-5 pb-5 md:px-3">
          <div className="relative rounded-md bg-[#171717] overflow-hidden">
            <div className="relative z-30 p-5">
              <div className="flex flex-col gap-10 md:flex-row">
                <div className="flex-1">
                  <p className="text-white">10% OFF for car battery replacement. Apply RECHARGE10 on checkout</p>
                  <p className="mt-2 text-3xl font-semibold text-white">Battery delivery and installation</p>
                </div>
                <div className="flex-1">
                  <ul className="text-white space-y-1">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-[#ea290f] flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Warranty Included
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-[#ea290f] flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Fitment Guaranteed
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 h-5 w-5 text-[#ea290f] flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Make an appointment
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <a href="/c/battery/2476" className="inline-block rounded-sm bg-[#ea290f] hover:bg-[#c8240d] transition-colors px-[50px] py-4 font-bold !text-white shadow-lg">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Stories / Reviews */}
      <section id="reviews" aria-labelledby="reviews-title" className="relative overflow-hidden pt-10 pb-10 sm:pt-20 sm:pb-24 bg-white">
        {/* Blurred background image - mechanic with wrench */}
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-30 pointer-events-none"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        <div className="container relative mx-auto px-5 md:px-3 max-w-7xl">
          <h2 id="reviews-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer stories
          </h2>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 text-xl leading-8 text-gray-900">
            <span>Our customers say</span>
            <span className="font-semibold">Excellent</span>
            <span className="flex items-center">
              <StarRating />
            </span>
            <span className="text-gray-600">based on <span className="font-semibold text-gray-900">6087</span> reviews</span>
          </p>

          <div className="relative mx-auto mt-16 max-w-2xl flow-root sm:mt-20 lg:mx-0 lg:max-w-none">
            {/* Reviews grid - two equal columns */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
              {CUSTOMER_REVIEWS.map((review, i) => (
                <figure key={i} className="rounded-md bg-gray-50 p-4 text-sm leading-6 sm:p-5">
                  <div className="flex items-center">
                    <StarRating />
                  </div>
                  <blockquote className="mt-3 text-base text-gray-900">
                    <p>&ldquo;{review.text}&rdquo;</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-gray-500">{review.time}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Gradient fade at bottom */}
            <div
              className="absolute bottom-0 left-0 flex h-[320px] w-full items-end justify-center bg-gradient-to-t from-white via-white/95 to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* CTA card - overlaps lower reviews */}
            <div className="absolute bottom-0 left-0 flex h-[320px] w-full items-end justify-center pb-0">
              <div className="relative z-10 rounded-xl border-2 border-blue-100 bg-white p-8 text-center shadow-xl lg:w-1/3">
                <p className="text-lg font-medium text-gray-900">
                  Join the millions of happy customers.
                </p>
                <a
                  href="#vehicle-form"
                  className="mx-auto mt-4 flex w-full max-w-[200px] flex-1 items-center justify-center rounded-sm border border-transparent bg-brand-primary px-8 py-2.5 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section id="featured-brands" className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        
        <div className="container mx-auto px-5 md:px-0 max-w-7xl relative">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#ea290f]/10 text-[#ea290f] text-sm font-semibold rounded-full mb-4">
              Trusted by Professionals
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with the industry's leading manufacturers to bring you quality parts you can trust
            </p>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {FEATURED_BRANDS.map((brand, index) => (
              <a
                key={brand.name}
                href="#"
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex items-center justify-center min-h-[120px] shadow-sm hover:shadow-xl hover:border-[#ea290f]/20 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ea290f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <img
                  src={brand.img}
                  alt={brand.name}
                  width={160}
                  height={64}
                  referrerPolicy="no-referrer"
                  className="max-h-12 md:max-h-14 max-w-full w-auto h-auto object-contain object-center grayscale group-hover:grayscale-0 transition-all duration-300 relative z-10"
                />
                <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {brand.name}
                </span>
              </a>
            ))}
            <Link
              href="/brands"
              className="group relative bg-gradient-to-br from-[#ea290f] to-[#c8240d] rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center min-h-[120px] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="h-8 w-8 text-white/80 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className="text-white font-semibold">View All</span>
              <span className="text-white/70 text-xs">50+ Brands</span>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">50+</span>
              <span className="text-sm text-gray-500">Premium Brands</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">100K+</span>
              <span className="text-sm text-gray-500">Parts Available</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">99%</span>
              <span className="text-sm text-gray-500">Customer Satisfaction</span>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">24/7</span>
              <span className="text-sm text-gray-500">Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <Link href="/" className="block">
              <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" style={{ filter: 'brightness(0) invert(1)' }} />
            </Link>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-300">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/c" className="hover:text-white">Categories</Link>
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <Link href="/track-order" className="hover:text-white">Track Order</Link>
              <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link>
              <Link href="/return-policy" className="hover:text-white">Return Policy</Link>
              <Link href="/disclaimer" className="hover:text-white">Disclaimer</Link>
              <Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
              <Link href="/contact" className="hover:text-white">Contact Us</Link>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Supreme Auto Parts. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
