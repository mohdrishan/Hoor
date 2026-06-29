import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center text-center px-6">
      <div>
        <p className="label mb-6">404</p>
        <h1 className="font-display font-light text-6xl md:text-8xl text-onyx mb-6 leading-none">
          Page Not Found
        </h1>
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="w-12 h-px bg-gold/30" />
          <p className="font-display text-lg italic text-warm-mid">The page you seek has gracefully departed.</p>
          <div className="w-12 h-px bg-gold/30" />
        </div>
        <Link href="/" className="btn-primary">Return Home</Link>
      </div>
    </div>
  )
}
