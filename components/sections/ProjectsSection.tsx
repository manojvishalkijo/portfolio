"use client"

import { motion } from 'motion/react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { 
  ExternalLink, 
  Github, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Zap, 
  Star,
  Play,
  Eye,
  GitBranch,
  Terminal
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
    category: 'Full Stack',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
    status: 'Production',
    codePreview: `function PaymentProcessor() {
  const [loading, setLoading] = useState(false);
  
  const handlePayment = async (amount) => {
    setLoading(true);
    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: window.location.origin
        }
      });
      return result;
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <PaymentForm onSubmit={handlePayment} />
  );
}`,
    metrics: {
      lines: '15,420',
      commits: '247',
      contributors: '3'
    },
    highlights: ['Real-time inventory', 'Stripe integration', 'Admin dashboard', 'Mobile responsive']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    category: 'Frontend',
    technologies: ['React', 'TypeScript', 'Socket.io', 'Tailwind'],
    github: '#',
    live: '#',
    featured: true,
    status: 'Active',
    codePreview: `interface Task {
  id: string;
  title: string;
  status: 'todo' | 'progress' | 'done';
  assignee: User;
  dueDate: Date;
}

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const newTasks = reorderTasks(
      tasks,
      result.source,
      result.destination
    );
    
    setTasks(newTasks);
    updateTaskOrder(newTasks);
  };
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <TaskColumns tasks={tasks} />
    </DragDropContext>
  );
};`,
    metrics: {
      lines: '8,932',
      commits: '156',
      contributors: '2'
    },
    highlights: ['Drag & drop', 'Real-time sync', 'Team collaboration', 'Progress tracking']
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    category: 'Frontend',
    technologies: ['Vue.js', 'API Integration', 'Charts.js'],
    github: '#',
    live: '#',
    featured: false,
    status: 'Completed',
    codePreview: `export class WeatherService {
  private apiKey = process.env.WEATHER_API_KEY;
  private baseUrl = 'https://api.openweathermap.org/data/2.5';
  
  async getCurrentWeather(lat: number, lon: number) {
    const response = await fetch(
      \`\${this.baseUrl}/weather?lat=\${lat}&lon=\${lon}&appid=\${this.apiKey}&units=metric\`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    return response.json();
  }
  
  async getForecast(city: string, days: number = 5) {
    const response = await fetch(
      \`\${this.baseUrl}/forecast?q=\${city}&cnt=\${days * 8}&appid=\${this.apiKey}\`
    );
    
    return response.json();
  }
}`,
    metrics: {
      lines: '5,234',
      commits: '89',
      contributors: '1'
    },
    highlights: ['Location-based', 'Interactive maps', 'Weather analytics', 'Responsive design']
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking.',
    category: 'Full Stack',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
    featured: true,
    status: 'Active',
    codePreview: `class SocialMediaAggregator {
  constructor(private redis: Redis, private db: Database) {}
  
  async aggregateMetrics(userId: string, timeframe: string) {
    const cacheKey = \`metrics:\${userId}:\${timeframe}\`;
    
    // Check cache first
    const cached = await this.redis.get(cacheKey);
    if (cached) return JSON.parse(cached);
    
    // Aggregate from multiple platforms
    const [twitter, instagram, facebook] = await Promise.all([
      this.getTwitterMetrics(userId, timeframe),
      this.getInstagramMetrics(userId, timeframe),
      this.getFacebookMetrics(userId, timeframe)
    ]);
    
    const aggregated = this.combineMetrics(twitter, instagram, facebook);
    
    // Cache for 1 hour
    await this.redis.setex(cacheKey, 3600, JSON.stringify(aggregated));
    
    return aggregated;
  }
}`,
    metrics: {
      lines: '23,567',
      commits: '412',
      contributors: '4'
    },
    highlights: ['Multi-platform', 'Real-time analytics', 'Post scheduling', 'Engagement tracking']
  },
  {
    id: 5,
    title: 'AI Chatbot Interface',
    description: 'An intelligent chatbot interface with natural language processing, conversation history, and customizable responses.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React', 'Flask'],
    github: '#',
    live: '#',
    featured: false,
    status: 'Beta',
    codePreview: `import tensorflow as tf
from transformers import AutoTokenizer, AutoModel

class ChatbotEngine:
    def __init__(self, model_path: str):
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModel.from_pretrained(model_path)
        self.conversation_history = []
    
    def generate_response(self, user_input: str) -> str:
        # Tokenize input with conversation context
        context = self.format_conversation_context()
        full_input = f"{context}User: {user_input}\\nBot:"
        
        inputs = self.tokenizer.encode(full_input, return_tensors='pt')
        
        with tf.device('/GPU:0'):
            outputs = self.model.generate(
                inputs,
                max_length=512,
                temperature=0.7,
                pad_token_id=self.tokenizer.eos_token_id
            )
        
        response = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        self.conversation_history.append((user_input, response))
        
        return response`,
    metrics: {
      lines: '12,890',
      commits: '203',
      contributors: '2'
    },
    highlights: ['NLP integration', 'Conversation memory', 'Custom responses', 'ML training']
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects, skills, and experience with modern design and smooth animations.',
    category: 'Frontend',
    technologies: ['React', 'Tailwind', 'Framer Motion'],
    github: '#',
    live: '#',
    featured: false,
    status: 'Live',
    codePreview: `const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {children}
    </motion.section>
  );
};`,
    metrics: {
      lines: '6,789',
      commits: '134',
      contributors: '1'
    },
    highlights: ['Smooth animations', 'Responsive design', 'Modern UI/UX', 'Performance optimized']
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML']

