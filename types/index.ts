export interface Collection {
  id: string
  name: string
  category: string
  description: string
  price: string
  tag?: string
  featured?: boolean
  aspect?: 'portrait' | 'square'
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
