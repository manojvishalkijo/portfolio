"use client"

import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { ImageWithFallback } from '../figma/ImageWithFallback'

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.',
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'The Future of Web Development: AI-Powered Coding Tools',
    excerpt: 'Exploring how AI tools like GitHub Copilot and ChatGPT are transforming the way developers write code and the implications for the future.',
    date: 'March 8, 2024',
    readTime: '6 min read',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Mastering CSS Grid and Flexbox for Modern Layouts',
    excerpt: 'A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox, with practical examples and real-world use cases.',
    date: 'February 28, 2024',
    readTime: '10 min read',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
    featured: false,
  },
  {
    id: 4,
    title: 'Database Design Patterns for Web Applications',
    excerpt: 'Understanding different database design patterns, when to use SQL vs NoSQL databases, and optimizing queries for better performance.',
    date: 'February 20, 2024',
    readTime: '12 min read',
    category: 'Database',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop',
    featured: true,
  },
]

export default function BlogSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="blog" className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Blog & Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {post.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      Featured
                    </Badge>
                  )}
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8 py-3 border-2 hover:bg-purple-50 dark:hover:bg-purple-900/20"
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  )
}