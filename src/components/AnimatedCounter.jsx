import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseInt(value.replace(/\D/g, ''))
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = numericValue / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      if (currentStep === steps) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.floor(increment * currentStep))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}
