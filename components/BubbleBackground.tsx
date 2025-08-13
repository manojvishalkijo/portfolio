"use client"

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  size: number
  left: number
  delay: number
  duration: number
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = []
      for (let i = 0; i < 15; i++) {
        newBubbles.push({
          id: i,
          size: Math.random() * 60 + 20, // 20-80px
          left: Math.random() * 100,
          delay: Math.random() * 8,
          duration: Math.random() * 4 + 6, // 6-10s
        })
      }
      setBubbles(newBubbles)
    }

    generateBubbles()
    const interval = setInterval(generateBubbles, 10000) // Regenerate every 10s

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            background: `radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.2), rgba(168, 85, 247, 0.05))`,
            border: '1px solid rgba(139, 92, 246, 0.2)',
            backdropFilter: 'blur(2px)',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.1)',
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 1, 1, 0],
            rotate: 360,
            x: [0, 50, -30, 20, 0],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Inner glow */}
          <div
            className="absolute inset-2 rounded-full"
            style={{
              background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.4), transparent 60%)',
            }}
          />
        </motion.div>
      ))}

      {/* Additional small floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#a855f7' : '#c084fc',
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px currentColor',
          }}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-50px',
            opacity: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 3 + 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}