"use client";
import Link from 'next/link';
import { useLang } from './Providers';
import { Search, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const t = {
    en: { home: "Home", landscape: "Landscape Map", about: "About Us", contact: "Contact Sales" },
    zh: { home: "首页", landscape: "百景图", about: "关于我们", contact: "联系销售" }
};

export default function Header() {
    const { lang, setLang } = useLang();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f1c]/90 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.png" className="w-6 h-6 object-contain shrink-0" alt="BISHENG Logo" />
                    <span className="font-bold text-xl tracking-wide">BISHENG<span className="text-[#034FE5] font-medium">.AI</span></span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                    <Link href="/" className="hover:text-white transition-colors">{t[lang].home}</Link>
                    <Link href="/landscape" className="hover:text-white transition-colors">{t[lang].landscape}</Link>
                    <a href="https://www.bisheng.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{t[lang].about}</a>
                </nav>
                <div className="flex items-center space-x-6">
                    <button className="text-slate-300 hover:text-white transition-colors">
                        <Search size={20} />
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center space-x-2 text-white font-medium hover:text-indigo-200 transition-colors"
                        >
                            <Globe size={18} />
                            <span>{lang === 'zh' ? 'China' : 'USA'}</span>
                            <ChevronDown size={14} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-full mt-2 right-0 w-32 bg-[#121829] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                                <button
                                    onClick={() => { setLang('zh'); setIsMenuOpen(false); }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${lang === 'zh' ? 'text-white font-bold' : 'text-slate-300'}`}
                                >
                                    🇨🇳 China (中文)
                                </button>
                                <button
                                    onClick={() => { setLang('en'); setIsMenuOpen(false); }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-white/5 ${lang === 'en' ? 'text-white font-bold' : 'text-slate-300'}`}
                                >
                                    🇺🇸 USA (English)
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
