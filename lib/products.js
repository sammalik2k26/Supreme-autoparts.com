/**
 * Mock product data for subcategories and sub-subcategories.
 * Generates placeholder products matching AutoParts.com style.
 */

const BRANDS = ['Mopar', 'ACDelco', 'Dorman', 'Bosch', 'Motorcraft', 'Gates', 'Wagner', 'Brembo', 'Valeo', 'Continental']

/** Generate SKU-matched image as data URL - each SKU gets unique image with SKU displayed */
function getSkuImageUrl(sku) {
  const escaped = String(sku).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#f3f4f6" width="400" height="400"/><text x="200" y="200" text-anchor="middle" dominant-baseline="middle" fill="#6b7280" font-family="ui-monospace,monospace" font-size="22" font-weight="600">${escaped}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/** Simple hash for deterministic product generation */
function hash(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i) | 0
  }
  return Math.abs(h)
}

/** Generate mock products for a subsubcategory */
export function getProductsForSubSubcategory(categorySlug, subcategorySlug, subsubcategorySlug, subSubName) {
  const seed = `${categorySlug}-${subcategorySlug}-${subsubcategorySlug}`
  const h = hash(seed)
  const count = 3 + (h % 6)
  const products = []
  for (let i = 0; i < count; i++) {
    const num = String((82000000 + (h % 1999999) + i * 1111) % 100000000).padStart(8, '0').slice(-8)
    const sku = `66-${num}`
    const brand = BRANDS[h % BRANDS.length]
    const basePrice = 15 + (h % 500) + i * 25
    const originalPrice = Math.round(basePrice * 1.15)
    const salePrice = basePrice
    products.push({
      sku,
      name: `${subSubName} ${brand} (${sku.slice(-8)})`,
      brand,
      price: salePrice,
      originalPrice,
      imageUrl: getSkuImageUrl(sku),
      note: 'Engine, Sub-Model, or Attributes are Suggested.'
    })
  }
  return products
}

/** Generate mock products for a leaf subcategory (no sub-subcategories) */
export function getProductsForSubcategory(categorySlug, subcategorySlug, subName) {
  return getProductsForSubSubcategory(categorySlug, subcategorySlug, toSlug(subName), subName)
}

function toSlug(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}
