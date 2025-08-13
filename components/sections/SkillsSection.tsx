"use client"

import { motion } from 'motion/react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Code, Palette, Database, Cloud, Zap, Sparkles, Star } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'from-purple-500 to-blue-600',
    skills: [
      { name: 'React/Next.js', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: '🔷' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨' },
      { name: 'Vue.js', level: 75, icon: '💚' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'from-blue-500 to-purple-600',
    skills: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'PostgreSQL', level: 75, icon: '🐘' },
      { name: 'MongoDB', level: 78, icon: '🍃' },
    ],
  },
  {
    title: 'Design & UI/UX',
    icon: Palette,
    color: 'from-pink-500 to-purple-600',
    skills: [
      { name: 'Figma', level: 82, icon: '🎯' },
      { name: 'Adobe XD', level: 70, icon: '🎪' },
      { name: 'User Research', level: 75, icon: '🔍' },
      { name: 'Prototyping', level: 78, icon: '⚡' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Cloud,
    color: 'from-orange-500 to-red-600',
    skills: [
      { name: 'Git/GitHub', level: 88, icon: '📚' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS', level: 65, icon: '☁️' },
      { name: 'CI/CD', level: 72, icon: '🔄' },
    ],
  },
]

const technologies = [
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'TypeScript', level: 85, color: '#3178C6' },
  { name: 'React', level: 90, color: '#61DAFB' },
  { name: 'Next.js', level: 85, color: '#000000' },
  { name: 'Vue.js', level: 75, color: '#4FC08D' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'Python', level: 80, color: '#3776AB' },
  { name: 'PostgreSQL', level: 75, color: '#336791' },
  { name: 'MongoDB', level: 78, color: '#47A248' },
  { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
  { name: 'Figma', level: 82, color: '#F24E1E' },
  { name: 'Git', level: 88, color: '#F05032' },
  { name: 'Docker', level: 70, color: '#2496ED' },
  { name: 'AWS', level: 65, color: '#FF9900' },
  { name: 'Firebase', level: 70, color: '#FFCA28' },
  { name: 'GraphQL', level: 65, color: '#E10098' },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold text-glow"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Skills & Technologies
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        {/* Interactive Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="group"
              onMouseEnter={() => setSelectedCategory(categoryIndex)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <Card className="h-full relative overflow-hidden border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover-rotate group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {/* Card Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5"
                  animate={selectedCategory === categoryIndex ? {
                    opacity: [0.05, 0.15, 0.05],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Rotating Background Element */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3">
                    <motion.div 
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <category.icon className="w-6 h-6 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={selectedCategory === categoryIndex ? {
                          scale: [1, 1.5, 1],
                          opacity: [0, 0.5, 0],
                        } : {}}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name} 
                      className="space-y-2 group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2 group-hover/skill:text-purple-400 transition-colors duration-300">
                          <span className="text-lg">{skill.icon}</span>
                          {skill.name}
                          {hoveredSkill === skill.name && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Sparkles className="w-4 h-4 text-purple-400" />
                            </motion.div>
                          )}
                        </span>
                        <motion.span 
                          className="text-sm text-muted-foreground font-medium"
                          animate={hoveredSkill === skill.name ? {
                            scale: [1, 1.2, 1],
                            color: ['#a1a1aa', '#a855f7', '#a1a1aa'],
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      
                      {/* Animated Progress Bar */}
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { 
                            width: `${skill.level}%`,
                            boxShadow: hoveredSkill === skill.name ? 
                              '0 0 20px rgba(139, 92, 246, 0.6)' : 
                              '0 0 10px rgba(139, 92, 246, 0.3)'
                          } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.15,
                            ease: "easeOut"
                          }}
                        />
                        
                        {/* Glowing effect */}
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                          animate={hoveredSkill === skill.name ? {
                            opacity: [0.3, 0.8, 0.3],
                          } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.h3 
            className="text-3xl mb-8 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Technology Mastery
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0 
                } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: `0 10px 30px ${tech.color}40`,
                  y: -5
                }}
                className="group cursor-pointer"
              >
                <Badge 
                  className="relative px-4 py-2 text-sm font-medium border-2 transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: `${tech.color}40`,
                    background: `linear-gradient(135deg, ${tech.color}10, ${tech.color}05)`,
                  }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}20, ${tech.color}10)`,
                    }}
                    animate={{
                      background: [
                        `linear-gradient(0deg, ${tech.color}20, ${tech.color}10)`,
                        `linear-gradient(360deg, ${tech.color}20, ${tech.color}10)`,
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Skill level indicator */}
                  <motion.div
                    className="absolute top-0 right-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <span className="relative z-10 text-purple-200 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                  
                  {/* Level percentage on hover */}
                  <motion.span
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {tech.level}%
                  </motion.span>
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Skill Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {[Code, Database, Palette, Cloud, Zap].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-purple-300/20"
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + (index % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <Icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}