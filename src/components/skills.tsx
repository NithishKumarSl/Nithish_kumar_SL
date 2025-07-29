"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Database, Cloud, Server, Smartphone, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "NestJS", "Express", "FastAPI", "GraphQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "VS Code", "Figma", "Postman", "Jest", "Cypress"],
    color: "from-teal-500 to-green-500",
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden bg-white dark:bg-portfolio-secondary-bg">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #A55B4B 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #DCA06D 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-portfolio-light-accent dark:text-white">My </span>
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital
            experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 group hover:shadow-2xl transition-all duration-500 bg-white/50 dark:bg-portfolio-deep-bg/30"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-light-accent dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center p-3 rounded-lg bg-gray-50/80 dark:bg-portfolio-deep-bg/20 hover:bg-portfolio-light-accent/5 dark:hover:bg-portfolio-accent/10 transition-all duration-300 cursor-pointer group/skill"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-portfolio-primary to-portfolio-highlight mr-3 group-hover/skill:scale-150 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover/skill:text-portfolio-highlight transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Skills Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex animate-pulse">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex space-x-8">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "AWS",
                    "Docker",
                    "PostgreSQL",
                    "MongoDB",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="text-2xl font-bold text-portfolio-highlight/30 dark:text-portfolio-highlight/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
