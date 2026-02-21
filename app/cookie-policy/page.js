import Link from 'next/link'

export const metadata = {
  title: 'Cookie Policy | Supreme Auto Parts',
  description: 'Learn how Supreme Auto Parts uses cookies and similar technologies on our website.'
}

export default function CookiePolicyPage() {
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
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <span className="text-4xl">🍪</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-white/90">How we use cookies to improve your experience.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Last updated: February 20, 2026
        </p>

        {/* What Are Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-900">
              Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
            </p>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Types of Cookies We Use</h2>
          </div>
          
          <div className="grid gap-4">
            {/* Essential */}
            <div className="border border-green-200 rounded-xl overflow-hidden">
              <div className="bg-green-50 px-4 py-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-green-800">Essential Cookies</h3>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Required</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600 text-sm">Required for the website to function properly. These include cookies for shopping cart functionality, user authentication, and security.</p>
              </div>
            </div>

            {/* Performance */}
            <div className="border border-blue-200 rounded-xl overflow-hidden">
              <div className="bg-blue-50 px-4 py-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-blue-800">Performance Cookies</h3>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Analytics</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website by collecting anonymous information about page visits and errors.</p>
              </div>
            </div>

            {/* Functionality */}
            <div className="border border-purple-200 rounded-xl overflow-hidden">
              <div className="bg-purple-50 px-4 py-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-purple-800">Functionality Cookies</h3>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">Preferences</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600 text-sm">Remember your preferences such as language, region, and vehicle information to provide a personalized experience.</p>
              </div>
            </div>

            {/* Marketing */}
            <div className="border border-pink-200 rounded-xl overflow-hidden">
              <div className="bg-pink-50 px-4 py-3 flex items-center gap-3">
                <span className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-pink-800">Marketing Cookies</h3>
                  <span className="text-xs text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full">Optional</span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-gray-600 text-sm">Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. You can opt out of these cookies.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Managing Cookies</h2>
          </div>
          <p className="text-gray-600 mb-4">You can control cookies through your browser settings. Most browsers allow you to:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { icon: '👁️', text: 'View what cookies are stored' },
              { icon: '🗑️', text: 'Delete cookies individually or all at once' },
              { icon: '🚫', text: 'Block third-party cookies' },
              { icon: '🔒', text: 'Block cookies from specific sites' },
              { icon: '❌', text: 'Block all cookies' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-xl">{item.icon}</span>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-amber-800 text-sm">
                <strong>Note:</strong> Blocking essential cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-[#ea290f] to-[#c8240d] rounded-2xl shadow-lg p-8 text-white text-center">
          <span className="text-5xl mb-4 block">🍪</span>
          <h2 className="text-2xl font-bold mb-2">Questions About Cookies?</h2>
          <p className="text-white/80 mb-4">We're here to help with any cookie-related concerns.</p>
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
