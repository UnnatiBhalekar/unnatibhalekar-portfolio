import { resumeData } from '../data/resume';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    const { contact } = resumeData.personalInfo;

    return (
        <section id="contact" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 className="section-title">Get In Touch</h2>
                <p style={{
                    maxWidth: '600px',
                    margin: '0 auto 3rem',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem'
                }}>
                    I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href={`mailto:${contact.email}`}
                        className="contact-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: 'var(--radius)',
                            minWidth: '200px',
                            textDecoration: 'none',
                            color: 'var(--text-color)',
                            boxShadow: 'var(--card-shadow)'
                        }}
                    >
                        <Mail size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: 600 }}>Email Me</span>
                    </a>

                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: 'var(--radius)',
                            minWidth: '200px',
                            textDecoration: 'none',
                            color: 'var(--text-color)',
                            boxShadow: 'var(--card-shadow)'
                        }}
                    >
                        <Linkedin size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: 600 }}>LinkedIn</span>
                    </a>

                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '2rem',
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: 'var(--radius)',
                            minWidth: '200px',
                            textDecoration: 'none',
                            color: 'var(--text-color)',
                            boxShadow: 'var(--card-shadow)'
                        }}
                    >
                        <Github size={40} color="var(--primary-color)" />
                        <span style={{ fontWeight: 600 }}>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
