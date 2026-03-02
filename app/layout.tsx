import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
    title: 'BISHENG AI Agents',
    description: 'BISHENG Artificial Intelligence Agents Industry Landscape',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans text-slate-50 antialiased bg-[#0a0f1c]">
                <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
                    {/* Animated Background gradients */}
                    <div className="absolute top-0 left-0 w-full h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full translate-y-1/4 translate-x-1/4 pointer-events-none" />

                    {/* Navigation / Header */}
                    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0f1c]/80 backdrop-blur-md">
                        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                            <Link href="/" className="flex items-center space-x-2">
                                <img src="/logo.png" className="w-6 h-6 object-contain shrink-0" alt="BISHENG Logo" />
                                <span className="font-bold text-xl tracking-wide">BISHENG<span className="text-[#034FE5] font-medium">.AI</span></span>
                            </Link>
                            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <Link href="/landscape" className="hover:text-white transition-colors">Landscape Map</Link>
                                <a href="https://www.bisheng.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About Us</a>
                            </nav>
                            <button className="hidden md:inline-flex px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-sm border border-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </header>

                    {/* Main Content Area */}
                    <main className="flex-grow pt-20 flex flex-col relative z-10 w-full h-full">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
