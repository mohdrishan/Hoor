export interface Product {
  id: string
  slug: string
  name: string
  tagline: string
  price: number
  priceDisplay: string
  category: string
  description: string
  longDescription: string
  details: string[]
  careInstructions: string[]
  images: string[]   // 6 images
  tag?: string
  featured: boolean
}

const PRODUCTS: Product[] = [
  {
    id: 'aster-bleu',
    slug: 'aster-bleu',
    name: 'Aster Bleu',
    tagline: 'Where calm meets couture.',
    price: 3999,
    priceDisplay: '₹3,999',
    category: 'Classic',
    description: 'A luminous silhouette built for the woman who leads with grace. Understated elegance in every thread.',
    longDescription: 'Aster Bleu channels the quiet strength of deep blue waters — composed, timeless, and utterly refined. Crafted from premium nida fabric, its flowing silhouette moves with you through every moment of the day. This is the abaya for the woman who chooses presence over noise.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Elegant Drape — Graceful flow and modest silhouette',
      'Premium Craftsmanship — Beautifully tailored with precision',
      'Easy Care — Wrinkle-resistant and long-lasting quality',
    ],
    careInstructions: [
      'Gentle hand wash',
      'Use cold water only',
      'Do not bleach',
      'Steam or iron on low heat',
      'Dry in shade for longer fabric life',
    ],
    images: [
      '/products/aster-bleu/01.jpg',
      '/products/aster-bleu/02.jpg',
      '/products/aster-bleu/03.jpg',
      '/products/aster-bleu/04.jpg',
      '/products/aster-bleu/05.jpg',
      '/products/aster-bleu/06.jpg',
      ],
    tag: 'Classic',
    featured: true,
  },
  {
    id: 'celeste',
    slug: 'celeste',
    name: 'Celesté',
    tagline: 'Touched by something divine.',
    price: 4999,
    priceDisplay: '₹4,999',
    category: 'Signature',
    description: 'For moments that demand a presence. Celesté is luxury in its purest, most wearable form.',
    longDescription: 'Celesté was designed for the woman who understands that true luxury is quiet. With its whisper-light chiffon drape and delicately finished edges, this abaya elevates every occasion — from a casual afternoon to a formal evening. The flowing silhouette catches light beautifully, making every entrance memorable.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Elegant Drape — Graceful flow and modest silhouette',
      'Premium Craftsmanship — Beautifully tailored with precision',
      'Easy Care — Wrinkle-resistant and long-lasting quality',
    ],
    careInstructions: [
      'Gentle hand wash',
      'Use cold water only',
      'Do not bleach',
      'Steam or iron on low heat',
      'Dry in shade for longer fabric life',
    ],
    images: [
      '/products/celeste/01.jpg',
      '/products/celeste/02.jpg',
      '/products/celeste/03.jpg',
      '/products/celeste/04.jpg',
      '/products/celeste/05.jpg',
      '/products/celeste/06.jpg',
      ],
    tag: 'Signature',
    featured: true,
  },
  {
    id: 'butter-elan',
    slug: 'butter-elan',
    name: 'Butter Élan',
    tagline: 'Effortless in every sense.',
    price: 5200,
    priceDisplay: '₹5,200',
    category: 'Luxury',
    description: 'Butter-soft crepe that drapes like a second skin. The definition of refined everyday luxury.',
    longDescription: 'Butter Élan earns its name. The signature butter-weight crepe fabric is impossibly soft against the skin, moving with a fluidity that feels effortless from the moment you put it on. Thoughtfully designed with subtle structure at the shoulders and a graceful hem sweep, this abaya works equally well for a business meeting or an evening gathering.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Elegant Drape — Graceful flow and modest silhouette',
      'Premium Craftsmanship — Beautifully tailored with precision',
      'Easy Care — Wrinkle-resistant and long-lasting quality',
    ],
    careInstructions: [
      'Gentle hand wash',
      'Use cold water only',
      'Do not bleach',
      'Steam or iron on low heat',
      'Dry in shade for longer fabric life',
    ],
    images: [
      '/products/butter-elan/01.jpg',
      '/products/butter-elan/02.jpg',
      '/products/butter-elan/03.jpg',
      '/products/butter-elan/04.jpg',
      '/products/butter-elan/05.jpg',
      '/products/butter-elan/06.jpg',
      ],
    tag: 'New',
    featured: true,
  },
  {
    id: 'blush-reverie',
    slug: 'blush-reverie',
    name: 'Blush Reverie',
    tagline: 'A dream you can wear.',
    price: 6200,
    priceDisplay: '₹6,200',
    category: 'Evening',
    description: 'The finest piece in the HOOR collection. Reserved for evenings that deserve to be remembered.',
    longDescription: 'Blush Reverie is HOOR\'s most coveted piece — and for good reason. A hand-selected silk blend forms the outer shell, catching light with a natural luminescence that no other fabric can replicate. Subtle hand-embroidered detail at the collar and cuffs elevates this beyond a garment into a work of art. This is the abaya for the evening you will never forget.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Elegant Drape — Graceful flow and modest silhouette',
      'Premium Craftsmanship — Beautifully tailored with precision',
      'Easy Care — Wrinkle-resistant and long-lasting quality',
    ],
    careInstructions: [
      'Gentle hand wash',
      'Use cold water only',
      'Do not bleach',
      'Steam or iron on low heat',
      'Dry in shade for longer fabric life',
    ],
    images: [
      '/products/blush-reverie/01.jpg',
      '/products/blush-reverie/02.jpg',
      '/products/blush-reverie/03.jpg',
      '/products/blush-reverie/04.jpg',
      '/products/blush-reverie/05.jpg',
      '/products/blush-reverie/06.jpg',
      ],
    tag: 'Limited',
    featured: true,
  },
]

export default PRODUCTS

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find(p => p.slug === slug)
}

export function getAllProducts(): Product[] {
  return PRODUCTS
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter(p => p.featured)
}
