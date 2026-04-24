import type { Collection, AbayanType, Testimonial, NavLink } from '@/types'

export const BRAND = {
  name:            'HOOR',
  tagline:         'Elegance in Modesty',
  subTagline:      'Premium modern abayas for the graceful woman.',
  description:     'Premium modest fashion curated for women who move through the world with quiet confidence.',
  location:        'Mangalore, India',
  instagram:       'https://instagram.com/hoor.ind',
  instagramHandle: '@hoor.ind',
  whatsapp:        'https://wa.me/918867669549',
  whatsappMsg:     'Hello HOOR, I would like to enquire about your collection.',
  phone:           '+91 88676 69549',
  email:           'shizaishel01@gmail.com',
  ownerName:       'Shiza Ishel',
} as const

export const NAV_LINKS: NavLink[] = [
  { href: '/',           label: 'Home'       },
  { href: '/collection', label: 'Collection' },
  { href: '/lookbook',   label: 'Lookbook'   },
  { href: '/about',      label: 'Story'      },
  { href: '/contact',    label: 'Contact'    },
]

export const COLLECTIONS: Collection[] = [
  { id: 'al-noor',  name: 'Al Noor',  category: 'Signature', description: 'A luminous silhouette that commands attention with complete restraint.',         price: '₹8,500',  tag: 'Signature', featured: true,  aspect: 'portrait' },
  { id: 'al-raha',  name: 'Al Raha',  category: 'Classic',   description: 'For the woman who moves through the world with quiet, unshakeable confidence.',               price: '₹7,200',  tag: 'New',       featured: true,  aspect: 'portrait' },
  { id: 'al-wafa',  name: 'Al Wafa',  category: 'Luxury',    description: 'Timeless in form. Modern in every way that matters.',                       price: '₹9,800',  tag: 'Exclusive', featured: true,  aspect: 'portrait' },
  { id: 'al-lail',  name: 'Al Lail',  category: 'Evening',   description: 'For evenings that deserve a presence. Understated, deeply memorable.',              price: '₹11,200', tag: 'Evening',   featured: false, aspect: 'portrait' },
  { id: 'al-safa',  name: 'Al Safa',  category: 'Minimal',   description: 'Simplicity elevated. A refined silhouette for every occasion.',                  price: '₹6,800',  tag: 'Classic',   featured: false, aspect: 'portrait' },
  { id: 'al-hoor',  name: 'Al Hoor',  category: 'Limited',   description: 'Our namesake. The pinnacle of what HOOR was always meant to create.',               price: '₹14,500', tag: 'Limited',   featured: false, aspect: 'portrait' },
  { id: 'al-nada',  name: 'Al Nada',  category: 'Summer',    description: 'Breathable linen in elegant form for warm days worn without compromise.',           price: '₹6,200',  tag: 'Summer',    featured: false, aspect: 'portrait' },
  { id: 'al-fajr',  name: 'Al Fajr',  category: 'Prayer',    description: 'Designed for the sacred. Softness, full coverage, and reverent grace.',             price: '₹4,800',  tag: 'Prayer',    featured: false, aspect: 'portrait' },
  { id: 'al-safar', name: 'Al Safar', category: 'Travel',    description: 'Wrinkle-resistant, effortlessly packable. Elegance on every journey.',              price: '₹7,600',  tag: 'Travel',    featured: false, aspect: 'portrait' },
]

export const ABAYA_TYPES: AbayanType[] = [
  { id: 'classic',     name: 'Classic Everyday',  description: 'Refined simplicity for daily grace. Timeless silhouettes that never demand attention, yet always earn it.',    icon: '◈' },
  { id: 'open-front',  name: 'Open Front',         description: 'Effortlessly layered. An elegant open drape that moves with complete freedom and understated flair.',           icon: '◇' },
  { id: 'closed',      name: 'Closed Front',       description: 'Complete, composed, considered. A clean silhouette offering full coverage with immaculate finish.',             icon: '◆' },
  { id: 'kimono',      name: 'Kimono',             description: 'Where Eastern grace meets modern edge. Wide sleeves and flowing lines create a distinctly refined mood.',       icon: '❖' },
  { id: 'embroidered', name: 'Embroidered',        description: 'Rich detailing and refined ornamentation. For moments that call for something more than ordinary.',           icon: '✦' },
  { id: 'occasion',    name: 'Luxury Occasion',    description: 'When the evening matters. Luxurious textures and elevated detailing for moments you will never forget.',    icon: '◉' },
  { id: 'minimal',     name: 'Minimal Modern',     description: 'Nothing excess. A precise structure for the woman with an eye for the essential.',                icon: '○' },
  { id: 'satin',       name: 'Satin Evening',      description: 'Liquid luxury. Fluid satin that catches light gracefully, designed for grand evenings and quiet glamour.',     icon: '◎' },
  { id: 'linen',       name: 'Linen Summer',       description: 'The luxury of breathing easy. Lightweight linen in elegant cuts for warm days worn without compromise.',       icon: '□' },
  { id: 'prayer',      name: 'Prayer',             description: 'Made for the most intimate moments. Soft, full-coverage, deeply reverent in its simplicity.',                 icon: '◯' },
  { id: 'travel',      name: 'Travel',             description: 'Sophisticated enough for arrival, practical enough for transit. A quiet declaration of taste in motion.',     icon: '△' },
  { id: 'signature',   name: 'Signature Black',    description: 'The foundation of every wardrobe. Deep black, exceptional quality, complete and commanding.',        icon: '■' },
]

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Fatima Al Rashid',     location: 'Dubai, UAE',           rating: 5, quote: 'I wore the Al Noor to a wedding and received more compliments than I could count. HOOR understands what luxury modesty truly means.' },
  { id: '2', name: 'Mariam Hassan',        location: 'Bengaluru, India',     rating: 5, quote: 'I ordered three pieces and each one arrived better than I imagined. The packaging, the finish, the way it sits this is not just a brand, it is a statement.' },
  { id: '3', name: 'Noor Al Khalidi',      location: 'Riyadh, Saudi Arabia', rating: 5, quote: 'After years of searching, HOOR is the only abaya brand that makes me feel both covered and completely myself. The Al Hoor collection is extraordinary.' },
  { id: '4', name: 'Zainab Siddiqui',      location: 'Mumbai, India',        rating: 5, quote: 'From the moment it arrived I knew this was different. Perfect fit, exceptional quality, and an elegance that makes every entrance effortless.' },
]

export const WHY_HOOR = [
  { title: 'Premium Quality',   body: 'Every piece starts with carefully sourced materials silks, linens, and specialty weaves selected for their exceptional feel and look.', icon: '◈' },
  { title: 'Careful Finishing', body: 'Each abaya is put together with precision and attention to detail. Quality that shows in every hem, every edge, every finish.',              icon: '✦' },
  { title: 'Thoughtful Style',  body: 'Our silhouettes are shaped for modern women flattering, functional, and suited for the full spectrum of daily life.',                      icon: '◇' },
  { title: 'Timeless Approach', body: 'HOOR does not follow trends. Every piece is chosen to be worn for years and remembered for even longer.',                                   icon: '○' },
]
