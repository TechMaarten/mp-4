// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <header className="bg-blue-800 text-white p-4">
            <nav className="max-w-4xl mx-auto flex justify-between">
                <Link href="/" className="font-semibold hover:underline">Home</Link>
                <Link href="/weather/" className="hover:underline">Search</Link>
            </nav>
        </header>
        <main className="max-w-4xl mx-auto p-4">
            {children}
        </main>
        </body>
        </html>
    );
}

