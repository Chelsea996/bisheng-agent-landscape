"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'zh';

interface LangContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({ lang: 'zh', setLang: () => { } });

export function Providers({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('zh');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem('lang') as Lang;
        if (saved) setLangState(saved);
        else {
            setLangState('zh');
            localStorage.setItem('lang', 'zh');
        }
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem('lang', l);
    };

    if (!mounted) {
        return <div className="min-h-screen bg-[#0a0f1c]" />; // prevent hydration mismatch
    }

    return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
