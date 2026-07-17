import { clsx } from 'clsx'

interface Props {
  className?: string
  label?: string
  variant?: 'light' | 'mid' | 'dark' | 'nude'
}

const gradients = {
  light: 'from-ivory-2 via-ivory-3 to-ivory-2',
  mid:   'from-ivory-3 via-nude-light to-ivory-2',
  dark:  'from-ivory-3 via-warm-xlight/30 to-ivory-3',
  nude:  'from-nude-light via-nude to-nude-light',
}

export function PlaceholderImage({ className, label, variant = 'light' }: Props) {
  return (
    <div className={clsx('relative overflow-hidden bg-gradient-to-br', gradients[variant], className)}>
      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gold/4 to-transparent" />
      {/* Subtle texture lines */}
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(184,150,90,0.06) 40px,rgba(184,150,90,0.06) 41px)' }} />
      {/* Center mark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-px bg-gold/25 mx-auto mb-4" />
          {label && <p className="font-body text-[9px] tracking-ultra uppercase text-warm-xlight">{label}</p>}
          <div className="w-8 h-px bg-gold/25 mx-auto mt-4" />
        </div>
      </div>
    </div>
  )
}
