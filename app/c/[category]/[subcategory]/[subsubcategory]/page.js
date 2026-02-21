import Link from 'next/link'
import { notFound } from 'next/navigation'
import VehicleMakeSelector from '../../../../../components/VehicleMakeSelector'
import { CATEGORY_DATA, getSubSubcategories, toSlug } from '../../../../../lib/categories'
import { getProductsForSubSubcategory } from '../../../../../lib/products'

export function generateStaticParams() {
  const paths = []
  for (const slug of Object.keys(CATEGORY_DATA)) {
    const cat = CATEGORY_DATA[slug]
    for (const sub of cat.subcategoryDetails ?? []) {
      const subSlug = toSlug(sub.name)
      for (const subSub of sub.subSubcategories ?? []) {
        paths.push({
          category: slug,
          subcategory: subSlug,
          subsubcategory: toSlug(subSub)
        })
      }
    }
  }
  return paths
}

export function generateMetadata({ params }) {
  const catData = params?.category ? CATEGORY_DATA[params.category] : null
  if (!catData) return { title: 'Subcategory | Supreme Auto Parts' }
  const subDetails = catData.subcategoryDetails?.find((s) => toSlug(s.name) === params.subcategory)
  const subSubs = subDetails?.subSubcategories ?? []
  const subSubName = subSubs.find((s) => toSlug(s) === params.subsubcategory)
    ?? params.subsubcategory?.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    title: `${subSubName} | ${catData.name} | Supreme Auto Parts`,
    description: `Shop ${subSubName}. Browse auto parts.`
  }
}

export default function SubSubcategoryPage({ params }) {
  const { category, subcategory, subsubcategory } = params ?? {}
  const catData = category ? CATEGORY_DATA[category] : null

  if (!category || !subcategory || !subsubcategory || !catData) notFound()

  const subDetails = catData.subcategoryDetails?.find((s) => toSlug(s.name) === subcategory)
  const subName = subDetails?.name ?? subcategory.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const subSubs = getSubSubcategories(category, subcategory)
  const subSubName = subSubs.find((s) => toSlug(s) === subsubcategory)
    ?? subsubcategory.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  const products = getProductsForSubSubcategory(category, subcategory, subsubcategory, subSubName)

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="text-[#D4AF37] hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/c/${category}`} className="text-[#D4AF37] hover:underline">{catData.name}</Link>
        <span className="mx-2">/</span>
        <Link href={`/c/${category}/${subcategory}`} className="text-[#D4AF37] hover:underline">{subName}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{subSubName}</span>
      </nav>

      {/* Page title with result count */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {subSubName} ({products.length} results)
      </h1>

      {/* Filters - matching autoparts.com */}
      <div className="flex flex-wrap gap-2 mb-6">
        <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none">
          <option>Delivery Speed</option>
        </select>
        <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
        <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none">
          <option>Part Grade</option>
        </select>
      </div>

      {/* Vehicle selection */}
      <div className="mb-6">
        <VehicleMakeSelector categorySlug={category} subcategorySlug={subcategory} subsubcategorySlug={subsubcategory} />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <article
            key={product.sku}
            className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#D4AF37] hover:shadow-md transition-all"
          >
            {/* Product image - SKU-matched placeholder */}
            <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={product.imageUrl}
                alt={`${product.name} - SKU ${product.sku}`}
                className="w-full h-full object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <span className="text-xs text-gray-500">SKU: {product.sku}</span>
              <h2 className="font-semibold text-gray-900 mt-1 line-clamp-2">{product.name}</h2>
              <p className="text-xs text-gray-500 mt-1">{product.note}</p>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-lg font-bold text-[#D4AF37]">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-600">
                <p className="font-medium text-gray-700">Service Selection</p>
                <p className="text-gray-500 mt-1">Not available</p>
                <p className="text-amber-600 mt-1 font-medium">Select Vehicle to Continue</p>
              </div>

              <Link
                href={`/p/${product.sku}`}
                className="mt-4 w-full py-2.5 text-center bg-[#D4AF37] hover:bg-[#c8240d] text-white font-medium rounded text-sm transition-colors"
              >
                View Details
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <Link href={`/c/${category}/${subcategory}`} className="text-[#D4AF37] hover:underline inline-flex items-center gap-1">
          ← Back to {subName}
        </Link>
      </div>
    </div>
  )
}
