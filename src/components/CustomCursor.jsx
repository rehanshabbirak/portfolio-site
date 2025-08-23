import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseEnter = () => {
      gsap.to([cursor, follower], {
        scale: 1.5,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', moveCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Cursor follower */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  )
}

export default CustomCursor

