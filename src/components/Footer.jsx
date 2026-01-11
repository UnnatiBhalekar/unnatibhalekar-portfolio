import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-color)'
        }}>
            <div className="container">
                <p>© {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Built with React & Vite</p>
            </div>
        </footer>
    );
};

export default Footer;
