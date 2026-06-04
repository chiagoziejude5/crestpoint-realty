
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
};

function Hero() {
  return (
    <section
  id="home"
  className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24"
>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
        
        {/* Left Content */}
        <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-[#D4A017] font-medium text-sm mb-6"
>
  Premium Real Estate Services
</motion.div>

          <motion.h1
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.2 }}
  className="text-5xl lg:text-7xl font-bold text-[#0F172A] leading-tight"
>
            Find Your Dream Home With Confidence
          </motion.h1>

          <motion.p
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl"
>
            Discover exceptional properties in the most desirable locations.
            CrestPoint Realty helps buyers, sellers, and investors find the
            perfect opportunities with expert guidance and trusted service.
          </motion.p>

          <motion.div
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 mt-8"
>
            <button className="bg-[#D4A017] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition">
              Explore Properties
            </button>

            <button className="border border-slate-300 px-8 py-4 rounded-full font-medium text-[#0F172A] hover:bg-slate-100 transition">
              Contact Agent
            </button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
  variants={fadeRight}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.4 }}
  className="relative"
>
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Home"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Floating Stats Card */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-5"
>
            <div className="flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  500+
                </h3>
                <p className="text-sm text-slate-500">
                  Properties
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  98%
                </h3>
                <p className="text-sm text-slate-500">
                  Satisfaction
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;