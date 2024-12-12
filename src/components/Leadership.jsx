import React from 'react';

// Inline CSS with media queries for responsiveness
const styles = {
  leadershipSection: {
    backgroundColor: '#f4f4f4',
    padding: '40px 20px',
    borderRadius: '8px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    marginTop: '40px',
  },
  leadershipContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: '#1E3A8A',
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '20px',
    position: 'relative',
  },
  headingLine: {
    width: '50px',
    height: '4px',
    backgroundColor: '#4CAF50',
    position: 'absolute',
    left: '50%',
    bottom: '-10px',
    transform: 'translateX(-50%)',
  },
  description: {
    textAlign: 'center',
    fontSize: '1.1em',
    marginBottom: '40px',
    color: '#555',
    fontStyle: 'italic',
  },
  leadershipList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  leadershipItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  leadershipItemHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
  },
  leadershipImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '2px solid #ddd',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginRight: '30px',
  },
  leadershipDetails: {
    marginLeft: '30px',
  },
  leadershipName: {
    margin: '0',
    fontSize: '1.5em',
    fontWeight: '600',
    color: '#1E3A8A',
  },
  leadershipPosition: {
    margin: '5px 0',
    fontSize: '1.1em',
    color: '#777',
  },

  // Media Queries for responsiveness
  '@media (max-width: 1200px)': {
    leadershipContainer: {
      padding: '10px',
    },
  },
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '1.8em',
    },
    description: {
      fontSize: '1em',
    },
    leadershipList: {
      flexDirection: 'column',
      gap: '15px',
    },
    leadershipItem: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px', // Smaller padding for tablet
    },
    leadershipImage: {
      marginBottom: '15px', // Space below image
    },
    leadershipDetails: {
      marginLeft: '0',
      textAlign: 'center', // Centered details for better mobile/tablet view
    },
  },
  '@media (max-width: 480px)': {
    heading: {
      fontSize: '1.6em',
    },
    description: {
      fontSize: '0.95em',
    },
    leadershipItem: {
      padding: '15px', // Slightly reduced padding on mobile
    },
    leadershipImage: {
      width: '100px',
      height: '100px', // Resize image for mobile
    },
    leadershipName: {
      fontSize: '1.3em', // Smaller font size for name
    },
    leadershipPosition: {
      fontSize: '1em', // Smaller font size for position
    },
  },
};

const leadershipData = [
  
  {
    name: 'Shri Dayananda Reddy',
    position: 'Managing Director',
    image: 'DAYANANDA.jpg', // Replace with actual image path
  },
  {
    name: 'Shri Benekanahalli',
    position: 'Director',
    image: 'BENEKANAHALLI.jpg', // Replace with actual image path
  },
  {
    name: 'Shri Gajaraj',
    position: 'Director',
    image: 'GAJARAJ.jpg', // Replace with actual image path
  },
  {
    name: 'Smt Pramila M. Nesargi',
    position: 'Director',
    image: 'PRAMILA NESARGI.jpg', // Replace with actual image path
  },
  {
    name: 'Shri Krishna Murthy',
    position: 'Director',
    image: 'KRISHNA MURTHY.jpg', // Replace with actual image path
  },
  {
    name: 'Smt Prathibha Dayananda',
    position: 'Director',
    image: 'PRATHIBHA.jpg', // Replace with actual image path
  },
  {
    name: 'Shri Shiv Shankar Agarwal',
    position: 'Director',
    image: 'SHIVASHANKAR AGARWAL.jpg', // Replace with actual image path
  },
  {
    name: 'Shri Bhavesh Kumar Surana',
    position: 'Director',
    image: 'BHAVESH.jpg', // Replace with actual image path
  }
];

const Leadership = () => {
  return (
    <section id="leadership" style={styles.leadershipSection}>
      <div style={styles.leadershipContainer}>
        <h1 style={styles.heading}>
          Our Leadership Team
          <div style={styles.headingLine}></div>
        </h1>
        <p style={styles.description}>
          Each sector is led by a Chairman, supported by a Co-Chairman and experts in their respective fields. These committees deliberate on crucial topics under the AIFBF brand to drive meaningful outcomes. Additionally, specialized committees focus on HR, Legal, CSR, Agriculture, Skill Development, Corporate Tax, and more.
        </p>
        <div style={styles.leadershipList}>
          {leadershipData.map((leader, index) => (
            <div
              style={{
                ...styles.leadershipItem,
                ...(index % 2 === 0 ? styles.leadershipItemHover : {}),
              }}
              key={index}
            >
              <div>
                <img
                  src={leader.image}
                  alt={leader.name}
                  style={styles.leadershipImage}
                />
              </div>
              <div style={styles.leadershipDetails}>
                <h3 style={styles.leadershipName}>{leader.name}</h3>
                <p style={styles.leadershipPosition}>{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
