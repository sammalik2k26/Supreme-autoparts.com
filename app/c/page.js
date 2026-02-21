import Link from 'next/link'
import { CATEGORIES, getCategorySlug } from '../../lib/categories'

export const metadata = {
  title: 'All Categories | Supreme Auto Parts',
  description: 'Browse all auto parts categories. Find brakes, engine, electrical, and more.'
}

export default function CategoriesIndexPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/" className="text-[#D4AF37] hover:underline mb-6 inline-block">
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">All Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((cat) => {
            const slug = getCategorySlug(cat)
            return (
              <Link
                key={slug}
                href={`/c/${slug}`}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#D4AF37] hover:shadow-lg transition-all"
              >
                <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center p-4">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <h2 className="font-semibold text-gray-900 text-sm leading-tight">{cat.name}</h2>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
