"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const allProjects = [
  // AI Projects
  {
    id: 1,
    title: "AI Bill Management Agent",
    description: "Multi-agent collaboration system for bill processing, expense categorization, and financial insights using AutoGen and Google Gemini.",
    image: "/placeholder.svg?height=400&width=600&text=AI Bill Management",
    technologies: ["AutoGen", "Google Gemini", "Streamlit", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Bill_Managing_Agent",
    category: "AI Projects",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Health Assistant",
    description: "Personalized health, diet, and fitness plan generation with specialized AI agents for comprehensive wellness planning.",
    image: "/placeholder.svg?height=400&width=600&text=Smart Health Assistant",
    technologies: ["AutoGen", "Google Gemini", "Jupyter", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Smart_Health_Assistant",
    category: "AI Projects",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Content Creation",
    description: "Reflection-based content refinement through collaborative AI agents for high-quality content creation and refinement.",
    image: "/placeholder.svg?height=400&width=600&text=Smart Content Creation",
    technologies: ["AutoGen", "Google Gemini", "Colab", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Smart_Content_Creation",
    category: "AI Projects",
    featured: false,
  },
  {
    id: 4,
    title: "EDA Multi-Agent System",
    description: "Automated exploratory data analysis with specialized agents for streamlined data analysis and reporting.",
    image: "/placeholder.svg?height=400&width=600&text=EDA Multi-Agent",
    technologies: ["AutoGen", "Google Gemini", "Jupyter", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/EDA_Multi-Agent_System",
    category: "AI Projects",
    featured: false,
  },
  {
    id: 5,
    title: "LangGraph Math & Q&A Agent",
    description: "Intelligent routing between general Q&A and mathematical calculations with custom mathematical functions.",
    image: "/placeholder.svg?height=400&width=600&text=LangGraph Math Agent",
    technologies: ["LangGraph", "LangChain", "Google Gemini", "Gradio"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Create_an_Agent_Using_LLM_and_Custom_Mathematical_Functions",
    category: "LangChain & LangGraph",
    featured: true,
  },
  {
    id: 6,
    title: "Multi-Agent RAG System",
    description: "Intelligent query routing between web search, RAG, and LLM reasoning for comprehensive research.",
    image: "/placeholder.svg?height=400&width=600&text=Multi-Agent RAG",
    technologies: ["LangGraph", "LangChain", "Google Gemini", "Streamlit"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Multi-Agent_RAG_System",
    category: "LangChain & LangGraph",
    featured: true,
  },
  {
    id: 7,
    title: "Personalized Education Assistant",
    description: "Sequential AI agents for personalized learning path generation with customized educational content.",
    image: "/placeholder.svg?height=400&width=600&text=Education Assistant",
    technologies: ["CrewAI", "Google Gemini", "Streamlit", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Personalized_Education_Assistant",
    category: "CrewAI Applications",
    featured: true,
  },
  {
    id: 8,
    title: "Automated Code Debugging Assistant",
    description: "AI-powered code analysis, static analysis, and intelligent suggestions for code quality improvement.",
    image: "/placeholder.svg?height=400&width=600&text=Code Debugging",
    technologies: ["Google Gemini", "Streamlit", "AST Analysis", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Automated_code_debugging_Assistant",
    category: "Streamlit Web Applications",
    featured: true,
  },
  {
    id: 9,
    title: "Financial Portfolio Manager",
    description: "Intelligent investment analysis and personalized financial planning with multi-agent collaboration.",
    image: "/placeholder.svg?height=400&width=600&text=Portfolio Manager",
    technologies: ["Multi-agent", "Google Gemini", "Streamlit", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Financial_Portfolio_Manager",
    category: "Streamlit Web Applications",
    featured: true,
  },
  {
    id: 10,
    title: "Intelligent Travel Assistant",
    description: "Live weather information, tourist attractions, and travel tips with real-time data integration.",
    image: "/placeholder.svg?height=400&width=600&text=Travel Assistant",
    technologies: ["LangChain", "Google Gemini", "Gradio", "WeatherAPI"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Building_an_intelligent_Travel_Assistant_AI",
    category: "Conversational AI & Travel",
    featured: true,
  },
  {
    id: 11,
    title: "Conversational AI for Competitor Analysis",
    description: "Retail competitor analysis with data visualization for business intelligence and market research.",
    image: "/placeholder.svg?height=400&width=600&text=Competitor Analysis",
    technologies: ["LangChain", "Search Tools", "Visualization", "Python"],
    github: "https://github.com/NithishKumarSl/Agentic_AI_Projects/tree/main/Creating-a-Conversational-AI",
    category: "Conversational AI & Travel",
    featured: false,
  },
]

const categories = [...new Set(allProjects.map(project => project.category))]

export default function AllProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-deep-bg text-gray-900 dark:text-white">
      <Navbar />
      {/* Header */}
      <div className="bg-gradient-to-r from-portfolio-primary to-portfolio-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">All </span>
              <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my projects showcasing expertise in AI, machine learning, web development, and modern technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                <span className="text-portfolio-light-accent dark:text-white">{category}</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects
                  .filter(project => project.category === category)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + index * 0.1 }}
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
                          </div>
                        </div>
                        {project.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-portfolio-primary text-white text-xs font-bold rounded-full">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-portfolio-light-accent dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                          {project.description}
                        </p>
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
                            <span className="px-2 py-1 text-gray-500 text-xs">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
} 