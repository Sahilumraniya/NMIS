'use client';
// components/Navbar.js
// components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../../../public/assets';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-around items-center">
                <div className="flex items-center space-x-4">
                    <Link href="/"><Image src={Logo} alt="Logo" width={50} height={50} /></Link>
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-white hover:text-gray-400">Home</Link>
                    <Link href="/#contactUs" className="text-white hover:text-gray-400">Contact Us</Link>
                    <Link href='/from' className="text-white hover:text-gray-400">Meet</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
