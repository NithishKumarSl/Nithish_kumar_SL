"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-portfolio-deep-bg dark:via-portfolio-secondary-bg dark:to-portfolio-accent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-portfolio-highlight/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Nithish Kumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-portfolio-light-accent dark:text-gray-300 mb-8 font-semibold"
            >
              Software Developer & Full-Stack Builder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences with modern technologies. Passionate about creating scalable solutions and
              beautiful user interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-portfolio-primary hover:bg-portfolio-primary/90 text-white glow-effect transition-all duration-300 font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-portfolio-light-accent dark:border-portfolio-accent text-portfolio-light-accent dark:text-portfolio-accent hover:bg-portfolio-light-accent/10 dark:hover:bg-portfolio-accent/10 transition-all duration-300 font-semibold bg-transparent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-4 justify-center lg:justify-start mt-8"
            >
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full glass-effect hover:bg-portfolio-primary/20 transition-all duration-300 text-portfolio-light-accent dark:text-white"
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image/Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
              }}
              className="relative group"
              style={{ perspective: "1000px" }}
            >
              <div className="w-80 h-96 glass-effect rounded-2xl p-8 animate-float">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-primary/20 to-portfolio-highlight/20 rounded-xl flex items-center justify-center">
                  <div className="w-48 h-48 bg-portfolio-light-accent/20 dark:bg-portfolio-accent/30 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-bold gradient-text">NK</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-highlight rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-portfolio-primary rounded-full opacity-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
