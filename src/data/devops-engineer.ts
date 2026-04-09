export const profile = {
    name: "Muhammad Noor Azami",
    nickname: "Ami / AmiQT",
    role: "AI-Enhanced Systems & Cloud Engineer",
    tagline: "Building resilient infrastructure through automation and AI-assisted engineering.",
    status: "IT Support Intern @ DayOne | Final Year IT Student @ UTHM (Graduating 2026)",
    internship: "Active IT Support Intern at DayOne (Since Feb 2026)",
    location: ["Remote", "Hybrid", "On-site"],
    bio: "Architecting scalable cloud infrastructure and automating mission-critical deployment pipelines. Specialized in Zero-Trust security, CI/CD orchestration, and AI-accelerated dev workflows.",
    avatar: "assets/profile.webp",
    resume: "assets/Fullstack_Developer_Intern.pdf",
    github: "https://github.com/AmiQT",
    portfolio: "https://amiqt.github.io/portfolio"
};

export const techStack = {
    infrastructure: [
        { name: "AWS EC2 & Networking", icon: "☁️", color: "orange", level: 75 },
        { name: "Docker & Containerization", icon: "🐳", color: "blue", level: 80 },
        { name: "Cloudflare Zero Trust", icon: "🔒", color: "orange", level: 85 },
        { name: "Kubernetes (K8s) [Roadmap]", icon: "☸️", color: "blue", level: 40 },
        { name: "Ansible (IaC) [Roadmap]", icon: "📜", color: "red", level: 35 }
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
        title: "Enterprise IT Asset Auditing & Automation",
        type: "Data Ops & Automations",
        description: "Engineered a robust Python automation suite that eliminated 90% of manual hardware tracking toil for 200+ employees. Designed a self-cleaning dataset architecture with smart rate-limiting to orchestrate high-reliability notification blasts.",
        architecture: [
            "Data Ingestion → Optimized Pandas batch extraction",
            "Sanitization → Differential user removal from master CSV",
            "Broadcasting → Win32COM Outlook API abstraction",
            "Throttle Control → Intelligent Rate Limiting logic",
            "Observability → Real-time synchronous audit logging"
        ],
        highlights: [
            "Achieved 90% reduction in manual audit toil",
            "High-integrity data sanitization engine",
            "Architected for AI-assisted error handling",
            "Synchronous accountability & observability trail"
        ],
        tech: ["Python", "Pandas", "Win32COM", "Data Ops", "AI Assisted"],
        icon: "⚙️",
        color: "green",
        link: "projects/it-asset-automation"
    },
    {
        title: "Student Talent Profiling Ecosystem",
        type: "Zero-Trust Cloud Architecture",
        description: "Architected a secure, multi-tier deployment ecosystem moving from local development to production via automated CI/CD pipelines, secured behind Zero-Trust tunnels.",
        architecture: [
            "CI: GitHub Actions (Build Optimization & Layer Caching)",
            "Registry: GHCR (Encrypted Private Image Management)",
            "CD: Automated SSH Deployment with zero-exposure keys",
            "Runtime: Docker Container Orchestration & Health Probes",
            "Ingress: Cloudflare Zero Trust Tunnels (No Open Ports)"
        ],
        highlights: [
            "Eliminated all open firewall ports for production traffic",
            "Implemented multi-architecture Docker distribution",
            "Automated health-probe recovery & observability",
            "Secured via Enterprise-grade Cloudflare access policies"
        ],
        tech: ["AWS", "GitHub Actions", "Docker", "Cloudflare Zero Trust"],
        icon: "🎓",
        color: "cyan",
        link: "role-devops-engineer/architecture/student-talent-profiling",
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
    },
    {
        title: "Resume AI SaaS Infrastructure",
        type: "Cloud-Native Scalability",
        description: "Designed a decoupled cloud-native architecture for high availability, utilizing managed databases and edge network distribution for global latency reduction.",
        architecture: [
            "Edge Serving → Vercel Global Content Delivery",
            "Compute → Scalable PaaS (Railway) with automatic re-scaling",
            "Persistence → Managed PostgreSQL with connection pooling",
            "AI Inference → Managed API gateways for LLM processing"
        ],
        highlights: [
            "Zero-downtime deployment pipelines for microservices",
            "Achieved <200ms global latency for UI rendering",
            "Scalable compute handles surge traffic seamlessly",
            "Engineered with AI-assisted code optimization flow"
        ],
        tech: ["Vercel", "Railway", "Supabase", "FastAPI", "AI Integration"],
        icon: "📄",
        color: "orange",
        link: "role-devops-engineer/architecture/ai-resume-builder",
        infraStatus: { frontend: "Active", backend: "On-Demand (FinOps Optimized)" }
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
    { command: "cat /etc/role", output: "AI-Enhanced Systems & Cloud Engineering" },
    { command: "cloudflared tunnel status", output: "✓ Tunnel: ONLINE | Active Policies: Zero-Trust Identity" },
    { command: "kubectl get nodes", output: "minikube-node-01  Ready   <none>   3d (Learning Context)" },
    { command: "ai --analyze-workflow", output: "✓ Optimization: Enabled | Efficiency Gain: 40% (via AI-Assisted Dev)" }
];
