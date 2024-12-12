import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardImages = {
  Growth: 'Growth.jpg',
  Excellence: 'Excellence.png',
  Impact: 'Impact.png',
};

const cards = [
  {
    title: 'Growth',
    content: 'Achieve sustainable growth through strategic partnerships.',
    detailedDescription: `
      AIFBF prioritizes sustainable growth to strengthen India’s financial ecosystem and its members by:
      • Forging strategic partnerships with government bodies, financial institutions, and industry leaders.
      • Organizing knowledge-sharing forums that highlight growth strategies for businesses.
      • Providing access to funding opportunities and market insights.
      • Promoting innovation and technology adoption for competitive advantage.
    `,
  },
  {
    title: 'Excellence',
    content: 'Deliver exceptional quality services to our members.',
    detailedDescription: `
      AIFBF is committed to delivering exceptional services that meet the highest standards by:
      • Offering tailored solutions for members’ legal, financial, and operational needs.
      • Conducting regular evaluations to ensure service quality and efficiency.
      • Hosting training sessions and workshops to enhance professional expertise.
      • Collaborating with renowned experts to guide businesses toward excellence.
    `,
  },
  {
    title: 'Impact',
    content: 'Make a significant difference in the business community.',
    detailedDescription: `
      AIFBF aims to make a meaningful difference in the financial ecosystem and broader society by:
      • Supporting initiatives that uplift underserved communities and empower small businesses.
      • Advocating for inclusive financial policies that address systemic inequities.
      • Launching programs to improve financial literacy and awareness among borrowers.
      • Measuring and showcasing the tangible outcomes of its initiatives to stakeholders.
    `,
  },
];

export default function Vision() {
  const [selectedCard, setSelectedCard] = useState(null); // For storing the selected card
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleCardClick = (card) => {
    setSelectedCard(card); // Set the selected card when clicked
  };

  const handleCloseDetails = () => {
    setSelectedCard(null); // Close the details modal
  };

  return (
    <section className="py-32 bg-gray-50" id="vision" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            To facilitate economic growth and enhance the financial ecosystem while equipping stakeholders with essential skills for development.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 transition-shadow cursor-pointer transform hover:scale-105 hover:shadow-xl hover:bg-blue-100 hover:glowing-background"
              onClick={() => handleCardClick(card)} // Card click also triggers the modal
            >
              <img
                src={cardImages[card.title]}
                alt={card.title}
                className="w-16 h-16 object-cover mb-4 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.content}</p>
              {/* Learn More Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click from being triggered when clicking on button
                  handleCardClick(card);
                }}
                className="mt-4 px-6 py-2 text-white bg-blue-800 rounded-full hover:bg-blue-700 transition-colors"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Component */}
      {selectedCard && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseDetails}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full cursor-auto relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-2 text-white bg-black hover:bg-gray-800 rounded-full p-2"
            >
              X
            </button>
            <img
              src={cardImages[selectedCard.title]}
              alt={selectedCard.title}
              className="w-16 h-16 object-cover mb-4 rounded-full mx-auto"
            />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedCard.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{selectedCard.detailedDescription}</p>
          </div>
        </motion.div>
      )}

      <div className="mt-28 bg-blue-800 py-12 text-center">
        <h3 className="text-2xl font-bold text-white mb-8">Ready to Make a Difference?</h3>
        <a
          href="#contact"
          className="bg-white text-blue-800 px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105"
        >
          Partner with Us
        </a>
      </div>
    </section>
  );
}

<style jsx>{`
  .hover\:glowing-background:hover {
    box-shadow: 0 0 30px rgba(0, 0, 255, 0.7), 0 0 60px rgba(0, 0, 255, 0.7), 0 0 90px rgba(0, 0, 255, 0.7);
    background-color: rgba(173, 216, 230, 0.4); /* Light blue background */
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
  }
`}</style>
