export interface Collection {
  id: string
  name: string
  category: string
  description: string
  price: string
  priceNum: number
  tag?: string
  featured?: boolean
  aspect?: 'portrait' | 'square'
  sizes: string[]
  colors: ProductColor[]
  details: string[]
  fabric: string
  careInstructions: string[]
}

export interface ProductColor {
  name: string
  hex: string
}

export interface AbayanType {
  id: string
  name: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
}

export interface NavLink {
  href: string
  label: string
}



