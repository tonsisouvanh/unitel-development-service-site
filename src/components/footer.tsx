"use client";

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-[#F5F5F5] dark:bg-gray-900 pt-16 overflow-hidden">
      {/* Wave SVG at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-1px]">
        <svg
          className="relative block w-full h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">Unitel</span>
            </Link>
            <p className="text-zinc-500 dark:text-zinc-400">
              Building innovative software solutions that transform businesses
              and drive growth.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-color-2 dark:text-[#F5F5F5]">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  hash="#services"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="#services"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="#services"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="#services"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="#services"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-color-2 dark:text-[#F5F5F5]">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  hash="#about"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  hash="#contact"
                  className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-color-2 dark:text-[#F5F5F5]">
              Newsletter
            </h3>
            <p className="text-zinc-500 dark:text-zinc-400">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-color-2 dark:border-zinc-700 dark:bg-gray-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#F97316] text-white rounded-md hover:bg-[#F97316]/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-700"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-zinc-500 md:text-left dark:text-zinc-400">
              © {currentYear} Unitel. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Terms
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Privacy
              </Link>
              <Link
                to="/"
                className="text-zinc-500 hover:text-color-2 transition-colors duration-200 dark:text-zinc-400 dark:hover:text-[#F5F5F5]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
