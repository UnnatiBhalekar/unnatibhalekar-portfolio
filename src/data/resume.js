export const resumeData = {
  personalInfo: {
    name: "Unnati Bhalekar",
    role: "Software Engineer",
    location: "Dublin, Ireland",
    contact: {
      email: "unnatibhalekar@outlook.com",
      linkedin: "https://www.linkedin.com/in/unnatibhalekar/",
      github: "https://github.com/UnnatiBhalekar",
      phone: "+353 89 246 9008"
    },
    about: "Software Engineer with 2+ years of experience building scalable web applications using Java, Spring Boot, and Angular. Strong background in REST API development, microservices, and frontend-backend integration. Passionate about delivering reliable, high-quality software and continuously improving engineering practices."
  },
  experience: [
    {
      company: "UST",
      role: "Software Developer II",
      location: "Pune, India",
      period: "July 2022 – July 2024",
      description: "Designed and developed RESTful web services using Java and Spring Boot. Integrated AWS services (S3, DynamoDB). Improved code coverage to over 80%. Collaborated in Agile/Scrum teams.",
      technologies: ["Java", "Spring Boot", "AWS", "Angular", "Agile"]
    },
    {
      company: "Wolters Kluwer",
      role: "Performance Testing Intern",
      location: "Pune, India",
      period: "Feb 2022 – July 2022",
      description: "Conducted performance and load testing using LoadRunner. Designed test scenarios contributing to a 30% improvement in application performance.",
      technologies: ["LoadRunner", "Performance Testing"]
    }
  ],
  education: [
    {
      institution: "Dublin City University",
      degree: "MSc in Computing (Secure Software Engineering)",
      period: "Aug 2025",
      grade: "2.1 (Second Class Honors, Grade I)"
    },
    {
      institution: "Pimpri Chinchwad College of Engineering",
      degree: "Bachelor of Computer Engineering",
      period: "June 2022",
      grade: "CGPA: 9.7/10"
    }
  ],
  projects: [
    {
      title: "Secure Doc Vault",
      subtitle: "Full-Stack Java Web Application",
      description: "Designed and developed a full-stack web application with a Spring Boot backend and Angular frontend. Implemented PII redaction using AWS Textract and Comprehend. Stored original and redacted documents in AWS S3 with metadata in DynamoDB. JWT-based authentication.",
      technologies: ["Java 17", "Spring Boot 3", "Angular 20", "AWS", "DynamoDB", "Textract", "Comprehend"],
      links: {
        githubBackend: "https://github.com/UnnatiBhalekar/secure-doc-vault-backend",
        githubFrontend: "https://github.com/UnnatiBhalekar/secure-doc-vault-frontend"
      }
    },
    {
      title: "JWT Token Inspector",
      subtitle: "Backend Utility Service",
      description: "Developed a lightweight Spring Boot REST service to decode and inspect JSON Web Tokens. Implemented endpoints to extract token claims, issuer, expiry, and signature metadata.",
      technologies: ["Java", "Spring Boot", "JWT", "REST APIs"],
      links: {
        github: "https://github.com/UnnatiBhalekar/jwt-token-inspector"
      }
    },
    {
      title: "Privacy-Preserving Secure Data Pipeline",
      subtitle: "MSc Practicum Project",
      description: "Designed and built a hybrid batch-stream data processing system using Apache Spark and Apache Storm. Implemented dynamic routing logic and anonymization techniques.",
      technologies: ["Java", "Python", "Apache Spark", "Apache Storm", "Kafka", "Docker"],
      links: {
        paper: "https://drive.google.com/file/d/1eqSbl4xemINo2iHL_qfIcQggo_LDtTri/view?usp=sharing"
      }
    }
  ],
  skills: {
    primary: ["Java", "Spring Boot", "RESTful API Development", "Microservices", "Angular", "TypeScript", "SQL"],
    secondary: ["AWS (S3, EC2, DynamoDB)", "Docker", "Git", "Maven", "CI/CD (GitHub Actions)"],
    practices: ["Unit & Integration Testing", "Agile/Scrum", "API Design", "Authentication (JWT)", "Documentation"]
  }
};
