import Link from 'next/link'

export const metadata = {
  title: 'About Us | Supreme Auto Parts',
  description: 'Learn about Supreme Auto Parts - your trusted source for quality auto parts with same-day delivery and professional installation services.'
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      {/* Header */}
      <header className="bg-[#0F0F0F] border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
          </Link>
          <Link href="/" className="text-[#D4AF37] hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a1a1a] via-[#0F0F0F] to-[#1a1a1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Supreme Auto Parts</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Your trusted partner for quality auto parts, expert service, and unmatched convenience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Supreme Auto Parts, our mission is to make auto maintenance and repair easier than ever. 
              We believe everyone deserves access to quality auto parts at fair prices, backed by exceptional 
              customer service. Whether you're a professional mechanic or a DIY enthusiast, we're here to 
              help you keep your vehicle running at its best.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Quality Parts</h3>
                  <p className="text-sm text-gray-600">Over 100,000 parts from 50+ trusted brands including ACDelco, Bosch, and Motorcraft.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Same-Day Delivery</h3>
                  <p className="text-sm text-gray-600">Get your parts fast with our same-day delivery service in select areas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Professional Installation</h3>
                  <p className="text-sm text-gray-600">Optional installation service by certified technicians at your location.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                  <p className="text-sm text-gray-600">Our customer support team is always ready to help with any questions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Supreme?</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Verified Fitment:</strong> Our advanced vehicle lookup ensures you get the right part for your specific make, model, and year.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Competitive Pricing:</strong> We work directly with manufacturers to bring you the best prices on genuine OEM and aftermarket parts.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Easy Returns:</strong> Not satisfied? Our hassle-free return policy makes it easy to return or exchange parts.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Expert Knowledge:</strong> Our team includes automotive experts who can help you find exactly what you need.</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#B29026] rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold">50+</p>
                <p className="text-white/80 text-sm">Premium Brands</p>
              </div>
              <div>
                <p className="text-4xl font-bold">100K+</p>
                <p className="text-white/80 text-sm">Parts Available</p>
              </div>
              <div>
                <p className="text-4xl font-bold">99%</p>
                <p className="text-white/80 text-sm">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl font-bold">6K+</p>
                <p className="text-white/80 text-sm">5-Star Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Parts?</h2>
          <p className="text-gray-600 mb-8">
            Browse our extensive catalog and find the perfect parts for your vehicle today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#D4AF37] hover:bg-[#B29026] text-white font-semibold rounded-lg transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/c"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-[#D4AF37]/10 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-block mb-4">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-8 w-auto mx-auto" />
          </Link>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Supreme Auto Parts. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