const statusColors = {
  'Production': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Active': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Beta': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'Completed': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Live': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [showCode, setShowCode] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-bold"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my development work, featuring code snippets and technical details
          </p>

          {/* Enhanced Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 relative overflow-hidden border ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-purple-500/50 shadow-lg shadow-purple-500/30' 
                    : 'bg-purple-900/20 text-purple-200 border-purple-500/30 hover:bg-purple-900/30 hover:border-purple-500/50'
                }`}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="h-full bg-gradient-to-br from-purple-900/10 to-blue-900/10 border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-sm overflow-hidden group-hover:shadow-2xl group-hover:shadow-purple-500/20 hover-rotate">
                {/* Enhanced Header */}
                <CardHeader className="relative pb-4">
                  {/* Status and Featured indicators */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`${statusColors[project.status as keyof typeof statusColors]} border text-xs font-medium px-3 py-1`}>
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <motion.div
                        className="flex items-center gap-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium"
                        animate={{ boxShadow: ['0 0 0 0 rgba(139, 92, 246, 0.4)', '0 0 0 4px rgba(139, 92, 246, 0)', '0 0 0 0 rgba(139, 92, 246, 0)'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Star className="w-3 h-3" />
                        Featured
                      </motion.div>
                    )}
                  </div>

                  <CardTitle className="flex items-center gap-3 group-hover:text-purple-400 transition-colors duration-300">
                    <motion.div 
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center"
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category === 'Full Stack' ? <Database className="w-5 h-5 text-white" /> :
                       project.category === 'Frontend' ? <Globe className="w-5 h-5 text-white" /> :
                       project.category === 'AI/ML' ? <Zap className="w-5 h-5 text-white" /> : 
                       <Code className="w-5 h-5 text-white" />}
                    </motion.div>
                    <div>
                      <div className="text-lg leading-tight">{project.title}</div>
                      <div className="text-sm text-purple-300 font-normal">{project.category}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Code Preview Toggle */}
                  <div className="relative">
                    <motion.button
                      onClick={() => setShowCode(showCode === project.id ? null : project.id)}
                      className="w-full flex items-center justify-between p-3 bg-black/30 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="flex items-center gap-2 text-purple-300">
                        <Terminal className="w-4 h-4" />
                        View Code Preview
                      </span>
                      <motion.div
                        animate={{ rotate: showCode === project.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Eye className="w-4 h-4 text-purple-400" />
                      </motion.div>
                    </motion.button>

                    {/* Code Preview */}
                    {showCode === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-black/50 rounded-xl p-4 border border-purple-500/20 overflow-hidden"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-purple-300 font-mono">app.tsx</span>
                        </div>
                        <pre className="text-xs text-purple-200 font-mono leading-relaxed overflow-x-auto">
                          <code>{project.codePreview}</code>
                        </pre>
                      </motion.div>
                    )}
                  </div>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-purple-900/20 rounded-xl border border-purple-500/20">
                        <div className="text-sm font-semibold text-purple-300">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-purple-400">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded-md border border-purple-500/20"
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                      >
                        <Badge variant="outline" className="bg-purple-500/10 text-purple-300 border-purple-500/30 hover:bg-purple-500/20 transition-colors">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1"
                    >
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-4 rounded-2xl border-2 border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50 font-medium"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}