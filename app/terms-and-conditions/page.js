import Link from 'next/link'

export const metadata = {
  title: 'Terms and Conditions | Supreme Auto Parts',
  description: 'Read the terms and conditions for using Supreme Auto Parts website and services.'
}

export default function TermsPage() {
  const sections = [
    {
      num: 1,
      title: 'Acceptance of Terms',
      icon: (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: 'By accessing and using Supreme Auto Parts website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.'
    },
    {
      num: 2,
      title: 'Products and Services',
      icon: (
        <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      content: 'We strive to provide accurate product descriptions and pricing. However, we reserve the right to correct any errors and to change or update information at any time without prior notice.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <header className="bg-[#0F0F0F] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
          </Link>
          <Link href="/" className="text-[#D4AF37] hover:underline font-medium">← Back to Home</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-white/70">Please read these terms carefully before using our services.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {['Acceptance', 'Products', 'Orders', 'Shipping', 'Returns', 'Warranty', 'Liability', 'Contact'].map((item, i) => (
              <span key={i} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2 text-center hover:bg-gray-100 cursor-pointer transition-colors">
                {i + 1}. {item}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: February 20, 2026
        </p>

        {/* Section 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-600">
            By accessing and using Supreme Auto Parts website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">2. Products and Services</h2>
          </div>
          <p className="text-gray-600">
            We strive to provide accurate product descriptions and pricing. However, we reserve the right to correct any errors and to change or update information at any time without prior notice.
          </p>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">3. Orders and Payment</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '📋', text: 'All orders are subject to acceptance and availability' },
              { icon: '💵', text: 'Prices are in USD unless otherwise stated' },
              { icon: '✅', text: 'Payment must be received before order processing' },
              { icon: '💳', text: 'We accept major credit cards and secure payment methods' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-600 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">4. Shipping and Delivery</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-sm">
                Delivery times are estimates and not guaranteed. We are not liable for delays caused by shipping carriers or circumstances beyond our control.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">5. Returns and Refunds</h2>
          </div>
          <p className="text-gray-600">
            Please refer to our{' '}
            <Link href="/return-policy" className="text-[#D4AF37] hover:underline font-medium inline-flex items-center gap-1">
              Return Policy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>{' '}
            for detailed information on returns, exchanges, and refunds.
          </p>
        </div>

        {/* Section 6 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">6. Warranty</h2>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-blue-800 text-sm">
              Products are covered by manufacturer warranties where applicable. We do not provide additional warranties unless explicitly stated.
            </p>
          </div>
        </div>

        {/* Section 7 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">7. Limitation of Liability</h2>
          </div>
          <p className="text-gray-600">
            Supreme Auto Parts shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#c8240d] rounded-2xl shadow-lg p-8 text-white text-center">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Questions About These Terms?</h2>
          <p className="text-white/80 mb-4">Our team is here to clarify any concerns.</p>
          <a href="mailto:info@supreme-autoparts.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#D4AF37] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@supreme-autoparts.com
          </a>
        </div>
      </div>
    </div>
  )
}
