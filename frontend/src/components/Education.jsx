import { FaGraduationCap } from 'react-icons/fa';

const Education = ({ education }) => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <FaGraduationCap className="section-icon" />
          Education
        </h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-timeline">
                <div className="timeline-dot"></div>
                {index < education.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div className="education-content">
                <h4>{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <div className="education-meta">
                  <span className="period">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;