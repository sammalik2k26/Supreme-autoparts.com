import Link from 'next/link'
import VehicleMakeSelector from '../../../components/VehicleMakeSelector'

export function generateMetadata({ params }) {
  return {
    title: `Product ${params?.sku ?? ''} | Supreme Auto Parts`,
    description: 'View product details.'
  }
}

export default function ProductPage({ params }) {
  const sku = params?.sku ?? ''

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="text-[#ea290f] hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Product {sku}</span>
      </nav>
      <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl">
        <div className="mb-6">
          <VehicleMakeSelector />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Product {sku}</h1>
        <p className="text-gray-600 mb-4">Product details page. Add to cart and fitment info would go here.</p>
        <Link href="/c" className="text-[#ea290f] hover:underline">
          ← Continue shopping
        </Link>
      </div>
    </div>
  )
}
