
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";

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

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Home Buyer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    review:
      "CrestPoint Realty made our home-buying experience smooth and stress-free. Their expertise helped us find the perfect home.",
  },
  {
    name: "Michael Carter",
    role: "Property Investor",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    review:
      "The team provided valuable market insights and helped me secure an excellent investment property.",
  },
  {
    name: "Emily Davis",
    role: "First-Time Buyer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    review:
      "I felt supported throughout the entire process. CrestPoint Realty exceeded my expectations in every way.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
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
            Client Testimonials
          </motion.span>

          <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F172A]"
>
            What Our Clients Say
          </motion.h2>

          <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-600 leading-relaxed"
>
            We are committed to delivering exceptional service and helping
            clients achieve successful real estate outcomes with confidence,
            transparency, and expert guidance.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <motion.div
  key={testimonial.name}
  variants={cardVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              {/* Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-[#0F172A]">
                    {testimonial.name}
                  </h3>

                  <p className="text-slate-500 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mt-5">
                {[...Array(5)].map((_, index) => (
                  <HiStar
                    key={index}
                    className="text-[#D4A017]"
                    size={20}
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 text-slate-600 leading-relaxed">
                "{testimonial.review}"
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;