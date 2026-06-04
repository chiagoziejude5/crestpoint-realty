
import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import {
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

function Footer() {
  return (
    <footer
    id="contact"
     className="bg-[#0F172A] text-white pt-20 pb-8"
     >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main Footer */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-700"
>

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold">
              CrestPoint
              <span className="text-[#D4A017]"> Realty</span>
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Helping buyers, sellers, and investors achieve their real
              estate goals through expert guidance, market knowledge,
              and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-300">
              {[
                "Home",
                "Properties",
                "Services",
                "About",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#D4A017] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Services
            </h4>

            <ul className="space-y-3 text-slate-300">
              {[
                "Property Buying",
                "Property Selling",
                "Property Investment",
                "Market Analysis",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="hover:text-[#D4A017] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Contact Information
            </h4>

            <div className="space-y-4 text-slate-300">

              <a
  href="https://wa.me/2348027291870"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-start gap-3 hover:text-[#D4A017] transition-colors duration-300"
>
  <FaWhatsapp className="text-[#D4A017] mt-1" />
  <span>2348027291870</span>
</a>

             <a
  href="mailto:chiagoziejude5@gmail.com"
  className="flex items-start gap-3 hover:text-[#D4A017] transition-colors duration-300"
>
  <FiMail className="text-[#D4A017] mt-1" />
  <span>chiagoziejude5@gmail.com</span>
</a>

              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#D4A017] mt-1" />
                <span>Enugu, Enugu State</span>
              </div>

            </div>
          </div>

        </motion.div>

        {/* Bottom Footer */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
>

          <p className="text-slate-400 text-center md:text-left">
            © 2026 CrestPoint Realty. All Rights Reserved. Chiagozie Jude
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all duration-300"
            >
              <FaFacebookF />
            </a>

            <a
  href="https://instagram.com/chiagozie.jude"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all duration-300"
>
  <FaInstagram />
</a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#D4A017] hover:border-[#D4A017] transition-all duration-300"
            >
              <FaXTwitter />
            </a>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}

export default Footer;