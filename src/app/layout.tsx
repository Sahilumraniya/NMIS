import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Marg Immigration Services",
  description: "Expert guidance for your journey to the best countries: USA, UK, Europe, Canada, Australia, New Zealand, Russia, and more. Based in Ahmedabad, Gujarat.",
  keywords: "immigration consultants, immigration services, USA immigration consultants, UK immigration consultants, Europe immigration consultants, Canada immigration consultants, Australia immigration consultants, New Zealand immigration consultants, Russia immigration consultants, visa services, immigration consultancy, best immigration consultants, expert immigration guidance, visa assistance, international relocation, immigration advice, immigration support, consultant services to go to other countries, immigration consultants in Ahmedabad, immigration services in Gujarat",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "New Marg Immigration Services",
    description: "Expert guidance for your journey to the best countries: USA, UK, Europe, Canada, Australia, New Zealand, Russia, and more. Based in Ahmedabad, Gujarat.",
    url: "https://newmarg-immigration-services.vercel.app/",
    type: "website",
    images: [
      {
        url: "../public/assets/Logo.png",
        width: 800,
        height: 600,
        alt: "New Marg Immigration Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Marg Immigration Services",
    description: "Expert guidance for your journey to the best countries: USA, UK, Europe, Canada, Australia, New Zealand, Russia, and more. Based in Ahmedabad, Gujarat.",
    site: "@newmarg-immigration-services",
    creator: "@sahilumraniya",
    images: ["../public/assets/Logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        <ToastContainer theme="dark" />
        {children}
      </body>
    </html>
  );
}
