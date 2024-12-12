import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showReformDetails, setShowReformDetails] = useState(false);

  const toggleReformDetails = () => {
    setShowReformDetails(!showReformDetails);
  };

  return (
    <section className="py-32 bg-white" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About AIFBF
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
        </motion.div>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
  {/* Left Section with Text */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="space-y-8"
>
  <h2 className="text-blue-900 font-bold text-3xl">
    The All India Financial Borrowers Federation (AIFBF) is a visionary platform dedicated to empowering financial borrowers across India.
  </h2>
  
  <div className="space-y-4">
    <h3 className="text-2xl text-gray-800 font-semibold">OUR STORY</h3>
    <p className="text-lg text-gray-600 leading-relaxed">
      We provide actionable insights and lawful solutions to help individuals and businesses thrive without hurdles. Acting as a catalyst for economic transformation, AIFBF bridges the gap between policymakers, financial institutions, and borrowers.
    </p>
    <p className="text-lg text-gray-600 leading-relaxed">
      With a forward-looking and proactive approach, we aim to foster a better financial ecosystem for a brighter future.
    </p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      Join Us Today
    </motion.button>
  </div>
</motion.div>

  {/* Right Section with Image */}
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-20 blur-lg"></div>
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
        alt="Financial district"
        className="relative rounded-2xl shadow-2xl w-full"
      />
    </div>
  </motion.div>
</div>


        {/* Vision and Mission Cards */}
<div className="grid md:grid-cols-2 gap-8 mt-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50"
  >
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision</h3>
    <p className="text-lg text-gray-600 leading-relaxed">
      To facilitate economic growth and enhance the financial ecosystem
      while equipping stakeholders with essential skills for development.
    </p>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50"
  >
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission</h3>
    <p className="text-lg text-gray-600 leading-relaxed">
      To serve as a conduit between the government and beneficiaries,
      addressing key economic issues, policies, and regulations through
      collaboration with stakeholders.
    </p>
  </motion.div>
</div>



        {/* Our Objectives */}
<div className="mt-20 text-center">
  <h3 className="text-3xl font-bold text-blue-900 mb-10">
    Our Objectives
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1 }}
      className="group bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:shadow-2xl hover:shadow-blue-500/50"
    >
      {/* Image for Growth */}
      <img 
        src="Growth.jpg" 
        alt="Growth" 
        className="w-12 h-12 mb-4 mx-auto" 
      />
      <h4 className="text-2xl font-semibold text-blue-600 mb-4">
        Growth
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">
        Achieve sustainable growth through strategic partnerships.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="group bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:shadow-2xl hover:shadow-blue-500/50"
    >
      {/* Image for Excellence */}
      <img 
        src="Excellence.png" 
        alt="Excellence" 
        className="w-12 h-12 mb-4 mx-auto" 
      />
      <h4 className="text-2xl font-semibold text-blue-600 mb-4">
        Excellence
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">
        Deliver exceptional quality services to our members.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.4 }}
      className="group bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:shadow-2xl hover:shadow-blue-500/50"
    >
      {/* Image for Impact */}
      <img 
        src="Impact.png" 
        alt="Impact" 
        className="w-12 h-12 mb-4 mx-auto" 
      />
      <h4 className="text-2xl font-semibold text-blue-600 mb-4">
        Impact
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">
        Make a significant difference in the business community.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 1.6 }}
      className="group bg-white p-6 rounded-lg shadow-lg text-center transition-all hover:shadow-2xl hover:shadow-blue-500/50"
    >
      {/* Image for Reputation */}
      <img 
        src="Reputation.jpg" 
        alt="Reputation" 
        className="w-12 h-12 mb-4 mx-auto" 
      />
      <h4 className="text-2xl font-semibold text-blue-600 mb-4">
        Reputation
      </h4>
      <p className="text-lg text-gray-600 leading-relaxed">
        Build a trustworthy and reliable federation.
      </p>
    </motion.div>
  </div>
</div>


        {/* Our Responsibilities */}
<div className="mt-20">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 2 }}
    className="bg-white p-8 rounded-lg shadow-lg"
  >
    <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
      Our Responsibilities
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Member Services Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
        <img 
          src="Member.png" 
          alt="Member Services" 
          className="w-12 h-12 mb-4 mx-auto" 
        />
        <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">Member Services</h4>
        <p className="text-gray-600">Legal, financial, and corporate advisory services</p>
      </div>

      {/* Community Services Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
        <img 
          src="Community.png" 
          alt="Community Services" 
          className="w-12 h-12 mb-4 mx-auto" 
        />
        <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">Community Services</h4>
        <p className="text-gray-600">Societal development initiatives</p>
      </div>

      {/* Public Services Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
        <img 
          src="PublicService.png" 
          alt="Public Services" 
          className="w-12 h-12 mb-4 mx-auto" 
        />
        <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">Public Services</h4>
        <p className="text-gray-600">Arbitration and reconciliation solutions</p>
      </div>

      {/* Transformative Education Loan Reform Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 relative transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
        <img 
          src="Education.png" 
          alt="Education Loan Reform" 
          className="w-12 h-12 mb-4 mx-auto" 
        />
        <h4 className="text-xl font-semibold text-blue-600 mb-4 text-center">Transformative Education Loan Reform</h4>
        <p className="text-gray-600">Strategic initiative for education loan framework</p>
      </div>
    </div>
  

            {/* Learn More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 2.1 }}
              className="mt-8 text-center"
            >
              <button
                onClick={toggleReformDetails}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {showReformDetails ? 'Show Less' : 'Learn More'}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Loan Reform Details */}
{showReformDetails && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, delay: 3 }}
    className="mt-8 bg-white p-8 rounded-lg shadow-lg"
  >
    <h3 className="text-2xl font-semibold mb-4">
      Education Loan Reform Details:
    </h3>
    <motion.ol
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="list-decimal pl-6 text-gray-600"
    >
      <li className="flex items-start space-x-4">
        <img
          src="InterestRateCap.jpg" // Add the appropriate image path
          alt="Interest Rate Cap"
          className="w-10 h-10"
        />
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Interest Rate Cap</h4>
          <p>Lowering rates to 4% for affordability</p>
        </div>
      </li>

      <li className="flex items-start space-x-4">
        <img
          src="ExtendRepaymentPeriod.jpg" // Add the appropriate image path
          alt="Extended Repayment Periods"
          className="w-10 h-10"
        />
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Extended Repayment Periods</h4>
          <p>Up to 20 years</p>
        </div>
      </li>

      <li className="flex items-start space-x-4">
        <img
          src="CollateralFreeLoans.png" // Add the appropriate image path
          alt="Collateral-Free Loans"
          className="w-10 h-10"
        />
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Collateral-Free Loans</h4>
          <p>Ensuring accessibility</p>
        </div>
      </li>

      <li className="flex items-start space-x-4">
        <img
          src="GovernmentBackedCreditGuarantee.png" // Add the appropriate image path
          alt="Government-Backed Credit Guarantees"
          className="w-10 h-10"
        />
        <div>
          <h4 className="text-xl font-semibold text-blue-600 mb-2">Government-Backed Credit Guarantees</h4>
          <p>Ensuring loan security and support</p>
        </div>
      </li>
    </motion.ol>
  </motion.div>
)}
      </div>
    </section>
  );
}
