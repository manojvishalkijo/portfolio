import { ThemeProvider } from './components/ThemeProvider'
import Navigation from './components/Navigation'
import BubbleBackground from './components/BubbleBackground'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import AchievementsSection from './components/sections/AchievementsSection'
import CertificationsSection from './components/sections/CertificationsSection'
import ContactSection from './components/sections/ContactSection'
import { Toaster } from './components/ui/sonner'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        {/* Global Bubble Background */}
        <BubbleBackground />
        
        <Navigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <TestimonialsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-purple-500/20 bg-gradient-to-r from-purple-900/10 to-blue-900/10 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 John Doe. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-purple-400 mt-2">
              Made with ❤️ for sharing knowledge and connecting with the tech community.
            </p>
          </div>
        </footer>

        <Toaster />
      </div>
    </ThemeProvider>
  )
}