"use client"

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Trophy, Award, Star, Target } from 'lucide-react'

const achievements = [
  {
    id: 1,
    title: 'First Place - University Hackathon 2024',
    description: 'Won first place in the annual university hackathon with a team of 4, developing an AI-powered study assistant application.',
    date: 'March 2024',
    type: 'Competition',
    icon: Trophy,
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 2,
    title: 'Dean\'s List Recognition',
    description: 'Achieved Dean\'s List recognition for maintaining a GPA above 3.7 for three consecutive semesters.',
    date: 'Fall 2023',
    type: 'Academic',
    icon: Star,
    color: 'from-blue-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Open Source Contributor',
    description: 'Contributed to 15+ open source projects on GitHub, with over 500 stars across personal repositories.',
    date: 'Ongoing',
    type: 'Community',
    icon: Target,
    color: 'from-green-500 to-blue-600',
  },
  {
    id: 4,
    title: 'Best Student Project Award',
    description: 'Received the best student project award for developing a machine learning model for predicting student performance.',
    date: 'December 2023',
    type: 'Academic',
    icon: Award,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 5,
    title: 'Tech Conference Speaker',
    description: 'Invited speaker at LocalTech Conference 2024, presented on "Modern Web Development Practices for Students".',
    date: 'February 2024',
    type: 'Speaking',
    icon: Star,
    color: 'from-indigo-500 to-purple-600',
  },
  {
    id: 6,
    title: 'Coding Bootcamp Mentor',
    description: 'Mentored 20+ junior developers in a local coding bootcamp, helping them transition into tech careers.',
    date: '2023 - Present',
    type: 'Mentorship',
    icon: Target,
    color: 'from-cyan-500 to-blue-600',
  },
]

export default function AchievementsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="achievements" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Achievements & Awards
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence, technical contributions, and community involvement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {achievement.type}
                      </Badge>
                      <div className="text-sm text-muted-foreground">{achievement.date}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-purple-600 transition-colors">
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}