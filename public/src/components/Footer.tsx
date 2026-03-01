export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="/" className="text-3xl font-bold tracking-tighter flex items-center gap-3 mb-6">
              <img src="/images/Ligare_v2.jfif" alt="Ligare" className="object-contain" style={{ width: "48px", height: "48px" }} />
              合同会社Ligare
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              デザインとテクノロジーの力で、<br />
              企業の課題解決と成長を支援する<br />
              デジタルクリエイティブスタジオ。
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Menu</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="/vision" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="/service" className="hover:text-white transition-colors">Service</a></li>
              <li><a href="/works" className="hover:text-white transition-colors">Works</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li>info@ligare.co.jp</li>
              <li>03-1234-5678</li>
              <li className="pt-4">
                〒150-0000<br />
                東京都渋谷区...
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2026 Ligare Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
