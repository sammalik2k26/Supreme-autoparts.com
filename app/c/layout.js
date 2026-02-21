import Link from 'next/link'

export default function CategoryLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <img src="/logo.svg" alt="Supreme Auto Parts" className="h-10 md:h-12 w-auto" style={{filter: 'none'}} />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/cart"
              className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded"
              aria-label="View cart"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="hidden sm:inline text-sm font-medium">View cart</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-100 px-4 py-3">
          <div className="max-w-7xl mx-auto">
            <Link href="/" className="text-[#D4AF37] hover:underline font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
