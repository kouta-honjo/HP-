import { HeroImageSlider } from "@/components/HeroImageSlider";
import { HeroBackground } from "@/components/HeroBackground";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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

const newsItems = [
  { 
    date: "2026.02.10", 
    category: "Release", 
    title: "コーポレートサイトをリニューアルしました。",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    date: "2026.01.26", 
    category: "Service", 
    title: "新サービスの提供を開始しました。",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    date: "2025.12.18", 
    category: "Info", 
    title: "年末年始休業のお知らせ",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    date: "2025.11.05", 
    category: "Release", 
    title: "デザインアワード2025を受賞しました。",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
  },
  { 
    date: "2025.10.01", 
    category: "Info", 
    title: "オフィス移転のお知らせ",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    date: "2025.09.15", 
    category: "Media", 
    title: "Webメディアに掲載されました。",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
  },
];

export function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <HeroBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-10 text-slate-900">
                テクノロジーで、<br />
                ヒト、モノ、体験を<br className="md:hidden" />
                <motion.span
                  className="inline-block text-blue-600 relative cursor-pointer mx-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Link to="/vision" className="relative z-10 font-serif italic pr-1">Ligare</Link>
                  <motion.span
                    className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/60 -z-10 rounded-sm"
                    whileHover={{ height: "100%", bottom: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.span>
                する
              </h1>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 h-14 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 rounded-none" asChild>
                  <Link to="/works">View Works <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 h-14 rounded-full border-slate-200 hover:bg-slate-50 text-slate-900 bg-white/50 backdrop-blur-sm rounded-none" asChild>
                  <Link to="/service">Our Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Image Slider */}
            <div className="hidden lg:block relative h-full min-h-[500px]">
              <HeroImageSlider />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
        </motion.div>
      </section>

      {/* Vision Section (formerly About) - Redesigned with Diagonal Split */}
      <section className="py-0 relative overflow-hidden bg-white">
        <div className="container-fluid mx-auto">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Image Side */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="lg:w-7/12 relative h-[400px] lg:h-auto overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team meeting" 
                className="absolute inset-0 w-full h-full object-cover"
              />
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
                    About Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 leading-tight">
                    大学と企業をつなげる<br />
                    広大発異才集団
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Ligareは"繋ぐ"という意味のラテン語に由来しています。
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-10">
                    従来のシステムで埋もれていた企業、学生、レガシーな価値を繋げ、
                    これまで実現できなかった価値創出を支援します。
                  </p>
                  <Link to="/vision" className="inline-flex items-center text-slate-800 font-medium hover:opacity-70 transition-opacity border-b border-slate-800 pb-1">
                    私たちについて <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section - Redesigned based on reference */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* Left Side - Visual & Main Text */}
          <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-full bg-slate-900 flex items-center">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Service Background" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
            </div>
            
            <div className="relative z-10 p-12 lg:p-20 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-orange-400 tracking-widest uppercase">
                  Service
                </h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
                  HumanityとTechnologyで、<br />
                  ビジネスの課題を解決する。
                </h3>
                <p className="text-lg text-slate-300 leading-loose">
                  私たちは、Web制作、AI活用支援、コンサルティングの3つの柱で、
                  お客様のビジネスを加速させるパートナーです。
                  課題発見から制作、運用までを解決まで支援し、
                  ただデジタル技術を導入するだけでなく、
                  その先にある「未来」を共に創り上げます。
                </p>
              </motion.div>
            </div>

            {/* Diagonal Shape Overlay - Right side covering the image */}
            <div 
              className="hidden lg:block absolute top-0 bottom-0 -right-1 w-32 bg-slate-50 z-20"
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 100% 0)" }} 
            />
          </div>

          {/* Right Side - Service List */}
          <div className="lg:w-1/2 py-12 px-6 lg:px-20 flex flex-col justify-center bg-slate-50 relative z-10">
            {/* Diagonal Shape for Mobile (Top) */}
            <div 
              className="lg:hidden absolute -top-16 left-0 right-0 h-16 bg-slate-50 z-20"
              style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} 
            />

            <div className="space-y-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  className="group bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-stretch"
                >
                  <div className="w-full sm:w-48 aspect-video sm:aspect-auto relative overflow-hidden flex-shrink-0 bg-slate-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2 block">
                      Service {i + 1}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link to="/service" className="flex items-center text-slate-400 group-hover:text-slate-900 transition-colors">
                      <span className="text-xs font-bold mr-2">MORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-end">
              <Link to="/service" className="group inline-flex items-center text-slate-600 font-medium hover:text-slate-900 transition-colors border-b border-slate-300 hover:border-slate-900 pb-1">
                サービス一覧を見る 
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Works</h2>
            </div>
            <Button variant="ghost" className="hidden md:flex text-slate-600 hover:text-blue-600" asChild>
              <Link to="/works">View All Works <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="group relative aspect-[4/3] overflow-hidden bg-slate-100 cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                    <div className="w-10 h-[1px] bg-white/50 mb-4"></div>
                    <p className="text-white/80 text-xs font-mono mb-2 tracking-wider uppercase">{work.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{work.title}</h3>
                    <p className="text-white/60 text-sm line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-b border-slate-200 py-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Contact Us</h2>
              <p className="text-slate-600">
                プロジェクトのご相談、お見積りなど、お気軽にお問い合わせください。
              </p>
            </div>
            <Button size="lg" className="text-lg px-12 h-14 bg-slate-900 hover:bg-slate-800 text-white shadow-none rounded-none" asChild>
              <Link to="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section - Moved to bottom */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex justify-between items-end"
          >
            <div>
              <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                News
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                お知らせ
              </h2>
            </div>
            <Button variant="ghost" className="hidden md:flex text-slate-600 hover:text-blue-600" asChild>
              <Link to="/news">View All News <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-900 uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-slate-400 font-mono text-xs mb-3 block">{item.date}</span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4 line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center text-slate-400 text-sm group-hover:text-blue-600 transition-colors">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Button variant="outline" className="w-full rounded-none border-slate-200" asChild>
              <Link to="/news">View All News</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
