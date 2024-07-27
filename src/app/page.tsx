'use client';
// app/page.js
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='dark'>
      <Navbar />
      <Hero />
      <Contact />
    </div>
  );
}
