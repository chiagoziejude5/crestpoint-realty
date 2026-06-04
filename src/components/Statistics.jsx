import { motion } from "framer-motion";

import {
  HiHome,
  HiUserGroup,
  HiCalendarDays,
  HiTrophy,
} from "react-icons/hi2";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const stats = [
  {
    icon: HiHome,
    number: "1,200+",
    label: "Properties Sold",
  },
  {
    icon: HiUserGroup,
    number: "850+",
    label: "Happy Clients",
  },
  {
    icon: HiCalendarDays,
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: HiTrophy,
    number: "35+",
    label: "Industry Awards",
  },
];

function Statistics() {
  return (
    <section className="py-24 px-6 lg:px-8">
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
            Company Achievements
          </motion.span>

          <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F172A]"
>
            Numbers That Reflect Our Commitment
          </motion.h2>

          <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-600 leading-relaxed"
>
            Over the years, CrestPoint Realty has helped hundreds of
            families, investors, and businesses find exceptional
            properties while delivering a trusted and professional
            experience.
          </motion.p>
        </div>

        {/* Statistics Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
  key={stat.label}
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
                className="bg-white rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center">
                  <Icon
                    size={32}
                    className="text-[#D4A017]"
                  />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-[#D4A017]">
                  {stat.number}
                </h3>

                <p className="mt-2 text-[#0F172A] font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Statistics;