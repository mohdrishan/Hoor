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
  {
    id: 'noir-essential',
    slug: 'noir-essential',
    name: 'Noir Essential',
    tagline: 'Refined simplicity, always in season.',
    price: 2499,
    priceDisplay: '₹2,499',
    category: 'Essential',
    description: 'A wine-toned everyday abaya with delicate lace detailing down the front. Effortless coverage, quietly elegant.',
    longDescription: 'Noir Essential is built for daily wear without compromising on grace. The deep wine hue is grounded and versatile, while the hand-finished lace panel at the front and matching cuffs add just the right amount of detail. Paired with a coordinating hijab, this is the abaya you reach for again and again.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Lace Detailing — Hand-finished front panel and cuffs',
      'Includes Matching Hijab — Coordinated for a complete look',
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
      '/products/noir-essential/01.jpg',
      '/products/noir-essential/02.jpg',
      '/products/noir-essential/03.jpg',
      '/products/noir-essential/04.jpg',
      '/products/noir-essential/05.jpg',
      '/products/noir-essential/06.jpg',
    ],
    tag: 'New',
    featured: true,
  },
  {
    id: 'cocoa-drift',
    slug: 'cocoa-drift',
    name: 'Cocoa Drift',
    tagline: 'Grounded elegance, effortlessly worn.',
    price: 2499,
    priceDisplay: '₹2,499',
    category: 'Essential',
    description: 'An espresso-toned abaya with scalloped lace trim. Warm, grounded, and easy to wear from morning to evening.',
    longDescription: 'Cocoa Drift takes its cue from warm, earthy tones — the kind that feel effortless in any season. A scalloped lace panel traces the front and cuffs against soft, flowing nida fabric, finished with a coordinating hijab. Understated, versatile, and made for the woman who wants quiet sophistication in her everyday wardrobe.',
    details: [
      'Exclusive Material — Premium Korean Nida',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, elegant finish',
      'Lace Detailing — Scalloped lace panel and cuffs',
      'Includes Matching Hijab — Coordinated for a complete look',
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
      '/products/cocoa-drift/01.jpg',
      '/products/cocoa-drift/02.jpg',
      '/products/cocoa-drift/03.jpg',
      '/products/cocoa-drift/04.jpg',
      '/products/cocoa-drift/05.jpg',
      '/products/cocoa-drift/06.jpg',
    ],
    tag: 'New',
    featured: true,
  },
  {
    id: 'al-noor',
    slug: 'al-noor',
    name: 'Al Noor',
    tagline: 'Light catches where the petals bloom.',
    price: 2499,
    priceDisplay: '₹2,499',
    category: 'Print',
    description: 'An ivory abaya carried by a soft floral print. Flowing bell sleeves and a light, layered drape make it a standout piece.',
    longDescription: 'Al Noor means light — and this piece wears it beautifully. A delicate floral print moves across soft, flowing fabric, paired with dramatic bell sleeves and a layered silhouette that catches every movement. It\'s a departure from the solid tones of the everyday collection, made for the woman who wants her abaya to feel like a statement.',
    details: [
      'Exclusive Material — Premium Printed Fabric',
      'Lightweight Material — Soft, breathable and comfortable',
      'Fine Fabric Texture — Smooth, flowing finish',
      'Statement Sleeves — Dramatic bell-sleeve silhouette',
      'Layered Drape — Light, floating outer layer',
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
      '/products/al-noor/01.jpg',
      '/products/al-noor/02.jpg',
      '/products/al-noor/03.jpg',
      '/products/al-noor/04.jpg',
      '/products/al-noor/05.jpg',
      '/products/al-noor/06.jpg',
    ],
    tag: 'New',
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
