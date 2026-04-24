'use client'
import { useEffect, useRef } from 'react'

export function Cursor() {
  const dot  = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const d = dot.current
    const r = ring.current
    if (!d || !r) return
    let mx = 0, my = 0, rx = 0, ry = 0, af: number

    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    const tick = () => {
      d.style.left = mx + 'px'; d.style.top = my + 'px'
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      r.style.left = rx + 'px'; r.style.top = ry + 'px'
      af = requestAnimationFrame(tick)
    }
    const enter = () => r.classList.add('expand')
    const leave = () => r.classList.remove('expand')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    af = requestAnimationFrame(tick)
    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(af) }
  }, [])

  return (
    <>
      <div ref={dot}  className="cursor-dot  hidden lg:block" />
      <div ref={ring} className="cursor-ring hidden lg:block" />
    </>
  )
}
