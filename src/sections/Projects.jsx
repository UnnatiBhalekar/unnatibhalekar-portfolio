import { resumeData } from '../data/resume';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ backgroundColor: 'var(--secondary-bg)' }}>
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {resumeData.projects.map((project, index) => (
                        <div key={index} style={{
                            backgroundColor: 'var(--card-bg)',
                            borderRadius: 'var(--radius)',
                            padding: '2rem',
                            boxShadow: 'var(--card-shadow)',
                            transition: 'transform 0.2s',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                                {project.title}
                            </h3>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--primary-color)',
                                marginBottom: '1rem',
                                fontWeight: 600
                            }}>
                                {project.subtitle}
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                flexGrow: 1
                            }}>
                                {project.description}
                            </p>

                            <div style={{ marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.technologies.slice(0, 5).map(tech => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        padding: '0.1rem 0.6rem',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '0.25rem',
                                        color: 'var(--text-secondary)'
                                    }}>{tech}</span>
                                ))}
                                {project.technologies.length > 5 && (
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>+{project.technologies.length - 5} more</span>
                                )}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                {project.links.githubBackend && (
                                    <a href={project.links.githubBackend} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Github size={18} /> Backend
                                    </a>
                                )}
                                {project.links.githubFrontend && (
                                    <a href={project.links.githubFrontend} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Github size={18} /> Frontend
                                    </a>
                                )}
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <Github size={18} /> Source
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <ExternalLink size={18} /> Demo
                                    </a>
                                )}
                                {project.links.paper && (
                                    <a href={project.links.paper} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                        <ExternalLink size={18} /> Paper/Docs
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
