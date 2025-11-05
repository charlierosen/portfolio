import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
title: {
default: 'Charlie Rosen — Portfolio',
template: '%s · Charlie Rosen'
},
description: 'Projects, blog, and CV.',
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>
<Navbar />
<main>{children}</main>
<Footer />
<Analytics />
</body>
</html>
);
}