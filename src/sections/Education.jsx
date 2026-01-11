import { resumeData } from '../data/resume';
import { FaGraduationCap, FaCalendarAlt, FaAward } from 'react-icons/fa';

const Education = () => {
    return (
        <section id="education" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {resumeData.education.map((edu, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column', // Mobile first
                            gap: '1.5rem',
                            backgroundColor: 'var(--card-bg)',
                            padding: '2rem',
                            borderRadius: 'var(--radius)',
                            boxShadow: 'var(--card-shadow)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                            className="education-card"
                        >
                            {/* Decorative side accent */}
                            <div style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: '6px',
                                backgroundColor: 'var(--primary-color)'
                            }} />

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <div style={{
                                    padding: '1rem',
                                    backgroundColor: 'var(--secondary-bg)',
                                    borderRadius: '50%',
                                    color: 'var(--primary-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <FaGraduationCap size={24} />
                                </div>

                                <div style={{ flexGrow: 1 }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline',
                                        flexWrap: 'wrap',
                                        marginBottom: '0.5rem',
                                        gap: '1rem'
                                    }}>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{edu.degree}</h3>
                                        <span style={{
                                            color: 'var(--primary-color)',
                                            fontWeight: 600,
                                            fontSize: '0.95rem'
                                        }}>
                                            {edu.period}
                                        </span>
                                    </div>

                                    <h4 style={{
                                        fontSize: '1.1rem',
                                        color: 'var(--primary-color)',
                                        marginBottom: '1rem',
                                        fontWeight: 600
                                    }}>
                                        {edu.institution}
                                    </h4>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 500
                                    }}>
                                        <FaAward size={16} color="var(--primary-color)" />
                                        {edu.grade}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (min-width: 768px) {
           .education-card {
             flex-direction: row !important;
             align-items: center;
           }
        }
      `}</style>
        </section >
    );
};

export default Education;
