import { Building2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToContact = () => {
    // Ensure we are scrolling to the element with id="contact"
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[calc(125vh-4rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-wide mb-4 text-white"
          >
            Advocating for Financial Inclusivity and Borrower 
            Empowerment
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-white font-light mb-10 max-w-3xl mx-auto"
          >
            Empowering borrowers across India through actionable insights and lawful solutions that drive financial growth and stability for all.
          </motion.p>

          {/* Additional Content */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm md:text-lg text-white font-light mb-8 max-w-3xl mx-auto"
          >
            Join us as we break barriers, making financial services accessible and transparent for every individual, ensuring that financial inclusion reaches even the most underserved communities.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.2, duration: 0.3 }}
              onClick={scrollToContact} // Linking the scroll function here
              className="bg-blue-500 text-white px-8 py-3 rounded-md font-medium text-md shadow-md hover:shadow-lg hover:bg-blue-600 transition-all duration-300"
            >
              Join Our Cause
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 1.3, duration: 0.3 }}
              onClick={scrollToContact} // Same scroll function for contact
              className="bg-yellow-500 text-black px-8 py-3 rounded-md font-medium text-md shadow-md hover:shadow-lg hover:bg-yellow-600 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Down Icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-40"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={scrollToContact} // Also scrolls to contact section
            className="text-blue-200 hover:text-white transition-colors"
          >
            <ChevronDown className="w-10 h-10" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
