export interface CartItem {
  productId: string
  productName: string
  productSlug: string
  price: number
  priceDisplay: string
  quantity: number
  image: string
}

export interface CartState {
  items: CartItem[]
  updatedAt: number
}

const CART_KEY = 'hoor_cart_v3'

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CART_KEY)
    if (!raw) return []
    const parsed: CartState = JSON.parse(raw)
    return parsed.items ?? []
  } catch {
    return []
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === 'undefined') return
  try {
    const state: CartState = { items, updatedAt: Date.now() }
    localStorage.setItem(CART_KEY, JSON.stringify(state))
  } catch { /* storage full */ }
}

export function addToCart(item: CartItem): CartItem[] {
  const items = getCart()
  const existing = items.findIndex(i => i.productId === item.productId)
  if (existing >= 0) {
    items[existing] = { ...items[existing], quantity: items[existing].quantity + item.quantity }
  } else {
    items.push(item)
  }
  saveCart(items)
  return items
}

export function removeFromCart(productId: string): CartItem[] {
  const items = getCart().filter(i => i.productId !== productId)
  saveCart(items)
  return items
}

export function updateQuantity(productId: string, quantity: number): CartItem[] {
  const items = getCart()
  const idx = items.findIndex(i => i.productId === productId)
  if (idx >= 0) {
    if (quantity <= 0) items.splice(idx, 1)
    else items[idx] = { ...items[idx], quantity }
  }
  saveCart(items)
  return items
}

export function clearCart(): void {
  saveCart([])
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.price * i.quantity, 0)
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0)
}

export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`
}
