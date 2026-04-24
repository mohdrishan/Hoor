'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, SlideIn } from '@/components/animations/FadeUp'
import { BRAND } from '@/lib/constants'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello HOOR,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.open(`${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const contacts = [
    {
      icon: <IgIcon />,
      label: 'Instagram',
      sub: BRAND.instagramHandle,
      href: BRAND.instagram,
    },
    {
      icon: <WaIcon />,
      label: 'WhatsApp',
      sub: BRAND.phone,
      href: BRAND.whatsapp,
    },
    {
      icon: <MailIcon />,
      label: 'Email',
      sub: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      sub: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <PinIcon />,
      label: 'Location',
      sub: 'Mangalore, Karnataka, India',
      href: undefined,
    },
  ]

  return (
    <div className="min-h-screen bg-ivory pt-32 pb-24">
      <div className="container-xl">

        {/* Page header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }} className="label mb-5"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-light text-5xl md:text-7xl text-onyx mb-6 leading-tight"
          >
            Connect With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="body-copy max-w-md mx-auto text-sm leading-loose"
          >
            For enquiries, styling consultations, or simply to say hello. We read every message and reply personally.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">

          {/* Left contact info */}
          <SlideIn direction="left" className="space-y-10">

            {/* Owner card */}
            <div className="border border-gold/20 p-8 relative bg-ivory-2">
              <div className="absolute -top-px left-8 bg-ivory-2 px-4">
                <span className="label text-gold/60">Founder & Designer</span>
              </div>
              <div className="flex items-center gap-5">
                {/* Avatar initial */}
                <div className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
                  <span className="font-display text-2xl font-light text-gold">S</span>
                </div>
                <div>
                  <p className="font-display text-2xl font-light text-onyx">{BRAND.ownerName}</p>
                  <p className="font-body text-[10px] tracking-ultra uppercase text-warm-light mt-1">
                    HOOR · Luxury Abaya House
                  </p>
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div>
              <p className="label mb-7">Reach Us</p>
              <div className="space-y-5">
                {contacts.map(({ icon, label, sub, href }) => (
                  <div key={label}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-5 hover:text-gold transition-colors duration-300"
                      >
                        <ContactBox>{icon}</ContactBox>
                        <div>
                          <p className="font-display text-lg font-light text-onyx group-hover:text-gold transition-colors duration-300">{label}</p>
                          <p className="font-body text-xs text-warm-light mt-0.5 break-all">{sub}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-5">
                        <ContactBox>{icon}</ContactBox>
                        <div>
                          <p className="font-display text-lg font-light text-onyx">{label}</p>
                          <p className="font-body text-xs text-warm-light mt-0.5">{sub}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-gold/25 pl-7 py-1">
              <p className="font-display text-xl font-light italic text-onyx/65 leading-relaxed">
                "Every enquiry is the beginning of a beautiful conversation."
              </p>
              <p className="font-body text-xs text-warm-light mt-3 tracking-wide">— {BRAND.ownerName}, HOOR</p>
            </div>
          </SlideIn>

          {/* Right form */}
          <SlideIn direction="right" delay={0.12}>
            <form onSubmit={submit} className="space-y-8">

              <div>
                <label htmlFor="name" className="font-body text-[9px] tracking-ultra uppercase text-warm-light block mb-3">
                  Your Name
                </label>
                <input
                  id="name" type="text" required
                  value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-onyx/12 focus:border-gold outline-none py-3 font-body font-light text-onyx placeholder:text-warm-xlight text-sm transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-body text-[9px] tracking-ultra uppercase text-warm-light block mb-3">
                  Email Address
                </label>
                <input
                  id="email" type="email" required
                  value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  placeholder="hello@yourname.com"
                  className="w-full bg-transparent border-b border-onyx/12 focus:border-gold outline-none py-3 font-body font-light text-onyx placeholder:text-warm-xlight text-sm transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-body text-[9px] tracking-ultra uppercase text-warm-light block mb-3">
                  Your Message
                </label>
                <textarea
                  id="message" rows={5} required
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  placeholder="I would love to enquire about..."
                  className="w-full bg-transparent border-b border-onyx/12 focus:border-gold outline-none py-3 font-body font-light text-onyx placeholder:text-warm-xlight text-sm transition-colors duration-300 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full border border-onyx text-onyx font-body text-[10px] tracking-ultra uppercase py-5 hover:bg-onyx hover:text-ivory transition-all duration-700"
                >
                  {sent ? '✦ Opening WhatsApp...' : 'Send Enquiry via WhatsApp'}
                </button>
                <p className="font-body text-[10px] text-warm-xlight text-center mt-4">
                  Replies personally within 24 hours · {BRAND.ownerName}
                </p>
              </div>

              {/* Direct contact shortcuts */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={BRAND.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-onyx/10 py-3.5 text-onyx/60 hover:border-gold hover:text-gold transition-all duration-400 font-body text-[9px] tracking-ultra uppercase"
                >
                  <WaIcon /> WhatsApp
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center justify-center gap-2 border border-onyx/10 py-3.5 text-onyx/60 hover:border-gold hover:text-gold transition-all duration-400 font-body text-[9px] tracking-ultra uppercase"
                >
                  <MailIcon /> Email
                </a>
              </div>
            </form>
          </SlideIn>
        </div>
      </div>
    </div>
  )
}

function ContactBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold shrink-0 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-400">
      {children}
    </div>
  )
}

function IgIcon()    { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> }
function WaIcon()    { return <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> }
function MailIcon()  { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg> }
function PhoneIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .93h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> }
function PinIcon()   { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> }
