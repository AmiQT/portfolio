export const profile = {
    name: "Muhammad Noor Azami",
    nickname: "Ami / AmiQT",
    role: "DevOps Engineer",
    tagline: "AI-Enhanced Developer & Aspiring DevOps Engineer",
    status: "Final Year IT Student @ UTHM (Graduating 2026)",
    internship: "Incoming IT Digital Intern at DayOne (Feb 2026)",
    location: ["Remote", "Hybrid", "On-site"],
    bio: "Building scalable cloud infrastructure and automating deployment pipelines. Passionate about Infrastructure as Code, CI/CD, and container orchestration.",
    avatar: "assets/profile.webp",
    resume: "assets/Fullstack_Developer_Intern.pdf",
    github: "https://github.com/AmiQT",
    portfolio: "https://amiqt.github.io/portfolio"
};

export const techStack = {
    infrastructure: [
        { name: "AWS EC2 (t2/t3 micro)", icon: "☁️", color: "orange", level: 75 },
        { name: "Cloudflare Tunnel", icon: "🔒", color: "orange", level: 80 },
        { name: "Docker", icon: "🐳", color: "blue", level: 80 },
        { name: "Railway", icon: "🚂", color: "purple", level: 80 }
    ],
    cicd: [
        { name: "GitHub Actions (Auto-Deploy)", icon: "⚡", color: "green", level: 85 },
        { name: "GHCR", icon: "📦", color: "blue", level: 80 },
        { name: "Health Checks", icon: "✅", color: "green", level: 85 },
        { name: "Zero Downtime", icon: "🔄", color: "cyan", level: 75 }
    ],
    backend: [
        { name: "FastAPI", icon: "⚡", color: "teal", level: 85 },
        { name: "Supabase", icon: "🔥", color: "green", level: 80 },
        { name: "PostgreSQL", icon: "🐘", color: "blue", level: 75 },
        { name: "Firebase", icon: "🔥", color: "orange", level: 70 }
    ],
    ai: [
        { name: "Gemini AI", icon: "🧠", color: "purple", level: 80 },
        { name: "Agentic AI", icon: "🤖", color: "cyan", level: 75 },
        { name: "RAG Systems", icon: "📚", color: "blue", level: 70 }
    ]
};

export const certifications = [
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud",
        icon: "☁️",
        color: "blue",
        year: "2024"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        icon: "🌐",
        color: "cyan",
        year: "2024"
    },
    {
        title: "Google IT Support Professional",
        issuer: "Google",
        icon: "🛠️",
        color: "green",
        year: "2023"
    }
];

export const featuredProjects = [
    {
        title: "Student Talent Profiling App (FYP)",
        type: "Zero-Trust DevSecOps Pipeline",
        description: "Enterprise-grade deployment ecosystem. Features an automated CI/CD pipeline moving code from GitHub to AWS via GHCR, secured behind Cloudflare Zero Trust tunnels.",
        architecture: [
            "Git Push → GitHub Actions (Build & Cache)",
            "Push Image → GHCR (Private Registry)",
            "SSH Remote → AWS EC2 (via Appleboy Action)",
            "Docker Pull → Container Restart & Health Check",
            "Public Access → Cloudflare Tunnel (No Open Ports)"
        ],
        highlights: [
            "Zero Open Ports (AWS Security Group only allows SSH)",
            "Multi-arch Docker Build (linux/amd64)",
            "Automated Health Probes (/health endpoint)",
            "GHCR Integration over Docker Hub"
        ],
        tech: ["AWS EC2", "GHCR", "GitHub Actions", "Cloudflare Tunnel", "Docker"],
        icon: "🎓",
        color: "cyan",
        link: "role-devops-engineer/architecture/student-talent-profiling"
    },
    {
        title: "Resume AI (SaaS)",
        type: "Scalable Architecture",
        description: "Production-ready SaaS platform with decoupled frontend and backend architecture. Implements policy compliance and multi-tenant infrastructure deployed across multiple cloud providers.",
        architecture: [
            "React Frontend → Vercel (Edge Network)",
            "FastAPI Backend → Railway (Serverless)",
            "PostgreSQL → Supabase (Managed DB)",
            "Gemini API → AI Processing"
        ],
        highlights: [
            "Frontend and backend independently scalable",
            "Zero-downtime deployments with Railway",
            "Global CDN distribution via Vercel",
            "Auto-scaling based on traffic"
        ],
        tech: ["Vercel", "Railway", "FastAPI", "Supabase", "Docker"],
        icon: "📄",
        color: "orange",
        link: "role-devops-engineer/architecture/ai-resume-builder"
    },
    {
        title: "Smart Attendance System",
        type: "Firebase Integration",
        description: "Real-time attendance tracking system leveraging Firebase's cloud infrastructure for instant synchronization.",
        architecture: [
            "Mobile App → Firebase Auth",
            "Firestore → Real-time Database",
            "Cloud Functions → Business Logic",
            "Firebase Hosting → Admin Dashboard"
        ],
        highlights: [
            "Real-time data synchronization",
            "Serverless cloud functions",
            "Automatic scaling with Firebase",
            "Secure authentication system"
        ],
        tech: ["Firebase", "Cloud Functions", "Firestore", "Flutter"],
        icon: "📱",
        color: "yellow",
        link: "role-devops-engineer/architecture/smart-attendance"
    }
];

export const skills = [
    {
        category: "Cloud & Infrastructure",
        items: [
            "AWS EC2 Deployment",
            "Docker Containerization",
            "Cloud Platform Management",
            "Infrastructure as Code",
            "Load Balancing & Auto-scaling"
        ]
    },
    {
        category: "CI/CD & Automation",
        items: [
            "GitHub Actions Workflows",
            "Automated Testing Pipelines",
            "Continuous Deployment",
            "Docker Compose Orchestration",
            "Build & Release Automation"
        ]
    },
    {
        category: "Backend & Databases",
        items: [
            "FastAPI Development",
            "PostgreSQL Management",
            "Supabase Integration",
            "RESTful API Design",
            "Database Optimization"
        ]
    },
    {
        category: "AI & Innovation",
        items: [
            "Agentic AI Systems",
            "RAG Implementation",
            "Gemini AI Integration",
            "ML Model Deployment",
            "AI-Powered Automation"
        ]
    }
];

export const terminalCommands = [
    { command: "whoami", output: "Muhammad Noor Azami (AmiQT)" },
    { command: "cat /etc/role", output: "DevOps Engineer & Cloud Infrastructure Specialist" },
    { command: "cloudflared tunnel run fyp-dashboard", output: "✓ Tunnel connected | https://fyp.amiqt.tech" },
    { command: 'docker ps --format "table {{.Names}}\\t{{.Status}}"', output: "fyp-backend     Up 2 days (healthy)" },
    { command: "gh workflow run deploy.yml", output: "✓ Workflow triggered | Building & deploying to AWS..." }
];
