import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

export function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRhaWxlZCUyMGJsYWNrJTIwdGF0dG9vJTIwYXJ0fGVufDF8fHx8MTc3MTI0NjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Tattoo Art"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Gold Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white" style={{ fontFamily: 'Cinzel, serif' }}>
            Wear Your Identity.
          </h1>
          <div className="relative inline-block">
            <div className="absolute inset-0 blur-2xl bg-[#D4AF37] opacity-30"></div>
            <p className="relative text-xl md:text-2xl text-gray-300 mb-12" style={{ fontFamily: 'Cormorant, serif' }}>
              Custom Tattoo Designs Crafted for the Fearless.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="px-10 py-4 bg-[#D4AF37] text-black font-semibold rounded-sm hover:bg-[#FFD700] transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(212,175,55,0.8)' }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              View Designs
            </motion.button>
            
            <motion.button
              className="px-10 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-sm hover:bg-white hover:text-black transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Book Custom Design
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
