"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-gray-200 dark:border-portfolio-accent/20 bg-gray-50 dark:bg-portfolio-deep-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">NK</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Crafting digital experiences with passion and precision.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/NithishKumarSl", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nithishkumarsl786", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nithishkumarsl786@gmail.com", label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group bg-white/50 dark:bg-portfolio-secondary-bg/50"
              >
                <social.icon className="h-5 w-5 text-portfolio-light-accent dark:text-gray-300 group-hover:text-portfolio-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="hover:bg-portfolio-primary/20 transition-all duration-300 text-portfolio-light-accent dark:text-gray-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-portfolio-accent/10 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
            © 2024 Nithish Kumar SL <Heart className="inline h-4 w-4 text-red-500" />. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
