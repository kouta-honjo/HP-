import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="text-blue-600 font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Contact Us
            </h2>
            <p className="text-slate-600 mb-12 leading-relaxed">
              制作のご依頼、ご相談、お見積もりなど、<br />
              お気軽にお問い合わせください。
            </p>
            <Button size="lg" className="text-lg px-12 h-16 bg-slate-900 text-white hover:bg-slate-800 rounded-none shadow-xl">
              お問い合わせフォームへ
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
