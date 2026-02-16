import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  Sparkles,
  CheckCircle,
  Zap,
  FileImage,
  Clock,
  Instagram,
  Mail,
  Lightbulb,
  Palette,
  RefreshCw,
  Download,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/tribal_logo.png";
import main_logo from "../assets/image.png";
import eagle_tatoo from "../assets/eagle_tattoo.jpg";
import small_logos from "../assets/small_logos.jpg";
import stripes_logo from "../assets/stripes_logo.png";

export default function App() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "Designs", href: "#designs" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);

    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // small delay for mobile menu close animation
    }
  };

  const tattooDesigns = [
    {
      image:
        "https://images.unsplash.com/photo-1605012555174-f01851e9410d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBza2V0Y2glMjBkcmF3aW5nJTIwcGFwZXIlMjBwZW5jaWx8ZW58MXx8fHwxNzcxMjQ3MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Sacred Geometry",
      meaning: "Balance and cosmic harmony",
    },
    {
      image: eagle_tatoo,
      title: "professional animal tribal tattoos",
      meaning: "Complete story, lifelong journey",
    },
    {
      image: small_logos,
      title: "Tribal Logos",
      meaning: "Timeless and tiny traditional style",
    },
    {
      image:
        "https://images.unsplash.com/photo-1524642176501-f3393ec0b116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBkZXNpZ24lMjBza2V0Y2glMjBub3RlYm9va3xlbnwxfHx8fDE3NzEyNDcxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Notebook Sketches",
      meaning: "Raw creative process",
    },
    {
      image:
        "https://images.unsplash.com/photo-1761276297653-00549dc7263f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGluayUyMHRhdHRvbyUyMGRyYXdpbmd8ZW58MXx8fHwxNzcxMjQ3MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Black Ink Art",
      meaning: "Pure and powerful expression",
    },
    {
      image:
        "https://images.unsplash.com/photo-1649688066818-8274c4004f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjBkcmF3aW5nJTIwc2tldGNofGVufDF8fHx8MTc3MTI0NzEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Artist Sketches",
      meaning: "Hand-crafted artistry",
    },
    {
      image: stripes_logo,
      title: "Mandala Sketch",
      meaning: "Unity and spiritual connection",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Original Designs",
      description: "Every piece is crafted from scratch, never duplicated",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Custom Concepts",
      description: "Personalized designs that tell your unique story",
    },
    {
      icon: <FileImage className="w-10 h-10" />,
      title: "High Resolution Files",
      description: "Print-ready artwork for perfect tattoo execution",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Fast Delivery",
      description: "Quality designs delivered within agreed timelines",
    },
  ];

  const processSteps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Share Your Idea",
      description: "Tell us your vision and inspiration",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Concept Creation",
      description: "We sketch your design digitally",
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Design Refinement",
      description: "Revisions until it's perfect",
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Final Tattoo Ready File",
      description: "High-res files sent to you",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* NAVIGATION HEADER */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/30"
            : "bg-black/60"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={logo}
                alt="Tribal Inks Logo"
                className="h-12 w-12 md:h-16 md:w-16 object-contain cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300 relative group"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
              <button
                className="px-6 py-2 bg-[#D4AF37] text-black hover:bg-[#F4CF67] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#D4AF37] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden mt-4 pt-4 border-t border-[#D4AF37]/20"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4">
                  {navigationLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-left py-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {link.name}
                    </button>
                  ))}
                  <button
                    className="px-6 py-3 bg-[#D4AF37] text-black hover:bg-[#F4CF67] transition-all duration-300 text-center"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* SECTION 1 - HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1761276297688-bc67f27c2577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0YXR0b28lMjBhcnQlMjBibGFja3xlbnwxfHx8fDE3NzEyNDY1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tattoo Art"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
        </div>

        {/* Gold particles animation */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: "0 0 10px #D4AF37",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl mb-6"
            style={{ fontFamily: "Cinzel, serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Wear Your{" "}
            <span
              className="text-[#D4AF37]"
              style={{ textShadow: "0 0 30px rgba(212, 175, 55, 0.5)" }}
            >
              Identity
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300"
            style={{ fontFamily: "Cormorant, serif" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Custom Tattoo Designs Crafted for the Fearless
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button
              onClick={() =>
                document.getElementById("designs")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#F4CF67] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Designs
            </button>

            <a
              href="https://instagram.com/royal.inksbyaw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] inline-block text-center"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Book Custom Design
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - FEATURED DESIGNS */}
      <section id="designs" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Featured <span className="text-[#D4AF37]">Designs</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </motion.div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="20px">
            {tattooDesigns.map((design, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className="text-2xl mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {design.title}
                  </h3>
                  <p
                    className="text-gray-300 mb-4"
                    style={{ fontFamily: "Cormorant, serif" }}
                  >
                    {design.meaning}
                  </p>
                  <motion.button
                    className="px-6 py-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 w-fit"
                    whileHover={{ scale: 1.05 }}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    View Details
                  </motion.button>
                </motion.div>

                {/* Gold border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-[#D4AF37] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                  style={{
                    boxShadow:
                      hoveredCard === index
                        ? "0 0 30px rgba(212, 175, 55, 0.5)"
                        : "none",
                  }}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>

      {/* SECTION 3 - ABOUT THE ARTIST */}
      <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={main_logo}
              height={100}
              width={100}
              alt="Artist at work"
              className="w-full h-auto shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{ fontFamily: "Cinzel, serif" }}
            >
              The Mind Behind <span className="text-[#D4AF37]">the Ink</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>

            <div
              className="space-y-6 text-gray-300"
              style={{ fontFamily: "Cormorant, serif" }}
            >
              <p className="text-lg sm:text-xl leading-relaxed">
                Every powerful tattoo begins as an idea — and I believe that
                idea deserves to be transformed into something deeply personal
                and visually extraordinary.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                I create custom tattoo concepts and original flash designs built
                around meaning, strength, and individuality. Each piece is
                carefully structured to balance symbolism, composition, and
                long-term aesthetic impact.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed">
                My approach is intentional. Clean lines. Strong presence.
                Timeless design. From detailed mandala structures to bold
                geometric and symbolic concepts, every design is crafted with
                precision and purpose — ready to become a statement of identity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 - WHY CHOOSE US */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Why Choose <span className="text-[#D4AF37]">Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 border border-gray-800 hover:border-[#D4AF37] transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-[#D4AF37] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3
                className="text-2xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5 - PROCESS */}
      <section id="process" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Our <span className="text-[#D4AF37]">Process</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting lines */}
          <div
            className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            style={{ top: "64px" }}
          ></div>

          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black text-[#D4AF37] relative z-10">
                {step.icon}
              </div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 6 - PREMIUM CTA */}
      <section className="py-32 px-4 md:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#D4AF37]/5 to-black"></div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-7xl mb-8 text-[#D4AF37]"
            style={{
              fontFamily: "Cinzel, serif",
              textShadow: "0 0 50px rgba(212, 175, 55, 0.3)",
            }}
          >
            Your Story Deserves Art
          </h2>

          <motion.button
            className="px-12 py-5 text-xl border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 relative overflow-hidden group"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Start Your Custom Design</span>
            <motion.div
              className="absolute inset-0 border-2 border-[#D4AF37]"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                  "0 0 40px rgba(212, 175, 55, 0.6)",
                  "0 0 20px rgba(212, 175, 55, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-[#D4AF37]/30 py-12 px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3
                className="text-3xl text-[#D4AF37] mb-2"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                TribalInks
              </h3>
              <p
                className="text-gray-400"
                style={{ fontFamily: "Cormorant, serif" }}
              >
                Crafting stories through blank ink
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://instagram.com/royal.inksbyaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-white transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/918530706426?text=Hi%20I%20want%20a%20custom%20tattoo%20design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-white transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>

              <a
                href="mailto:athrvtx@gmail.com"
                className="text-[#D4AF37] hover:text-white transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div
            className="text-center mt-8 text-gray-500 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2026 TribalInks. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
