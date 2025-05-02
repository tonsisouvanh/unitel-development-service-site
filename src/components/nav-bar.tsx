import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Technologies", href: "/#technologies" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];
  console.log(isScrolled);
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-color-1/80 backdrop-blur-md shadow-md dark:bg-gray-900/80"
          : "bg-color-1"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[50px] h-[50px]"
          >
            <img
              src={"/assets/images/logo-white-bg.png"}
              alt="Unitel logo"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, index) => {
            const [to, hash] = link.href.split("#");
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={to}
                  hash={hash}
                  className="text-sm text-white font-medium hover:text-color-1 transition-colors duration-200 dark:text-white dark:hover:text-color-1"
                  activeProps={{
                    className: "text-1",
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>
        <div className="hidden md:flex gap-4">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          > */}
          {/* <Link to="/" hash="#"> */}
          <Button className="bg-white text-color-2 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
            Get Started
          </Button>
          {/* </Link> */}
          {/* </motion.div> */}
        </div>
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-color-2 dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-color-2 dark:text-white" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 p-4 bg-white shadow-md dark:bg-gray-900">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-color-2 hover:text-color-1 transition-colors duration-200 dark:text-white dark:hover:text-color-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <Link
                  to="/"
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button className="w-full bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
                    Get Started
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
