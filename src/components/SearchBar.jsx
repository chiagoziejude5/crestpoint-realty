
import { motion } from "framer-motion";
import { HiSearch } from "react-icons/hi";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function SearchBar() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8 relative z-10">
      <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-white rounded-3xl shadow-xl p-6 lg:p-8"
>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Location */}
          <select className="border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#D4A017]">
            <option>Select Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Miami</option>
            <option>Chicago</option>
          </select>

          {/* Property Type */}
          <select className="border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#D4A017]">
            <option>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Commercial</option>
          </select>

          {/* Price Range */}
          <select className="border border-slate-200 rounded-xl px-4 py-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#D4A017]">
            <option>Price Range</option>
            <option>Under $250K</option>
            <option>$250K - $500K</option>
            <option>$500K - $1M</option>
            <option>$1M+</option>
          </select>

          {/* Search Button */}
          <button className="bg-[#D4A017] text-white rounded-xl px-6 py-4 font-medium flex items-center justify-center gap-2 hover:opacity-90 transition">
            <HiSearch size={20} />
            Search Properties
          </button>

        </div>
      </motion.div>
    </section>
  );
}

export default SearchBar;