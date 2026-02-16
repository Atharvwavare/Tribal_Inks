import { motion } from 'motion/react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useState } from 'react';

const designs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1759806919529-7db386dd4741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMHRhdHRvbyUyMGRlc2lnbnxlbnwxfHx8fDE3NzEyNDY0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sacred Phoenix',
    meaning: 'Rebirth and resilience through life\'s flames',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1612911012211-d14e442e4739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBhcnR3b3JrfGVufDF8fHx8MTc3MTI0NjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Geometric Soul',
    meaning: 'Balance and harmony in sacred geometry',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1761957376211-b9076f9592e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRhdHRvbyUyMHN0eWxlfGVufDF8fHx8MTc3MTI0NjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Rising Dragon',
    meaning: 'Power, wisdom, and ancestral strength',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1759346771288-ac905d1b1abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWdufGVufDF8fHx8MTc3MTI0NjQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Minimalist Wave',
    meaning: 'Flow with life, embrace change',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1571855618158-f2ea615c339a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjB0YXR0b28lMjBhcnR8ZW58MXx8fHwxNzcxMjQ2NDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Eternal Bloom',
    meaning: 'Growth, beauty, and life\'s journey',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRhaWxlZCUyMGJsYWNrJTIwdGF0dG9vJTIwYXJ0fGVufDF8fHx8MTc3MTI0NjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Ancient Warrior',
    meaning: 'Courage, honor, and inner strength',
  },
];

export function FeaturedDesigns() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Cinzel, serif' }}>
            Featured Designs
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="20px">
            {designs.map((design, index) => (
              <motion.div
                key={design.id}
                className="relative group cursor-pointer overflow-hidden rounded-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredId(design.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <motion.div
                  className="relative overflow-hidden"
                  animate={{
                    scale: hoveredId === design.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-auto object-cover"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === design.id ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Cinzel, serif' }}>
                      {design.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4" style={{ fontFamily: 'Cormorant, serif' }}>
                      {design.meaning}
                    </p>
                    
                    <motion.button
                      className="px-6 py-2 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37] hover:text-black transition-all w-fit"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredId === design.id ? 1 : 0,
                        y: hoveredId === design.id ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Gold Border on Hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredId === design.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: 'inset 0 0 0 2px #D4AF37, 0 0 20px rgba(212, 175, 55, 0.6)',
                  }}
                ></motion.div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
