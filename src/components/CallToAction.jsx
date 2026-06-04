import { motion } from "framer-motion";

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

function CallToAction() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-[#0F172A] rounded-[32px] px-8 py-20 lg:px-20 text-center shadow-2xl">

          {/* Decorative Gold Circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A017]/20 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4A017]/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">

            <motion.span
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-[#D4A017] font-semibold uppercase tracking-wider"
>
              Get Started Today
            </motion.span>

            <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-6xl font-bold text-white leading-tight"
>
              Ready To Find Your Perfect Property?
            </motion.h2>

            <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-300 leading-relaxed"
>
              Whether you're buying your dream home, selling a property,
              or looking for your next investment opportunity, the experts
              at CrestPoint Realty are ready to guide you every step of
              the way.
            </motion.p>

            {/* Buttons */}
            <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.6 }}
  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
>

              <a
  href="#properties"
  className="bg-[#D4A017] text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
>
  Browse Properties
</a>

<a
  href="#contact"
  className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0F172A] hover:-translate-y-1 transition-all duration-300"
>
  Contact Us
</a>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CallToAction;