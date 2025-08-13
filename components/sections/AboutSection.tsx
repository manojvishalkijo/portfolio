"use client"

import { motion } from 'motion/react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Download, MapPin, Calendar, Mail, Phone, Star, Award, Code, Heart } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const stats = [
  { number: '50+', label: 'Projects Completed', icon: Code, color: 'from-purple-500 to-blue-500' },
  { number: '3+', label: 'Years Experience', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
  { number: '15+', label: 'Technologies', icon: Star, color: 'from-cyan-500 to-purple-500' },
  { number: '5+', label: 'Certifications', icon: Award, color: 'from-purple-500 to-pink-500' },
]

const interests = [
  { name: 'Web Development', icon: '🌐', level: 95 },
  { name: 'Mobile Apps', icon: '📱', level: 80 },
  { name: 'UI/UX Design', icon: '🎨', level: 85 },
  { name: 'Machine Learning', icon: '🤖', level: 70 },
  { name: 'Open Source', icon: '🔓', level: 90 },
  { name: 'Tech Blogging', icon: '✍️', level: 75 },
]

const personalInfo = [
  { label: 'Location', value: 'San Francisco, CA', icon: MapPin },
  { label: 'Email', value: 'john.doe@email.com', icon: Mail },
  { label: 'Phone', value: '+1 (555) 123-4567', icon: Phone },
  { label: 'Status', value: 'Available for hire', icon: Heart },
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [selectedInterest, setSelectedInterest] = useState<number | null>(null)

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/5 via-blue-900/10 to-purple-900/5"
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Floating geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 border border-purple-500/10 rounded-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            About Me
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Profile Image and Basic Info */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative">
              {/* Rotating border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-background rounded-3xl" />
              </motion.div>
              
              <Card className="relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                      alt="Profile"
                      className="w-full h-80 object-cover rounded-t-3xl"
                    />
                    
                    {/* Overlay with status */}
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      animate={{ 
                        boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 10px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full" />
                      Available
                    </motion.div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        John Doe
                      </h3>
                      <p className="text-purple-300 font-medium">Full Stack Developer</p>
                    </div>
                    
                    {/* Personal Info */}
                    <div className="space-y-3">
                      {personalInfo.map((info, index) => (
                        <motion.div
                          key={info.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-3 text-sm hover:text-purple-400 transition-colors duration-300"
                        >
                          <info.icon className="w-4 h-4 text-purple-400" />
                          <span className="text-muted-foreground">{info.label}:</span>
                          <span>{info.value}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Download Resume Button */}
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-purple-400">
                Hi, I'm John! 👋
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer currently pursuing my Computer Science degree at UC Berkeley. 
                  With over 3 years of experience in web development, I specialize in creating modern, 
                  responsive applications using cutting-edge technologies.
                </p>
                <p>
                  My journey in tech started with a simple "Hello World" program, and since then, I've been 
                  fascinated by the endless possibilities of code. I believe in writing clean, maintainable code 
                  and creating user experiences that make a difference.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  writing technical blog posts, or exploring the latest trends in AI and machine learning. 
                  I'm always eager to learn new technologies and tackle challenging problems.
                </p>
              </div>
            </div>

            {/* Interests & Passions */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-purple-400">What I'm passionate about:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group cursor-pointer"
                    onMouseEnter={() => setSelectedInterest(index)}
                    onMouseLeave={() => setSelectedInterest(null)}
                  >
                    <Card className="p-4 hover:border-purple-500/40 transition-all duration-300 bg-gradient-to-br from-purple-900/5 to-blue-900/5 hover:shadow-lg hover:shadow-purple-500/10 hover-rotate">
                      <div className="flex items-center gap-3">
                        <motion.span 
                          className="text-2xl"
                          animate={selectedInterest === index ? {
                            scale: [1, 1.3, 1],
                            rotate: [0, 10, -10, 0],
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {interest.icon}
                        </motion.span>
                        <div className="flex-1">
                          <span className="font-medium group-hover:text-purple-400 transition-colors">
                            {interest.name}
                          </span>
                          <div className="mt-1 h-1.5 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${interest.level}%` } : {}}
                              transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <Card className="text-center p-6 transition-all duration-500 border-2 border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-900/5 to-blue-900/5 hover:shadow-xl hover:shadow-purple-500/20 hover-rotate group-hover:scale-105">
                <CardContent className="p-0 space-y-4">
                  {/* Animated Icon */}
                  <motion.div
                    className={`mx-auto w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                    animate={hoveredStat === index ? {
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  {/* Animated Counter */}
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                    animate={hoveredStat === index ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="text-sm text-muted-foreground group-hover:text-purple-300 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Progress indicator */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
                    initial={{ width: 0 }}
                    animate={inView ? { width: '100%' } : {}}
                    transition={{ duration: 1.5, delay: 1.2 + index * 0.2 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}