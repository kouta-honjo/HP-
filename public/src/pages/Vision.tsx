import { motion } from "motion/react";
import { visionData } from "@/content/visionData";

export function Vision() {
  return (
    <main className="pt-20">
      {/* Vision Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container-fluid mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Image Side */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="lg:w-7/12 relative h-[400px] lg:h-auto overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                alt="Vision" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/20 mix-blend-multiply" />
            </motion.div>

            {/* Right Content Side with Diagonal Cut */}
            <div className="lg:w-5/12 relative bg-[#E0F2F1] lg:-ml-24 z-10 flex items-center">
              {/* Diagonal Shape for Desktop */}
              <div 
                className="hidden lg:block absolute top-0 bottom-0 -left-24 w-48 bg-[#E0F2F1] z-10"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} 
              />
              
              <div className="p-12 lg:p-20 w-full relative z-20">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span className="text-slate-500 font-mono text-sm tracking-[0.2em] uppercase mb-6 block">
                    {visionData.vision.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
                    {visionData.vision.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {visionData.vision.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600 blur-[100px]" />
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600 blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Our Mission
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {visionData.mission.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Number/Line Decoration */}
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-700 group-hover:bg-blue-500 transition-colors duration-500">
                  <div className="absolute top-2 left-[-3px] w-[7px] h-[7px] rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-bold leading-snug group-hover:text-blue-200 transition-colors duration-300">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
