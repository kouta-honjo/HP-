import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  {
    src: "/images/Hiro1.jpg",
    alt: "Hiro"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    alt: "Office Atmosphere"
  },
  {
    src: "/images/Ligare_v2.jfif",
    alt: "Ligare Logo",
    isLogo: true
  }
];

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }} // Slide in from right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }} // Slide out to left
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className={`relative overflow-hidden shadow-2xl ${images[currentIndex].isLogo ? 'w-[80%] h-[60%] bg-white/80 backdrop-blur-sm p-8 flex items-center justify-center' : 'w-full h-full'}`}>
             <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={`w-full h-full object-cover ${images[currentIndex].isLogo ? 'object-contain' : ''}`}
            />
            {/* Overlay for non-logo images to blend with theme */}
            {!images[currentIndex].isLogo && (
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent mix-blend-multiply" />
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Decorative elements behind */}
      <div className="absolute -z-10 top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}
