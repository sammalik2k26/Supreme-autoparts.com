import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CATEGORY_DATA, CATEGORY_SLUGS, toSlug } from '../../../lib/categories'

export function generateStaticParams() {
  return CATEGORY_SLUGS.map((category) => ({ category }))
}

export function generateMetadata({ params }) {
  const data = params?.category ? CATEGORY_DATA[params.category] : null
  if (!data) return { title: 'Category | Supreme Auto Parts' }
  return {
    title: `${data.name} | Supreme Auto Parts`,
    description: `Shop ${data.name} and subcategories. Browse our auto parts catalog.`
  }
}

export default function CategoryPage({ params }) {
  const category = params?.category
  const data = category ? CATEGORY_DATA[category] : null

  if (!category || !data) notFound()

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/#homepage-categories" className="text-[#D4AF37] hover:underline mb-6 inline-block">
          ← Back to categories
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{data.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.subcategories.map((sub) => (
            <Link
              key={sub}
              href={`/c/${category}/${toSlug(sub)}`}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#D4AF37] hover:shadow-md transition-all"
            >
              {sub}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
