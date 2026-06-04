import { motion } from "framer-motion";

import {
  HiUserGroup,
  HiHome,
  HiShieldCheck,
  HiCheckCircle,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const features = [
  {
    icon: HiUserGroup,
    title: "Experienced Agents",
    description:
      "Professional experts with years of market experience and local knowledge.",
  },
  {
    icon: HiHome,
    title: "Premium Property Selection",
    description:
      "Carefully selected homes and investment opportunities in top locations.",
  },
  {
    icon: HiShieldCheck,
    title: "Trusted Client Relationships",
    description:
      "Long-term relationships built on transparency, trust, and results.",
  },
  {
    icon: HiCheckCircle,
    title: "Seamless Buying Process",
    description:
      "End-to-end support from property search through successful closing.",
  },
];

function WhyChooseUs() {
  return (
    <section
    id="about"
     className="py-24 px-6 lg:px-8 bg-white"
     >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
         <motion.div
  variants={fadeLeft}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200"
              alt="Real Estate Team"
              className="w-full h-[650px] object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Right Content */}
          <div>
            <motion.span
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-[#D4A017] font-semibold uppercase tracking-wider"
>
              Why Choose Us
            </motion.span>

            <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight"
>
  Trusted Real Estate Experts Dedicated To Your Success
</motion.h2>

           <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-600 leading-relaxed"
>
  At CrestPoint Realty, we combine deep local market knowledge,
  personalized service, and years of industry experience to help
  buyers, sellers, and investors achieve their real estate goals
  with confidence.
</motion.p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
  key={feature.title}
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
                    className="bg-slate-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                      <Icon
                        size={28}
                        className="text-[#D4A017]"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;