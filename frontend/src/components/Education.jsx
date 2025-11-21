import { FaGraduationCap, FaUniversity, FaSchool, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "MERN STACK DEVELOPER",
      institution: "Srishti Innovative, Trivandrum",
      period: "2024-2025",
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Sarabhai Institute of Science and Technology, KTU",
      period: "2019-2023",
    },
    {
      degree: "Secondary & Higher Secondary Education",
      institution: "Govt. VHSS Paruthippally",
      period: "2016-2019",
    }
  ];

  const getEducationIcon = (degree) => {
    if (degree.toLowerCase().includes('internship') || degree.toLowerCase().includes('developer')) {
      return <FaCertificate />;
    } else if (degree.toLowerCase().includes('b.tech') || degree.toLowerCase().includes('engineering')) {
      return <FaUniversity />;
    } else {
      return <FaSchool />;
    }
  };

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <FaGraduationCap className="section-icon" />
          Education
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="education-icon">
                {getEducationIcon(edu.degree)}
              </div>
              <div className="education-details">
                <h4 className="education-degree">{edu.degree}</h4>
                <p className="education-institution">{edu.institution}</p>
                <span className="education-period">{edu.period}</span>
              </div>
              <div className="education-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-circle"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;