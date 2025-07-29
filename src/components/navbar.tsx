"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-portfolio-deep-bg/90 backdrop-blur-md border-b border-gray-200 dark:border-portfolio-accent/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold gradient-text">
            NK
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-portfolio-light-accent dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-highlight transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 hover:bg-portfolio-light-accent/10 dark:hover:bg-portfolio-accent/20"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-portfolio-highlight" />
              ) : (
                <Moon className="h-5 w-5 text-portfolio-light-accent" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:bg-portfolio-light-accent/10 dark:hover:bg-portfolio-accent/20"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-portfolio-highlight" />
              ) : (
                <Moon className="h-5 w-5 text-portfolio-light-accent" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="hover:bg-portfolio-light-accent/10 dark:hover:bg-portfolio-accent/20"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-portfolio-light-accent dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-portfolio-light-accent dark:text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-portfolio-deep-bg/95 backdrop-blur-md border-b border-gray-200 dark:border-portfolio-accent/30"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ x: 10 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-portfolio-light-accent dark:text-gray-300 hover:text-portfolio-primary dark:hover:text-portfolio-highlight transition-colors duration-300 font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
