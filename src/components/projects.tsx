"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce Platform",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    image: "/placeholder.svg?height=400&width=600&text=Task Management App",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "AI-powered content creation platform with multiple templates, SEO optimization, and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600&text=AI Content Generator",
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description: "Modern real estate platform with property listings, virtual tours, and advanced search capabilities.",
    image: "/placeholder.svg?height=400&width=600&text=Real Estate Platform",
    technologies: ["Vue.js", "NestJS", "PostgreSQL", "AWS S3"],
    github: "#",
    live: "#",
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" ref={ref} className="py-20 relative bg-gray-50 dark:bg-portfolio-deep-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-portfolio-light-accent dark:text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise in full-stack development, modern design principles,
            and cutting-edge technologies.
          </p>
        </motion.div>

        {/* Featured Project Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="glass-effect rounded-3xl p-8 overflow-hidden bg-white/70 dark:bg-portfolio-secondary-bg/70">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={projects[currentProject].image || "/placeholder.svg"}
                    alt={projects[currentProject].title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-deep-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div
                key={`details-${currentProject}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-portfolio-light-accent dark:text-white mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      className="px-3 py-1 bg-portfolio-light-accent/10 dark:bg-portfolio-accent/20 text-portfolio-primary dark:text-portfolio-highlight rounded-full text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button
                    className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white glow-effect font-semibold"
                    asChild
                  >
                    <a href={projects[currentProject].live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-portfolio-light-accent dark:border-portfolio-accent text-portfolio-light-accent dark:text-portfolio-accent hover:bg-portfolio-light-accent/10 dark:hover:bg-portfolio-accent/10 font-semibold bg-transparent"
                    asChild
                  >
                    <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect hover:bg-portfolio-primary/20 bg-white/80 dark:bg-portfolio-secondary-bg/80"
          >
            <ChevronLeft className="h-6 w-6 text-portfolio-light-accent dark:text-white" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect hover:bg-portfolio-primary/20 bg-white/80 dark:bg-portfolio-secondary-bg/80"
          >
            <ChevronRight className="h-6 w-6 text-portfolio-light-accent dark:text-white" />
          </Button>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? "bg-portfolio-primary scale-125"
                    : "bg-gray-400 dark:bg-gray-600 hover:bg-portfolio-highlight"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-portfolio-secondary-bg/70"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-deep-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-portfolio-light-accent dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-portfolio-light-accent/10 dark:bg-portfolio-accent/10 text-portfolio-primary dark:text-portfolio-highlight rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
