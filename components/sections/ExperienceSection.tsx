"use client"

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Calendar, MapPin, Building } from 'lucide-react'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Frontend Developer Intern',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: 'Jun 2024 - Present',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement user interfaces and improve user experience.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    current: true,
  },
  {
    id: 2,
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    period: 'Sep 2021 - May 2025',
    description: 'Relevant coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Machine Learning, Web Development.',
    technologies: ['Python', 'Java', 'C++', 'SQL'],
    current: true,
  },
  {
    id: 3,
    type: 'work',
    title: 'Web Development Freelancer',
    company: 'Self-Employed',
    location: 'Remote',
    period: 'Jan 2023 - May 2024',
    description: 'Built custom websites and web applications for small businesses. Managed full project lifecycle from requirements gathering to deployment.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WordPress'],
    current: false,
  },
  {
    id: 4,
    type: 'work',
    title: 'Junior Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    period: 'Sep 2022 - Dec 2022',
    description: 'Contributed to development of mobile-first web application. Implemented new features and fixed bugs in existing codebase.',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL'],
    current: false,
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through education and professional development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-purple-600 md:transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 
                      ? 'md:flex-row-reverse md:text-right' 
                      : 'md:flex-row md:text-left'
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute z-20 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 border-4 border-background shadow-lg ${
                    index % 2 === 0 
                      ? 'left-3 md:left-1/2 md:transform md:-translate-x-1/2' 
                      : 'left-3 md:left-1/2 md:transform md:-translate-x-1/2'
                  }`}>
                    {exp.current && (
                      <motion.div 
                        className="absolute inset-0 rounded-full bg-purple-600"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 0.3, 0.7] 
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  } ml-16 md:ml-0`}>
                    <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 group">
                      <CardHeader>
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg mb-2 flex items-center gap-2 group-hover:text-purple-600 transition-colors">
                              {exp.type === 'work' ? <Building className="w-4 h-4 flex-shrink-0" /> : <Calendar className="w-4 h-4 flex-shrink-0" />}
                              <span className="truncate">{exp.title}</span>
                            </CardTitle>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Building className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{exp.location}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 flex-shrink-0" />
                                <span className="truncate">{exp.period}</span>
                                {exp.current && (
                                  <Badge variant="secondary" className="ml-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs">
                                    Current
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <Badge variant={exp.type === 'work' ? 'default' : 'secondary'} className="flex-shrink-0">
                            {exp.type === 'work' ? 'Work' : 'Education'}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}