import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Properties", id: "properties" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="cursor-pointer">
            <h1 className="text-2xl font-bold text-[#0F172A]">
              CrestPoint
              <span className="text-[#D4A017]"> Realty</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-[#D4A017]"
                    : "text-[#0F172A] hover:text-[#D4A017]"
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#D4A017] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0F172A]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-lg p-6 mb-4">
            <div className="flex flex-col gap-5">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left font-medium transition-colors ${
                    activeSection === link.id
                      ? "text-[#D4A017]"
                      : "text-[#0F172A]"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#D4A017] text-white py-3 rounded-full font-medium"
              >
                Get In Touch
              </button>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;