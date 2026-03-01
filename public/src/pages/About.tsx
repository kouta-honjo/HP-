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

export function About() {
  return (
    <main className="pt-20">
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Image Side */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Content Side */}
            <div className="lg:w-1/2 relative bg-[#E0F2F1] lg:-ml-24 z-10 flex items-center">
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
                    About Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 leading-tight">
                    大学と企業をつなげる<br />
                    広大発異才集団
                  </h2>
                  <div className="mb-10">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      Ligareは“繋ぐ”という意味のラテン語に由来しています。
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      従来のシステムで埋もれていた企業、学生、レガシーな価値を繋げ、
                      これまで実現できなかった価値創出を支援します。
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2">Company Name</h3>
                        <p className="text-slate-600">株式会社Ligare</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2">Established</h3>
                        <p className="text-slate-600">2024年4月</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2">Location</h3>
                        <p className="text-slate-600">広島県東広島市</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              Members
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              メンバー紹介
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "前野 晃汰",
                role: "代表 / CEO",
                desc: "事業戦略と営業統括を担当。驚異的な行動力で地域と企業をつなぐロールモデルを創出します。",
                image: "/images/前野.png"
              },
              {
                name: "水野 光世",
                role: "副代表 / COO",
                desc: "事業戦略とブランド設計、デザインを担当。伝わる表現と使いやすさを両立したデジタルコミュニケーションを実現します。",
                image: "/images/水野.png"
              },
              {
                name: "本庄 晃汰",
                role: "CSO / Project Manager",
                desc: "事業戦略とDX案件の進行管理を担当。課題発見から運用まで、現場目線で徹底して伴走します。",
                image: "/images/本庄.png"
              },
              {
                name: "池田 有之介",
                role: "CTO / Technical Advisor",
                desc: "驚異的な技術スタックにより、3歩先のDXを実現できます。",
                image: "/images/池田.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] bg-slate-200 mb-6 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
                className="group cursor-pointer flex flex-col h-full bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden aspect-video mb-6 bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-6 pb-6 flex flex-col flex-grow">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
