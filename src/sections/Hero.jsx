import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const { name, role, location, contact } = resumeData.personalInfo;

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 'var(--header-height)'
        }}>
            <div className="container" style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginBottom: '2rem',
                        position: 'relative'
                    }}
                >
                    {/* Photo Placeholder */}
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--secondary-bg)',
                        border: '4px solid var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        margin: '0 auto',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <img
                            src={import.meta.env.BASE_URL + "profile.jpg"}
                            alt={name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, var(--primary-color), var(--primary-hover))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>
                        Hi, I'm {name}
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '0.5rem'
                    }}>
                        {role}
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        marginBottom: '2rem',
                        color: 'var(--text-secondary)'
                    }}>
                        Based in {location}
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '3rem' }}>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                            <Github size={28} />
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)' }}>
                            <Linkedin size={28} />
                        </a>
                        <a href={`mailto:${contact.email}`} style={{ color: 'var(--text-color)' }}>
                            <Mail size={28} />
                        </a>
                    </div>

                    <a
                        href="#projects"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'var(--primary-color)',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '9999px',
                            fontWeight: 600,
                            fontSize: '1.1rem'
                        }}
                    >
                        View My Work <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
