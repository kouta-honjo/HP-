import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const newsItems = [
  { date: "2026.02.10", category: "Release", title: "コーポレートサイトをリニューアルしました。" },
  { date: "2026.01.26", category: "Service", title: "新サービスの提供を開始しました。" },
  { date: "2025.12.18", category: "Info", title: "年末年始休業のお知らせ" },
  { date: "2025.11.05", category: "Release", title: "デザインアワード2025を受賞しました。" },
  { date: "2025.10.01", category: "Info", title: "オフィス移転のお知らせ" },
];

export function News() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              News
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              お知らせ
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="border-t border-slate-200">
              {newsItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col md:flex-row md:items-center gap-4 py-6 border-b border-slate-200 hover:bg-slate-50 transition-colors px-4"
                >
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <span className="text-slate-500 font-mono text-sm">{item.date}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 group-hover:text-blue-600 transition-colors flex-grow">
                    {item.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
