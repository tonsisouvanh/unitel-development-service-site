import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const currentHash = routerState.location.hash;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    // { name: "Technologies", href: "/#technologies" },
    { name: "Process", href: "/#process" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    const [path, hash] = href.split("#");
    return currentPath === path && (hash ? currentHash === `#${hash}` : true);
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-color-1/80 backdrop-blur-md shadow-md dark:bg-gray-900/80"
          : "bg-color-1"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <motion.div className="w-[50px] h-[50px]">
            <img
              src="/assets/images/logo-white-bg.png"
              alt="Unitel logo"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const [to, hash] = link.href.split("#");
            return (
              <Link
                key={link.name}
                to={to}
                hash={hash}
                className={`text-sm font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4">
          <Button className="bg-white text-color-2 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="flex md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {/* <AnimatePresence> */}
      {isMenuOpen && (
        <motion.div
          // initial={{ opacity: 0, height: 0 }}
          // animate={{ opacity: 1, height: "auto" }}
          // exit={{ opacity: 0, height: 0 }}
          // transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="flex flex-col space-y-4 p-4 bg-white shadow-md dark:bg-gray-900">
            {navLinks.map((link) => (
              <div>
                <Link
                  to={link.href.split("#")[0]}
                  hash={link.href.split("#")[1]}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-color-1"
                      : "text-color-2 hover:text-color-1"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div>
              <Link to="/" hash="contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-color-1 text-white hover:bg-color-1/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-color-1/20">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </motion.header>
  );
}
