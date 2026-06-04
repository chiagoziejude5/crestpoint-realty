
import { motion } from "framer-motion";

import {
  HiMapPin,
  HiHome,
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
  },
};

const properties = [
  {
    title: "Luxury Family Home",
    location: "Miami, Florida",
    price: "$850,000",
    beds: 4,
    baths: 3,
    area: "2,500 Sq Ft",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",
  },
  {
    title: "Modern City Apartment",
    location: "New York, NY",
    price: "$620,000",
    beds: 2,
    baths: 2,
    area: "1,400 Sq Ft",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200",
  },
  {
    title: "Waterfront Villa",
    location: "Los Angeles, CA",
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    area: "3,800 Sq Ft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
  },
];

function FeaturedProperties() {
  return (
    <section
     id="properties"
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
  Featured Properties
</motion.span>

          <motion.h2
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="mt-4 text-4xl lg:text-5xl font-bold text-[#0F172A]"
>
            Discover Exceptional Properties
          </motion.h2>

          <motion.p
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-6 text-lg text-slate-600 leading-relaxed"
>
            Explore our handpicked selection of premium homes,
            apartments, and luxury villas located in some of the
            most desirable neighborhoods.
          </motion.p>
        </div>

        {/* Property Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {properties.map((property, index) => (
           
  <motion.div
    key={property.title}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.15,
    }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
  >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <p className="text-[#D4A017] text-2xl font-bold">
                  {property.price}
                </p>

                <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">
                  {property.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-slate-500">
                  <HiMapPin />
                  <span>{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex justify-between mt-6 text-slate-600 border-t border-slate-100 pt-4">
                  <div>
                    <p className="font-semibold">{property.beds}</p>
                    <p className="text-sm">Beds</p>
                  </div>

                  <div>
                    <p className="font-semibold">{property.baths}</p>
                    <p className="text-sm">Baths</p>
                  </div>

                  <div>
                    <p className="font-semibold">{property.area}</p>
                    <p className="text-sm">Area</p>
                  </div>
                </div>

                <button className="mt-6 w-full bg-[#0F172A] text-white py-3 rounded-full font-medium hover:bg-[#D4A017] transition-all duration-300">
                  View Details
                </button>

                            </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProperties;