"use client"

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { ExternalLink, Calendar } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    credentialId: 'AWS-DA-12345',
    description: 'Demonstrates proficiency in developing and maintaining applications on the AWS platform.',
    skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3'],
    verifyUrl: '#',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=80&h=80&fit=crop',
  },
  {
    id: 2,
    title: 'Google Cloud Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'January 2024',
    credentialId: 'GCP-PCD-67890',
    description: 'Validates skills in designing, building, and deploying applications on Google Cloud Platform.',
    skills: ['Cloud Functions', 'Cloud Storage', 'Kubernetes', 'Cloud SQL'],
    verifyUrl: '#',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop',
  },
  {
    id: 3,
    title: 'Meta Frontend Developer Professional Certificate',
    issuer: 'Meta (Facebook)',
    date: 'November 2023',
    credentialId: 'META-FE-11111',
    description: 'Comprehensive program covering modern frontend development practices and React ecosystem.',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Figma'],
    verifyUrl: '#',
    logo: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=80&h=80&fit=crop',
  },
  {
    id: 4,
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'September 2023',
    credentialId: 'MONGO-DEV-22222',
    description: 'Demonstrates expertise in MongoDB database design, development, and administration.',
    skills: ['MongoDB', 'Aggregation', 'Indexing', 'Schema Design'],
    verifyUrl: '#',
    logo: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=80&h=80&fit=crop',
  },
  {
    id: 5,
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'July 2023',
    credentialId: 'DOCKER-CA-33333',
    description: 'Validates foundational Docker skills including containerization and orchestration.',
    skills: ['Docker', 'Containerization', 'Docker Compose', 'Kubernetes'],
    verifyUrl: '#',
    logo: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=80&h=80&fit=crop',
  },
]

export default function CertificationsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Certifications & Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and completed courses that validate my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-2 hover:border-purple-200 dark:hover:border-purple-800 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center p-2">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-purple-600 transition-colors">
                        {cert.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-muted-foreground">
                        ID: {cert.credentialId}
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Verify
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}