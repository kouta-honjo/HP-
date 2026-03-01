import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "DX支援",
    description: "デジタル技術を活用し、業務効率化や新たな価値創造をサポートします。",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "フードロス削減",
    description: "廃棄食材の有効活用システムなど、持続可能な食の未来をデザインします。",
    icon: "🥗",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "産学連携活動",
    description: "大学と地域・企業をつなぎ、新しいイノベーションを生み出します。",
    icon: "🤝",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
  },
];

export function Service() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              提供サービス
            </h2>
          </motion.div>

          <div className="grid gap-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white overflow-hidden border-b border-slate-100 last:border-b-0`}
              >
                {/* Image Side */}
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                   <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                </div>

                {/* Content Side */}
                <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white relative z-20">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Button variant="outline" className="w-fit rounded-none border-slate-200 hover:bg-slate-50">
                    More Details <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
