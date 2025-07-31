"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Play, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const games = [
  {
    id: 1,
    title: "Rock Paper Scissors",
    description: "Classic game of Rock Paper Scissors with AI opponent. Test your luck and strategy against the computer.",
    image: "/placeholder.svg?height=400&width=600&text=Rock Paper Scissors",
    technologies: ["React", "TypeScript", "CSS", "Game Logic"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Chess Game",
    description: "Interactive chess game with move validation, piece movement, and game state management.",
    image: "/placeholder.svg?height=400&width=600&text=Chess Game",
    technologies: ["React", "TypeScript", "Chess.js", "Game Logic"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Snake Game",
    description: "Classic Snake game with growing snake, food collection, and collision detection.",
    image: "/placeholder.svg?height=400&width=600&text=Snake Game",
    technologies: ["React", "TypeScript", "Canvas API", "Game Loop"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description: "Simple but engaging Tic Tac Toe game with AI opponent and win detection.",
    image: "/placeholder.svg?height=400&width=600&text=Tic Tac Toe",
    technologies: ["React", "TypeScript", "Game Logic", "AI"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Memory Card Game",
    description: "Test your memory with this card matching game featuring beautiful animations.",
    image: "/placeholder.svg?height=400&width=600&text=Memory Game",
    technologies: ["React", "TypeScript", "CSS Animations", "Game Logic"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: false,
  },
  {
    id: 6,
    title: "2048 Game",
    description: "Popular sliding tile puzzle game where you combine tiles to reach 2048.",
    image: "/placeholder.svg?height=400&width=600&text=2048 Game",
    technologies: ["React", "TypeScript", "Game Logic", "Local Storage"],
    github: "https://github.com/NithishKumarSl",
    playLink: "#",
    featured: false,
  },
]

export default function Games() {
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
              <span className="text-white">Interactive </span>
              <span className="gradient-text">Games</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take a break and enjoy these interactive games I&apos;ve built. From classic games to modern puzzles, there&apos;s something for everyone.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Games Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-white/70 dark:bg-portfolio-secondary-bg/70"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-deep-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                        <a href={game.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white" asChild>
                        <a href={game.playLink} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  {game.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-portfolio-primary text-white text-xs font-bold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-portfolio-light-accent dark:text-white mb-2">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {game.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-portfolio-light-accent/10 dark:bg-portfolio-accent/10 text-portfolio-primary dark:text-portfolio-highlight rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {game.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{game.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 