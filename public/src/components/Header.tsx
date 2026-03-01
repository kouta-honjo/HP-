import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "TOP", href: "/" },
  { name: "Vision", href: "/vision" },
  { name: "Service", href: "/service" },
  { name: "Works", href: "/works" },
  { name: "About Us", href: "/about" },
  { name: "News", href: "/news" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 z-50 w-full"
        initial={false}
        animate={{
          height: isScrolled ? "auto" : "160px",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="relative w-full h-full"
          animate={{
            backgroundColor: isScrolled ? "rgba(255,255,255,0)" : "rgba(255,255,255,0.8)",
            backdropFilter: isScrolled ? "none" : "blur(12px)",
            borderBottom: isScrolled ? "none" : "1px solid rgba(0,0,0,0.05)"
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto h-full px-6 flex items-center justify-between">
            {/* Logo & Menu Trigger Container */}
            <motion.div
              layout
              className={`flex items-center gap-4 ${
                isScrolled
                  ? "bg-white/90 backdrop-blur-md shadow-lg border border-slate-100"
                  : ""
              }`}
              style={{ 
                originX: 0, 
                originY: 0,
                padding: isScrolled ? "8px 16px" : "0px",
                marginTop: isScrolled ? "12px" : "0px",
                borderRadius: "0px"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to="/" className="flex items-center">
                <img
                  src="/images/Ligare_v2.jfif"
                  alt="Ligare"
                  className="object-contain flex-shrink-0"
                  style={{ width: "128px", height: "128px", minWidth: "128px", minHeight: "128px", maxWidth: "none" }}
                />
              </Link>

              {/* Menu Trigger */}
              {isScrolled && (
                <motion.button
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-2 text-sm font-bold tracking-widest text-slate-800 hover:text-slate-600 border-l border-slate-200 pl-4 ml-2 whitespace-nowrap"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="w-5 h-5" />
                  MENU
                </motion.button>
              )}
            </motion.div>

            {/* Desktop Nav (Hidden when scrolled) */}
            <motion.nav 
              className="hidden md:flex items-center gap-8"
              animate={{ 
                opacity: isScrolled ? 0 : 1,
                pointerEvents: isScrolled ? "none" : "auto"
              }}
              transition={{ duration: 0.8 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="sm" className="bg-slate-900 hover:bg-slate-800 text-white px-6 rounded-none" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </motion.nav>

            {/* Mobile Menu Toggle (Visible only when NOT scrolled on mobile) */}
            <motion.button
              className="md:hidden p-2 text-slate-800"
              animate={{ opacity: isScrolled ? 0 : 1, pointerEvents: isScrolled ? "none" : "auto" }}
              transition={{ duration: 0.8 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Side Drawer Menu - Slide from Left */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="fixed inset-0 z-[55] bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 left-0 bottom-0 z-[60] w-full md:w-[400px] bg-white shadow-2xl flex flex-col p-12"
            >
              <div className="flex items-center justify-between mb-16">
                <div className="flex items-center">
                  <img src="/images/Ligare_v2.jfif" alt="Ligare" className="object-contain" style={{ width: "128px", height: "128px", maxWidth: "none" }} />
                </div>
                <button
                  className="text-slate-800 hover:text-slate-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-bold text-slate-800 hover:text-blue-600 transition-colors tracking-tight flex items-center gap-4 group"
                    >
                      <span className="w-0 group-hover:w-4 h-[2px] bg-blue-600 transition-all duration-300" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                 <Button size="lg" className="w-full text-lg h-16 bg-slate-900 text-white hover:bg-slate-800 rounded-none" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
