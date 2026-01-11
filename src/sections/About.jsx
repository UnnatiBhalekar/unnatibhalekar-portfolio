import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    lineHeight: '1.8',
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)'
                }}>
                    <p>{resumeData.personalInfo.about}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
