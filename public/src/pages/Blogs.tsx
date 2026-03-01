import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Webデザインのトレンド2026",
    excerpt: "今年のWebデザインのトレンドについて解説します。ミニマリズムからマキシマリズムへの回帰など...",
    date: "2026.02.15",
    category: "Design",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "React 19の新機能について",
    excerpt: "React 19で導入された新しいフックやコンパイラの改善点について、実例を交えて紹介します。",
    date: "2026.01.20",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "リモートワークでのチームビルディング",
    excerpt: "分散型チームにおけるコミュニケーションの課題と、それを解決するためのツールや手法について。",
    date: "2025.12.10",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
];

export function Blogs() {
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
              Our Blogs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              ブログ
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative overflow-hidden aspect-video mb-6 bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-mono text-slate-400">{post.date}</span>
                    <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 uppercase tracking-wider">
                        {post.category}
                    </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm group-hover:underline decoration-blue-600 underline-offset-4">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
