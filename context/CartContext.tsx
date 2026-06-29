'use client'
import { createContext, useContext, useEffect, useState, useCallback, useMemo, type ReactNode } from 'react'
import {
  type CartItem,
  getCart,
  addToCart as libAdd,
  removeFromCart as libRemove,
  updateQuantity as libUpdate,
  clearCart as libClear,
  cartTotal,
  cartCount,
  formatPrice,
} from '@/lib/cart'

interface CartContextValue {
  items: CartItem[]
  count: number
  total: number
  totalDisplay: string
  drawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQty: (productId: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => { setItems(getCart()) }, [])

  const addItem    = useCallback((item: CartItem) => setItems(libAdd(item)), [])
  const removeItem = useCallback((productId: string) => setItems(libRemove(productId)), [])
  const updateQty  = useCallback((productId: string, qty: number) => setItems(libUpdate(productId, qty)), [])
  const clear      = useCallback(() => { libClear(); setItems([]) }, [])

  const total = cartTotal(items)
  const count = cartCount(items)

  const value = useMemo(() => ({
    items, count, total,
    totalDisplay: formatPrice(total),
    drawerOpen,
    openDrawer:  () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    addItem, removeItem, updateQty, clear,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [items, count, total, drawerOpen, addItem, removeItem, updateQty, clear])

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
