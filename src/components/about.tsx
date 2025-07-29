"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Palette, Zap } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building scalable server-side applications with Node.js, Python, and various databases.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences with attention to detail and usability.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed, scalability, and excellent user experience.",
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 relative bg-gray-50 dark:bg-portfolio-deep-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-portfolio-light-accent dark:text-white">About </span>
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a love for creating digital experiences that make a difference.
            With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-portfolio-light-accent dark:text-white mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With over 3 years of experience in software development, I've worked on diverse projects ranging from
              e-commerce platforms to data visualization tools. My passion lies in solving complex problems and creating
              solutions that users love.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. When I'm not coding,
              you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "Python", "AWS"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-portfolio-highlight bg-white/50 dark:bg-portfolio-secondary-bg/50"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-6 group hover:bg-portfolio-light-accent/5 dark:hover:bg-portfolio-accent/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-highlight rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-portfolio-light-accent dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
