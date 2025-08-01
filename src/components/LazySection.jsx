import { useState, useRef, useEffect } from 'react'

const LazySection = ({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = '50px',
}) => {
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return <div ref={sectionRef}>{isInView ? children : fallback}</div>
}

export default LazySection
