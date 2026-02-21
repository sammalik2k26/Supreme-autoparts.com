import Link from 'next/link'

export const metadata = {
  title: 'Blog | Supreme Auto Parts',
  description: 'Read the latest auto parts news, maintenance tips, and guides from Supreme Auto Parts.'
}

export default function BlogPage() {
  const featuredPost = {
    title: 'The Complete Guide to Brake Maintenance',
    date: 'Feb 18, 2026',
    excerpt: 'Everything you need to know about keeping your brakes in top condition, from identifying wear signs to choosing the right parts.',
    category: 'Maintenance',
    readTime: '8 min read',
    image: '🔧'
  }

  const posts = [
    { title: 'How to Choose the Right Battery for Your Vehicle', date: 'Feb 15, 2026', excerpt: 'Learn the key factors to consider when selecting a new car battery, including cold cranking amps, reserve capacity, and battery size.', category: 'Buying Guide', readTime: '5 min', icon: '🔋' },
    { title: '10 Signs Your Brakes Need Replacement', date: 'Feb 10, 2026', excerpt: 'Discover the warning signs that indicate your brake pads or rotors may need to be replaced to keep you safe on the road.', category: 'Safety', readTime: '4 min', icon: '🛑' },
    { title: 'DIY vs Professional Installation: When to Call a Mechanic', date: 'Feb 5, 2026', excerpt: 'Some repairs are easy DIY projects while others require professional expertise. Here\'s how to know the difference.', category: 'Tips', readTime: '6 min', icon: '🔩' },
    { title: 'Essential Maintenance Tips for Winter Driving', date: 'Jan 28, 2026', excerpt: 'Prepare your vehicle for cold weather with these essential winter maintenance tips and recommended parts.', category: 'Seasonal', readTime: '5 min', icon: '❄️' },
    { title: 'Understanding OEM vs Aftermarket Parts', date: 'Jan 20, 2026', excerpt: 'What\'s the difference between OEM and aftermarket parts? We break down the pros and cons of each option.', category: 'Buying Guide', readTime: '7 min', icon: '⚙️' },
    { title: 'How to Extend the Life of Your Vehicle', date: 'Jan 12, 2026', excerpt: 'Follow these maintenance schedules and tips to keep your car running smoothly for years to come.', category: 'Maintenance', readTime: '6 min', icon: '🚗' },
  ]

  const categories = ['All', 'Maintenance', 'Buying Guide', 'Safety', 'Tips', 'Seasonal']

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
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto Parts Blog</h1>
          <p className="text-xl text-white/70">Tips, guides, and insights to keep your vehicle running at its best.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-[#ea290f] text-white' : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-gradient-to-r from-[#ea290f] to-[#c8240d] rounded-2xl shadow-xl p-8 mb-10 text-white">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="shrink-0 w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
              <span className="text-5xl">{featuredPost.image}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center gap-3 mb-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Featured</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">{featuredPost.category}</span>
                <span className="text-white/60 text-xs">{featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{featuredPost.title}</h2>
              <p className="text-white/80 mb-4">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-white/60 text-sm">{featuredPost.date}</span>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#ea290f] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {post.icon}
                  </span>
                  <div>
                    <span className="text-xs font-medium text-[#ea290f] bg-red-50 px-2 py-1 rounded-full">{post.category}</span>
                    <p className="text-xs text-gray-400 mt-1">{post.readTime}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#ea290f] transition-colors">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <button className="text-[#ea290f] font-medium text-sm hover:underline inline-flex items-center gap-1">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white text-center">
          <div className="max-w-xl mx-auto">
            <span className="text-4xl mb-4 block">📬</span>
            <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
            <p className="text-white/70 mb-6">Get the latest auto tips and guides delivered to your inbox.</p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ea290f]"
              />
              <button className="px-6 py-3 bg-[#ea290f] hover:bg-[#c8240d] rounded-xl font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
