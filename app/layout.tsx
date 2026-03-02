import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
    title: 'BISHENG AI Agents',
    description: 'BISHENG Artificial Intelligence Agents Industry Landscape',
};

import { Providers } from '../components/Providers';
import Header from '../components/Header';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans text-slate-50 antialiased bg-[#0a0f1c]">
                <Providers>
                    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
                        {/* Static CSS radial backgrounds (High Performance) */}
                        <div className="absolute top-0 left-0 w-full lg:w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(79,70,229,0.06)_0%,_transparent_70%)] rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none -z-10" />
                        <div className="absolute bottom-0 right-0 w-full lg:w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.05)_0%,_transparent_70%)] rounded-full translate-y-1/4 translate-x-1/4 pointer-events-none -z-10" />

                        <Header />

                        {/* Main Content Area */}
                        <main className="flex-grow pt-20 flex flex-col relative w-full h-full">
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
