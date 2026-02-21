import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Supreme Auto Parts',
  description: 'Read our privacy policy to understand how Supreme Auto Parts collects, uses, and protects your personal information.'
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/70">Your privacy matters to us. Here's how we protect it.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Quick Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Quick Overview</h3>
              <p className="text-gray-600 text-sm">We collect only what's necessary, never sell your data, and use industry-standard encryption to keep your information safe.</p>
            </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">1. Information We Collect</h2>
          </div>
          <p className="text-gray-600 mb-4">We collect information you provide directly to us, including:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {['Name, email address, and phone number', 'Billing and shipping addresses', 'Payment information', 'Vehicle information for parts fitment', 'Order history and preferences'].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">2. How We Use Your Information</h2>
          </div>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <div className="space-y-2">
            {['Process and fulfill your orders', 'Send order confirmations and shipping updates', 'Provide customer support', 'Improve our products and services', 'Send promotional communications (with your consent)'].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-600">
                <span className="shrink-0 w-6 h-6 bg-[#D4AF37] text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">3. Information Sharing</h2>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-green-800 font-semibold flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              We do not sell your personal information
            </p>
          </div>
          <p className="text-gray-600 mb-4">We may share your information with third parties only to:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '💳', title: 'Payments', desc: 'Process payments securely' },
              { icon: '🚚', title: 'Shipping', desc: 'Deliver your orders' },
              { icon: '⚖️', title: 'Legal', desc: 'Comply with obligations' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gray-50 rounded-xl">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 mt-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">4. Data Security</h2>
          </div>
          <p className="text-gray-600 mb-4">We implement industry-standard security measures to protect your personal information:</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '🔐', title: 'Encryption', desc: '256-bit SSL encryption' },
              { icon: '🖥️', title: 'Secure Servers', desc: 'Protected data centers' },
              { icon: '🔍', title: 'Regular Audits', desc: 'Continuous monitoring' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                <span className="text-2xl">{item.icon}</span>
                <h4 className="font-semibold text-gray-900 mt-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5 */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">5. Your Rights</h2>
          </div>
          <p className="text-gray-600 mb-4">You have the right to:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { title: 'Access', desc: 'View your personal data' },
              { title: 'Correct', desc: 'Fix inaccurate information' },
              { title: 'Delete', desc: 'Request data removal' },
              { title: 'Opt-out', desc: 'Unsubscribe from marketing' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#D4AF37] to-[#c8240d] rounded-2xl shadow-lg p-8 text-white text-center">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Questions About Privacy?</h2>
          <p className="text-white/80 mb-4">We're here to help with any privacy-related concerns.</p>
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
