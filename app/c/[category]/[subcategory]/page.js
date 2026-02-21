import Link from 'next/link'
import { notFound } from 'next/navigation'
import VehicleMakeSelector from '../../../../components/VehicleMakeSelector'
import { CATEGORIES, CATEGORY_DATA, getSubSubcategories, getCategorySlug, toSlug } from '../../../../lib/categories'
import { getProductsForSubcategory } from '../../../../lib/products'

export function generateStaticParams() {
  return CATEGORIES.flatMap((cat) => {
    const category = getCategorySlug(cat)
    return cat.subcategories.map((sub) => ({
      category,
      subcategory: toSlug(typeof sub === 'string' ? sub : sub.name)
    }))
  })
}

export function generateMetadata({ params }) {
  const catData = params?.category ? CATEGORY_DATA[params.category] : null
  if (!catData) return { title: 'Subcategory | Supreme Auto Parts' }
  const subDetails = catData.subcategoryDetails?.find((s) => toSlug(s.name) === params.subcategory)
  const subName = subDetails?.name ?? catData.subcategories?.find((s) => toSlug(s) === params.subcategory)
    ?? params.subcategory?.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  return {
    title: `${subName} | ${catData.name} | Supreme Auto Parts`,
    description: `Shop ${subName} in ${catData.name}. Browse auto parts.`
  }
}

export default function SubcategoryPage({ params }) {
  const category = params?.category
  const subcategory = params?.subcategory
  const catData = category ? CATEGORY_DATA[category] : null

  if (!category || !subcategory || !catData) notFound()

  const subDetails = catData.subcategoryDetails?.find((s) => toSlug(s.name) === subcategory)
  const subName = subDetails?.name ?? catData.subcategories?.find((s) => toSlug(s) === subcategory) ?? subcategory.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const subSubcategories = getSubSubcategories(category, subcategory)
  const isLeafSubcategory = subSubcategories.length === 0
  const products = isLeafSubcategory ? getProductsForSubcategory(category, subcategory, subName) : []

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:px-6">
      <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="text-[#ea290f] hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/c/${category}`} className="text-[#ea290f] hover:underline">{catData.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{subName}</span>
      </nav>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {subName}
        {isLeafSubcategory && ` (${products.length} results)`}
      </h1>

      {subSubcategories.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {subSubcategories.map((subSub) => (
              <Link
                key={subSub}
                href={`/c/${category}/${subcategory}/${toSlug(subSub)}`}
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#ea290f] hover:shadow-md transition-all"
              >
                {subSub}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 mb-6">
            <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#ea290f] focus:border-[#ea290f] outline-none">
              <option>Delivery Speed</option>
            </select>
            <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#ea290f] focus:border-[#ea290f] outline-none">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <select className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 focus:ring-2 focus:ring-[#ea290f] focus:border-[#ea290f] outline-none">
              <option>Part Grade</option>
            </select>
          </div>
          <div className="mb-6">
            <VehicleMakeSelector categorySlug={category} subcategorySlug={subcategory} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <article
                key={product.sku}
                className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-[#ea290f] hover:shadow-md transition-all"
              >
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
                    <span className="text-lg font-bold text-[#ea290f]">£{product.price.toFixed(2)}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-gray-400 line-through">£{product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <div className="mt-3 p-3 bg-gray-50 rounded text-sm text-gray-600">
                    <p className="font-medium text-gray-700">Service Selection</p>
                    <p className="text-amber-600 mt-1 font-medium">Select Vehicle to Continue</p>
                  </div>
                  <Link
                    href={`/p/${product.sku}`}
                    className="mt-4 w-full py-2.5 text-center bg-[#ea290f] hover:bg-[#c8240d] text-white font-medium rounded text-sm transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      <div className="mt-8">
        <Link href={`/c/${category}`} className="text-[#ea290f] hover:underline inline-flex items-center gap-1">
          ← Back to {catData.name}
        </Link>
      </div>
    </div>
  )
}
