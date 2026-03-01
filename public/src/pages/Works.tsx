import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const works = [
  {
    title: "広島大学駐車場管理システム",
    category: "DX",
    description: "広島大学の駐車場の混雑状況を可視化するシステムを構築しました。",
    image: "/images/広大駐車場管理システム.png",
  },
  {
    title: "広大COOP食堂 フードロス対策",
    category: "Food Loss",
    description: "廃棄食材を学生に提供し、廃棄を50％削減。300人にアプリを提供しました。",
    image: "/images/廃棄食材マッチング.png",
  },
  {
    title: "JA全農広島 × マルシェ",
    category: "Collaboration",
    description: "産学連携活動としてマルシェを開催し、完売を達成しました。",
    image: "/images/JA全農マルシェ.png",
  },
  {
    title: "みかん収穫支援",
    category: "HR Support",
    description: "農業に興味がある学生とマッチングし、みかんを大量に収穫しました。",
    image: "/images/ミカン収穫.png",
  },
];

export function Works() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                Works
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Works
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10" />
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 inline-block">
                      <ArrowRight className="w-5 h-5 text-slate-900" />
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{work.title}</h3>
                <p className="text-slate-500 font-mono text-sm">{work.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
