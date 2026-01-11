import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} style={{
                            marginBottom: '3rem',
                            paddingLeft: '2rem',
                            borderLeft: '2px solid var(--border-color)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: '0',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--primary-color)'
                            }} />

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                marginBottom: '1rem',
                                color: 'var(--text-secondary)'
                            }}>
                                <span style={{ fontWeight: 600 }}>{exp.company}</span>
                                <span>{exp.period}</span>
                            </div>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                {exp.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {exp.technologies.map((tech) => (
                                    <span key={tech} style={{
                                        fontSize: '0.85rem',
                                        padding: '0.25rem 0.75rem',
                                        backgroundColor: 'var(--secondary-bg)',
                                        borderRadius: '1rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
