// import React, { useState } from "react";
// import "./Certifications.css"; // Import custom styles


// const Certifications = () => {
//   const [selectedCert, setSelectedCert] = useState(null);

//   const openModal = (cert) => {
//     setSelectedCert(cert);
//     document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
//   };

//   const closeModal = () => {
//     setSelectedCert(null);
//     document.body.style.overflow = "auto"; // Re-enable scrolling
//   };

//   return (
//     <div className="certifications-container">

//       <h2 className="certifications-title">Certifications</h2>

//       {/* Grid Layout - 3 Columns */}
//       <div className="certifications-grid">
//         {certifications.map((cert, index) => (
//           <div key={index} className="cert-card" onClick={() => openModal(cert)}>
//             {/* Image with Overlay */}
//             <div className="cert-image-container">
//               <img src={cert.image} alt={cert.title} className="cert-image" />
//               <div className="cert-overlay">
//                 <p>Click to View</p>
//               </div>
//             </div>

//             {/* Certificate Details */}
//             <h3 className="cert-title">{cert.title}</h3>
//             <p className="cert-provider">{cert.provider} - {cert.year}</p>
//           </div>
//         ))}
//       </div>

//       {/* Modal for full-sized certificate */}
//       {selectedCert && (
//         <div className="cert-modal" onClick={closeModal}>
//           <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="cert-modal-close" onClick={closeModal}>×</button>
//             <h3 className="cert-modal-title">{selectedCert.title}</h3>
//             <p className="cert-modal-provider">{selectedCert.provider} - {selectedCert.year}</p>
//             <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Certifications;

import React, { useState } from "react";
import "../../style.css";

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const certifications = [
  {
    title: "IBM AI Professional Certificate",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/IBM AI Professional Certificate.png"),
  },
  {
    title: "Professional ML and Data Science Certificate",
    provider: "Udemy",
    year: 2025,
    image: require("../../Assets/Certs/Python_ml_certificate_Udemy.png"),
  },
  {
    title: "Building GenAI Powered Apps",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Building GenAI powered apps.png"),
  },
  {
    title: "Developing AI Apps with Python",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Developing AI apps with Python.png"),
  },
  {
    title: "GenAI - Elevating SDE Career",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/GenAI - Elevating SDE Career.png"),
  },
  {
    title: "GenAI - Introduction and Applications",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/GenAI - Intro and Applications.png"),
  },
  {
    title: "GenAI - Prompt Engineering",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/GenAI-Prompt Engineering.png"),
  },
  {
    title: "Intro to AI",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Intro to AI.png"),
  },
  {
    title: "Python for AI, Data Science, and Development",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Python for Data Science, AI, & Dev.png"),
  },
  {
    title: "Intro to HTML, CSS, and JavaScript",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Intro to HTML, CSS, and JavaScript.png"),
  },
  {
    title: "Intro to Software Engineering",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/Intro to Software Engineering.png"),
  },
  {
    title: "SDE Career Guide and Interview Prep",
    provider: "IBM",
    year: 2025,
    image: require("../../Assets/Certs/SDE Career Guide and Interview Prep.png"),
  },
  {
    title: "Enact MIDP Certificate",
    provider: "Enact Mortgage",
    year: 2022,
    image: require("../../Assets/Certs/Enact MIDP certificate.png"),
  },
];

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="certifications-page"> {/* Unique wrapper class */}
      <h2 className="certifications-title">Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            onClick={() => openModal(cert)}
          >
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3 className="cert-title">{cert.title}</h3>
            <p className="cert-provider">{cert.provider} - {cert.year}</p>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="cert-modal" onClick={closeModal}>
          <div className="cert-modal-content">
            <button className="cert-modal-close" onClick={closeModal}>&times;</button>
            <h3 className="cert-title">{selectedCert.title}</h3>
            <p className="cert-provider">{selectedCert.provider} - {selectedCert.year}</p>
            <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
