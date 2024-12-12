import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Example of image links for each sector (replace these with actual images)
const sectorImages = {
  'MSME / SME': 'MSME.jpg',
  'Skill and Women Empowerment': 'SkillAndWomen.jpg',
  'Clean Energy and Climate Change': 'ClimateEnergy.jpg',
  'Banking and Capital Markets': 'Banking.jpg',
  'Corporate Governance, CSR, and Laws': 'Corporate.png',
  'Fintech and Banking': 'Fintech.jpg',
  'Food Processing and Agriculture': 'FoodProcessing.jpg',
  'HR and Education': 'HrAndEducation.jpg',
  'Media and Entertainment': 'MediaAndEntertainment.jpg',
  'Startups': 'StartUp.jpg',
  'International Trade: Exports and Imports': 'InternationalTrade.jpg',
};

const sectors = [
  {
    title: 'MSME / SME',
    description:
      'Micro, Small, and Medium Enterprises (MSME) and Small and Medium Enterprises (SME) are the backbone of India’s economy. AIFBF supports these enterprises by:\n• Facilitating access to financial resources, including loans and subsidies.\n• Providing workshops on compliance, marketing strategies, and digital transformation.\n• Advocating for policies that ease regulatory burdens and enhance market opportunities.\n• Collaborating with industry associations to drive innovation and sustainable growth.',
  },
  {
    title: 'Skill and Women Empowerment',
    description:
      'AIFBF emphasizes skill development and women empowerment to ensure inclusive growth:\n• Organizing skill-building programs to bridge the employment gap.\n• Promoting entrepreneurship among women through financial and advisory support.\n• Partnering with NGOs and government initiatives to create safe work environments and equal opportunities.\n• Launching mentorship programs to encourage women-led enterprises.',
  },
  {
    title: 'Clean Energy and Climate Change',
    description:
      'In response to global environmental challenges, AIFBF actively:\n• Advocates for renewable energy adoption and sustainable practices.\n• Provides funding avenues for clean energy startups.\n• Partners with stakeholders to reduce carbon footprints in industries.\n• Conducts awareness campaigns and workshops on climate resilience.',
  },
  {
    title: 'Banking and Capital Markets',
    description:
      'AIFBF strengthens the banking and capital markets sector by:\n• Promoting ethical and transparent practices in financial transactions.\n• Providing education on investment opportunities and risk management.\n• Supporting the adoption of cutting-edge financial technologies (Fintech).\n• Collaborating with financial institutions to develop borrower-friendly policies.',
  },
  {
    title: 'Corporate Governance, CSR, and Laws',
    description:
      'AIFBF is committed to promoting sound corporate governance and adherence to legal frameworks:\n• Conducting training sessions on corporate social responsibility (CSR) compliance.\n• Offering advisory services on regulatory and legal challenges.\n• Encouraging ethical business practices to enhance brand reputation.\n• Facilitating dialogue between corporations and regulators for policy alignment.',
  },
  {
    title: 'Fintech and Banking',
    description:
      'AIFBF drives innovation in the Fintech and Banking sectors by:\n• Supporting the integration of AI and blockchain technologies.\n• Promoting digital lending platforms to enhance financial inclusion.\n• Facilitating partnerships between traditional banks and Fintech startups.\n• Educating borrowers on secure and efficient digital banking practices.',
  },
  {
    title: 'Food Processing and Agriculture',
    description:
      'AIFBF focuses on modernizing agriculture and food processing industries:\n• Providing support for mechanization and value-added food production.\n• Facilitating credit for small-scale farmers and agribusinesses.\n• Advocating for policies that promote sustainability in agriculture.\n• Organizing knowledge-sharing workshops on global agricultural trends.',
  },
  {
    title: 'HR and Education',
    description:
      'In the HR and Education sector, AIFBF prioritizes:\n• Addressing the skills gap by organizing upskilling programs.\n• Supporting education loan reforms to make higher education more accessible.\n• Partnering with institutions to improve employability among graduates.\n• Encouraging innovation in vocational and technical education.',
  },
  {
    title: 'Media and Entertainment',
    description:
      'AIFBF supports creative industries by:\n• Facilitating funding and resources for media startups.\n• Advocating for policies that protect intellectual property rights.\n• Encouraging investments in regional and niche entertainment markets.\n• Promoting ethical and responsible media practices.',
  },
  {
    title: 'Startups',
    description:
      'AIFBF is a catalyst for India’s burgeoning startup ecosystem:\n• Providing mentorship and incubation support for emerging entrepreneurs.\n• Facilitating access to venture capital and angel investors.\n• Advocating for tax benefits and regulatory ease for startups.\n• Organizing pitch events and networking opportunities.',
  },
  {
    title: 'International Trade: Exports and Imports',
    description:
      'AIFBF supports international trade by:\n• Assisting businesses in navigating export-import regulations.\n• Offering market insights and strategies for global competitiveness.\n• Providing access to export credit and insurance schemes.\n• Organizing trade fairs and international business delegations.',
  },
  {
    title: 'Banking and Capital Markets',
    description:
      'AIFBF strengthens the banking and capital markets sector by:\n• Promoting ethical and transparent practices in financial transactions.\n• Providing education on investment opportunities and risk management.\n• Supporting the adoption of cutting-edge financial technologies (Fintech).\n• Collaborating with financial institutions to develop borrower-friendly policies.',
  },
];

export default function Sectors() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedSector, setSelectedSector] = useState(null);

  const handleCardClick = (sector) => {
    setSelectedSector(sector);
  };

  const handleCloseDetails = () => {
    setSelectedSector(null);
  };

  return (
    <section className="py-32 bg-white" id="sectors" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Sectors We Focus On
          </h2>
          <p className="text-lg text-gray-600">
            AIFBF supports various sectors that significantly contribute to
            India's GDP:
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div onClick={() => handleCardClick(sector)}>
                <img
                  src={sectorImages[sector.title]}
                  alt={sector.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{sector.title}</h3>
              </div>

              <button
                onClick={() => handleCardClick(sector)}
                className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                Learn More <span className="ml-2">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* If a sector is selected, show the expanded view */}
        {selectedSector && (
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
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedSector.title}
              </h3>
              <img
                src={sectorImages[selectedSector.title]}
                alt={selectedSector.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 whitespace-pre-line">
                {selectedSector.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
