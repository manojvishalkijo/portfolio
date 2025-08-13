"use client"

import { motion } from 'motion/react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../ui/button'

export default function HeroSection() {
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20 dark:from-purple-900/40 dark:via-blue-900/40 dark:to-indigo-900/40">
        {/* Neon Light Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Neon Lines */}
          <motion.div 
            className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            style={{
              boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7',
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            style={{
              boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #3b82f6',
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Vertical Neon Lines */}
          <motion.div 
            className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
            style={{
              boxShadow: '0 0 10px #c084fc, 0 0 20px #c084fc, 0 0 40px #c084fc',
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"
            style={{
              boxShadow: '0 0 10px #60a5fa, 0 0 20px #60a5fa, 0 0 40px #60a5fa',
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleY: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Diagonal Neon Lines */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: 'linear-gradient(45deg, transparent 49%, #8b5cf6 50%, transparent 51%)',
              backgroundSize: '100px 100px',
              opacity: 0.1
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px'],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? '#a855f7' : '#3b82f6',
                boxShadow: i % 2 === 0 
                  ? '0 0 10px #a855f7, 0 0 20px #a855f7' 
                  : '0 0 10px #3b82f6, 0 0 20px #3b82f6',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent relative">
              John Doe
              {/* Neon text glow effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                style={{
                  textShadow: '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
                  filter: 'blur(1px)',
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                John Doe
              </motion.span>
            </span>
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span>I'm a </span>
            <motion.span
              className="text-purple-600 font-semibold relative"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                textShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
              }}
            >
              Full Stack Developer
            </motion.span>
            <br />
            <span>passionate about creating innovative digital experiences</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full relative overflow-hidden"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)'
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">View My Work</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full border-2 relative overflow-hidden hover:border-purple-400"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { Icon: Github, href: '#', label: 'GitHub' },
              { Icon: Linkedin, href: '#', label: 'LinkedIn' },
              { Icon: Mail, href: '#', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-border flex items-center justify-center text-foreground/80 hover:text-foreground hover:bg-background/20 transition-all relative"
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{
            textShadow: '0 0 10px rgba(168, 85, 247, 0.5)'
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  )
}