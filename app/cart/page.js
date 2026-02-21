import Link from 'next/link'

export const metadata = {
  title: 'Shopping Cart | Supreme Auto Parts',
  description: 'View your cart and checkout.'
}

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="text-[#ea290f] hover:underline mb-6 inline-block">
          ← Continue shopping
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Link
            href="/"
            className="inline-block bg-[#ea290f] hover:bg-[#c8240d] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse categories
          </Link>
        </div>
      </div>
    </div>
  )
}
