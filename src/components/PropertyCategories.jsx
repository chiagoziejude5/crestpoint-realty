
import { motion } from "framer-motion";
import {
  HiHome,
  HiBuildingOffice2,
} from "react-icons/hi2";

const categories = [
  {
    name: "Houses",
    count: "120 Properties",
    icon: HiHome,
  },
  {
    name: "Apartments",
    count: "85 Properties",
    icon: HiBuildingOffice2,
  },
  {
    name: "Villas",
    count: "45 Properties",
    icon: HiHome,
  },
  {
  name: "Commercial",
  count: "60 Properties",
  icon: HiBuildingOffice2,
},
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
function PropertyCategories() {
  return (
    <section
    id="services"
     className="py-24 px-6 lg:px-8"
     >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-[#D4A017] font-semibold uppercase tracking-wider"
>
  Property Categories
</motion.span>

          <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F172A]"
>
            Explore Properties By Category
          </motion.h2>

          <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-slate-600 text-lg leading-relaxed"
>
            Browse a diverse range of properties tailored to your lifestyle,
            investment goals, and business needs. Discover the perfect space
            with confidence.
          </motion.p>
        </div>

        {/* Category Cards */}
  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {categories.map((category, index) => {
    const Icon = category.icon;

    return (
      <motion.div
        key={category.name}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 }}
        className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      >
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-[#D4A017] transition-all duration-300">
                  <Icon
                    size={32}
                    className="text-[#D4A017] group-hover:text-white transition-all duration-300"
                  />
                </div>

                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {category.name}
                </h3>

                <p className="mt-2 text-slate-500">
                  {category.count}
                </p>

                <div className="mt-6 h-1 w-12 bg-[#D4A017] rounded-full"></div>
               </motion.div>
    );
  })}
</div>

      </div>
    </section>
  );
}

export default PropertyCategories;