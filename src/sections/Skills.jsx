import { resumeData } from '../data/resume';
import {
    FaJava, FaAws, FaDocker, FaGitAlt, FaAngular, FaReact
} from 'react-icons/fa';
import {
    SiSpringboot, SiTypescript, SiPostgresql, SiApachemaven,
    SiGithubactions, SiJsonwebtokens, SiApachekafka, SiApachespark, SiApachestorm
} from 'react-icons/si';
import {
    BiServer, BiCodeBlock, BiTestTube, BiGroup, BiFile, BiLockAlt
} from 'react-icons/bi';

// Helper to map skill names to icons
const getSkillIcon = (skillName) => {
    const lower = skillName.toLowerCase();

    if (lower.includes('java') && !lower.includes('script')) return <FaJava size={24} color="#007396" />;
    if (lower.includes('spring')) return <SiSpringboot size={24} color="#6DB33F" />;
    if (lower.includes('angular')) return <FaAngular size={24} color="#DD0031" />;
    if (lower.includes('react')) return <FaReact size={24} color="#61DAFB" />;
    if (lower.includes('typescript')) return <SiTypescript size={24} color="#3178C6" />;
    if (lower.includes('aws')) return <FaAws size={24} color="#FF9900" />;
    if (lower.includes('docker')) return <FaDocker size={24} color="#2496ED" />;
    if (lower.includes('git')) return <FaGitAlt size={24} color="#F05032" />;
    if (lower.includes('maven')) return <SiApachemaven size={24} color="#C71A36" />;
    if (lower.includes('github actions') || lower.includes('ci/cd')) return <SiGithubactions size={24} color="#2088FF" />;
    if (lower.includes('jwt') || lower.includes('auth')) return <SiJsonwebtokens size={24} color="#000000" />;
    if (lower.includes('kafka')) return <SiApachekafka size={24} color="#231F20" />;
    if (lower.includes('spark')) return <SiApachespark size={24} color="#E25A1C" />;
    if (lower.includes('storm')) return <SiApachestorm size={24} color="#382C5F" />;
    if (lower.includes('sql') || lower.includes('db')) return <SiPostgresql size={24} color="#336791" />;

    // Generic icons for others
    if (lower.includes('api') || lower.includes('microservices')) return <BiServer size={24} />;
    if (lower.includes('test')) return <BiTestTube size={24} />;
    if (lower.includes('agile') || lower.includes('scrum')) return <BiGroup size={24} />;
    if (lower.includes('doc')) return <BiFile size={24} />;

    return <BiCodeBlock size={24} />;
};

const Skills = () => {
    const skillCategories = [
        { key: 'primary', label: 'Primary Skills' },
        { key: 'secondary', label: 'Secondary Skills' },
        { key: 'practices', label: 'Engineering Practices' }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {skillCategories.map(category => (
                        <div key={category.key}>
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                color: 'var(--text-color)'
                            }}>
                                {category.label}
                            </h3>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                                gap: '1rem'
                            }}>
                                {resumeData.skills[category.key].map(skill => (
                                    <div key={skill} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '1.5rem 1rem',
                                        backgroundColor: 'var(--card-bg)',
                                        borderRadius: 'var(--radius)',
                                        boxShadow: 'var(--card-shadow)',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        textAlign: 'center',
                                        gap: '0.75rem',
                                        cursor: 'default'
                                    }}
                                        className="skill-card"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                                        }}
                                    >
                                        <div style={{
                                            padding: '0.5rem',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--secondary-bg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            {getSkillIcon(skill)}
                                        </div>
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            color: 'var(--text-color)'
                                        }}>
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
