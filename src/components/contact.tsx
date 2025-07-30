"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Send, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" ref={ref} className="py-20 relative bg-white dark:bg-portfolio-secondary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-portfolio-light-accent dark:text-white">Get In </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-portfolio-light-accent dark:text-white mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I&apos;m always interested in hearing about new opportunities, creative projects, or just having a chat about
                technology and development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Primary Email", value: "nithishkumarsl786@gmail.com", href: "mailto:nithishkumarsl786@gmail.com" },
                { icon: Mail, label: "Alternative Email", value: "nithishkumarsl789@gmail.com", href: "mailto:nithishkumarsl789@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 6385470340", href: "tel:+916385470340" },
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 glass-effect rounded-xl hover:bg-portfolio-light-accent/5 dark:hover:bg-portfolio-accent/10 transition-all duration-300 group bg-gray-50/80 dark:bg-portfolio-deep-bg/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-portfolio-primary to-portfolio-highlight rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                    <p className="text-portfolio-light-accent dark:text-white font-medium">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8"
            >
              <h4 className="text-lg font-semibold text-portfolio-light-accent dark:text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/NithishKumarSl", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/nithishkumarsl786", label: "LinkedIn" },
                  { icon: Instagram, href: "https://www.instagram.com/nithishkumar.sl?igsh=cWhwM3U4a2hsYmM0", label: "Instagram Personal" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group bg-gray-50/80 dark:bg-portfolio-deep-bg/30"
                  >
                    <social.icon className="h-6 w-6 text-portfolio-light-accent dark:text-gray-300 group-hover:text-portfolio-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
              
              {/* Business Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="pt-4"
              >
                <h4 className="text-lg font-semibold text-portfolio-light-accent dark:text-white mb-4">Business Instagram</h4>
                <motion.a
                  href="https://www.instagram.com/sln_art_work?igsh=amI0NDdoM2RucWgx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 p-3 glass-effect rounded-full hover:bg-portfolio-primary/20 transition-all duration-300 group bg-gray-50/80 dark:bg-portfolio-deep-bg/30"
                >
                  <Instagram className="h-6 w-6 text-portfolio-light-accent dark:text-gray-300 group-hover:text-portfolio-primary transition-colors duration-300" />
                  <span className="text-sm font-medium text-portfolio-light-accent dark:text-gray-300 group-hover:text-portfolio-primary transition-colors duration-300">
                    SLN Art Work
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-8 bg-gray-50/80 dark:bg-portfolio-deep-bg/30"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-portfolio-light-accent dark:text-white mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-portfolio-secondary-bg/50 border-gray-300 dark:border-portfolio-accent/30 focus:border-portfolio-primary dark:focus:border-portfolio-highlight"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-portfolio-light-accent dark:text-white mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80 dark:bg-portfolio-secondary-bg/50 border-gray-300 dark:border-portfolio-accent/30 focus:border-portfolio-primary dark:focus:border-portfolio-highlight"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-portfolio-light-accent dark:text-white mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-white/80 dark:bg-portfolio-secondary-bg/50 border-gray-300 dark:border-portfolio-accent/30 focus:border-portfolio-primary dark:focus:border-portfolio-highlight resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90 text-white glow-effect transition-all duration-300 font-semibold"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
