'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function shouldUseSmoothScroll() {
  if (typeof window === 'undefined') return false

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  const isSmallScreen = window.matchMedia('(max-width: 1023px)').matches

  return !prefersReducedMotion && !isCoarsePointer && !isSmallScreen
}

export default function SmoothScroll() {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) return

    let lenis: { destroy: () => void; on: (event: 'scroll', callback: () => void) => void; raf: (time: number) => void; scrollTo: (value: number, opts: { immediate: boolean }) => void; scroll: number; resize: () => void } | null = null

    const init = async () => {
      const { default: Lenis } = await import('lenis')

      lenis = new Lenis({
        lerp: 0.14,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
      })

      lenis.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value) {
          if (arguments.length && lenis) {
            lenis.scrollTo(value, { immediate: true })
          }
          return lenis?.scroll ?? window.scrollY
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
      })

      const onRefresh = () => lenis?.resize()
      ScrollTrigger.addEventListener('refresh', onRefresh)

      const onTicker = (time: number) => {
        lenis?.raf(time * 1000)
      }

      gsap.ticker.add(onTicker)
      gsap.ticker.lagSmoothing(0)
      ScrollTrigger.refresh()

      return () => {
        ScrollTrigger.removeEventListener('refresh', onRefresh)
        lenis?.destroy()
        gsap.ticker.remove(onTicker)
      }
    }

    let cleanup: (() => void) | undefined
    init().then((fn) => {
      cleanup = fn
    })

    return () => cleanup?.()
  }, [])

  return null
}
