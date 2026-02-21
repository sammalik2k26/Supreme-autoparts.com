import Link from 'next/link'

export const metadata = {
  title: 'Return Policy | Supreme Auto Parts',
  description: 'Learn about our return policy, including how to return products and request refunds at Supreme Auto Parts.'
}

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" />
          </Link>
          <Link href="/" className="text-[#ea290f] hover:underline font-medium">← Back to Home</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Return Policy</h1>
          <p className="text-xl text-white/80">Hassle-free returns. Your satisfaction is our priority.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* 30-Day Promise Banner */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -mr-16 -mt-16"></div>
          <div className="flex items-center gap-6 relative">
            <div className="shrink-0 w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">30</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-1">Day Hassle-Free Returns</h3>
              <p className="text-green-700">We want you to be completely satisfied with your purchase. If not, we make returns easy.</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: February 20, 2026
        </p>

        {/* Return Eligibility */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Return Eligibility</h2>
          </div>
          <p className="text-gray-600 mb-4">Items may be returned within 30 days of delivery if:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Item is unused and in original packaging',
              'All tags and labels are attached',
              'You have the original receipt or order confirmation',
              'Item is not marked as final sale'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl border border-green-100">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Non-Returnable Items */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Non-Returnable Items</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '⚡', text: 'Electrical components that have been installed' },
              { icon: '🔧', text: 'Special order or custom parts' },
              { icon: '🛢️', text: 'Hazardous materials (oils, fluids, chemicals)' },
              { icon: '🏷️', text: 'Items marked as "Final Sale"' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-red-50 rounded-xl border border-red-100">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Return - Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">How to Return</h2>
          </div>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Contact Us', desc: 'Email info@supreme-autoparts.com with your order number', color: 'blue' },
              { step: 2, title: 'Get RMA Number', desc: 'We\'ll provide a Return Merchandise Authorization number', color: 'indigo' },
              { step: 3, title: 'Pack Securely', desc: 'Use original packaging if possible for safe transit', color: 'purple' },
              { step: 4, title: 'Ship It Back', desc: 'Send to the address provided with your RMA', color: 'violet' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                <div className={`shrink-0 w-12 h-12 bg-${item.color}-500 rounded-xl flex items-center justify-center shadow-lg`} style={{ backgroundColor: ['#3b82f6', '#6366f1', '#a855f7', '#8b5cf6'][i] }}>
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Refund Process */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Refund Process</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: '⏱️', title: '5-7 Days', desc: 'Processing time after we receive your return' },
              { icon: '📦', title: 'Shipping Costs', desc: 'Non-refundable unless item was defective' },
              { icon: '💳', title: 'Original Method', desc: 'Refund to your original payment method' }
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <span className="text-3xl">{item.icon}</span>
                <h4 className="font-bold text-gray-900 mt-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Defective Items */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-lg p-8 mb-6 text-white">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Defective or Wrong Items?</h2>
              <p className="text-white/80">
                If you received a defective or incorrect item, contact us immediately. We'll arrange <span className="text-green-400 font-semibold">free return shipping</span> and send the correct item or provide a <span className="text-green-400 font-semibold">full refund</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#ea290f] to-[#c8240d] rounded-2xl shadow-lg p-8 text-white text-center">
          <svg className="w-12 h-12 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Need Help With a Return?</h2>
          <p className="text-white/80 mb-4">Our returns team is ready to assist you.</p>
          <a href="mailto:info@supreme-autoparts.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#ea290f] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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
