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
    github: "https://github.com/AmiQT",
    linkedin: "https://www.linkedin.com/in/noor-azami/",
    portfolio: "https://amiqt.github.io/portfolio"
};

export const techStack = {
    languages: [
        { name: "Go", devicon: "devicon-go-plain" },
        { name: "Python", devicon: "devicon-python-plain" },
        { name: "Java", devicon: "devicon-java-plain" },
        { name: "C#", devicon: "devicon-csharp-plain" },
        { name: "TypeScript", devicon: "devicon-typescript-plain" },
        { name: "JavaScript", devicon: "devicon-javascript-plain" },
        { name: "Dart", devicon: "devicon-dart-plain" }
    ],
    frontend: [
        { name: "React", devicon: "devicon-react-plain" },
        { name: "Flutter", devicon: "devicon-flutter-plain" },
        { name: "Astro", devicon: "devicon-astro-plain" },
        { name: "Tailwind CSS", devicon: "devicon-tailwindcss-plain" },
        { name: "Figma", devicon: "devicon-figma-plain" }
    ],
    infrastructure: [
        { name: "AWS EC2 & Networking", devicon: "devicon-amazonwebservices-plain" },
        { name: "Docker & Containerization", devicon: "devicon-docker-plain" },
        { name: "Cloudflare Zero Trust", devicon: "" },
        { name: "Terraform (IaC)", devicon: "devicon-terraform-plain" },
        { name: "Kubernetes (K8s)", devicon: "devicon-kubernetes-plain" },
        { name: "Ansible (IaC)", devicon: "devicon-ansible-plain" },
        { name: "Helm", devicon: "devicon-helm-plain" },
        { name: "NGINX Ingress", devicon: "devicon-nginx-plain" },
        { name: "k3d / k3s", devicon: "" },
        { name: "Redis", devicon: "devicon-redis-plain" }
    ],
    cicd: [
        { name: "GitHub Actions", devicon: "devicon-githubactions-plain" },
        { name: "GHCR", devicon: "devicon-github-plain" },
        { name: "Jenkins", devicon: "devicon-jenkins-plain" },
        { name: "Health Checks", devicon: "" },
        { name: "Zero Downtime", devicon: "" }
    ],
    observability: [
        { name: "Prometheus", devicon: "devicon-prometheus-plain" },
        { name: "Grafana", devicon: "devicon-grafana-plain" },
        { name: "Kube-Prometheus-Stack", devicon: "" },
        { name: "Micrometer", devicon: "" },
        { name: "Logstash", devicon: "devicon-logstash-plain" }
    ],
    backend: [
        { name: "FastAPI", devicon: "devicon-fastapi-plain" },
        { name: "Spring Boot", devicon: "devicon-spring-plain" },
        { name: "Spring Security", devicon: "devicon-spring-plain" },
        { name: "Supabase", devicon: "devicon-supabase-plain" },
        { name: "PostgreSQL", devicon: "devicon-postgresql-plain" },
        { name: "Firebase", devicon: "devicon-firebase-plain" },
        { name: "Redis", devicon: "devicon-redis-plain" },
        { name: "SQLAlchemy", devicon: "" }
    ],
    messaging: [
        { name: "Kafka", devicon: "devicon-apachekafka-plain" }
    ],
    ai: [
        { name: "Gemini AI", devicon: "devicon-google-plain" },
        { name: "LangChain", devicon: "" },
        { name: "LangGraph", devicon: "" },
        { name: "Ollama", devicon: "" },
        { name: "Vision AI", devicon: "" },
        { name: "Agentic AI", devicon: "" },
        { name: "RAG Systems", devicon: "" }
    ]
};

export const certifications = [
    {
        title: "Google Cloud Fundamentals: Core Infrastructure",
        issuer: "Google Cloud",
        icon: "cloud",
        color: "blue",
        year: "2024",
        url: "https://www.coursera.org/account/accomplishments/verify/I9D2QHHU433I"
    },
    {
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco Networking Academy",
        icon: "globe",
        color: "cyan",
        year: "2024",
        url: "https://www.credly.com/badges/9575fc0c-f43d-4870-b20f-d2b4546b2bc6/linked_in_profile"
    },
    {
        title: "Google IT Support Professional",
        issuer: "Google",
        icon: "wrench",
        color: "green",
        year: "2023",
        url: "https://www.coursera.org/account/accomplishments/specialization/TJF7D2MPEIKO"
    },
    {
        title: "Google IT Automation with Python",
        issuer: "Google",
        icon: "python",
        color: "blue",
        year: "2024",
        url: "https://www.coursera.org/account/accomplishments/specialization/UGVS6JYSF2A3"
    }
];

export type ProjectCategory = "devops" | "dev" | "it";
export type ProjectStatus = "active" | "intern" | "archived";

export interface Project {
    title: string;
    type: string;
    description: string;
    category: ProjectCategory;
    status: ProjectStatus;
    tech: string[];
    icon: string;
    link: string;
    github?: string;
    liveUrl?: string;
    architecture?: string[];
}

export const allProjects: Project[] = [
    {
        title: "Central-Infra",
        type: "Kubernetes Sandbox Architecture",
        description: "Modular, multi-tier k3d cluster simulating production environments. Provisioned via Terraform across 4 layers with NGINX Ingress and Prometheus/Grafana stack.",
        category: "devops",
        status: "active",
        tech: ["Kubernetes", "Terraform", "Helm", "k3d", "Prometheus", "Grafana"],
        icon: "kubernetes",
        link: "projects/central-infra",
        github: "https://github.com/AmiQT/layer4-workloads",
        architecture: [
            "IaC: Terraform (4-layer isolation strategy)",
            "Orchestration: k3d (1 server, 2 agent nodes)",
            "Networking: NGINX Ingress Controller via Helm",
            "Observability: Kube-Prometheus-Stack (Metrics & Visualization)",
            "Security: RBAC, Isolated Namespaces, ServiceAccounts"
        ],
    },
    {
        title: "Go-Lumina",
        type: "High-Performance Reverse Proxy",
        description: "Engineered a high-concurrency reverse proxy in Go handling up to 7,500 RPS. Features multi-stage Docker builds for minimal footprint (~15MB Alpine image).",
        category: "devops",
        status: "active",
        tech: ["Go", "Docker", "Singleflight", "LRU Cache", "Rate Limiting"],
        icon: "lightning",
        link: "projects/go-lumina",
        github: "https://github.com/AmiQT/go-lumina",
    },
    {
        title: "Gopher-Ops",
        type: "AI SRE Control Bot",
        description: "Secure AI ChatOps bot (Go + Gemini 2.5) for Docker management and OS telemetry. Implements Zero-Trust identity gating via Telegram ID verification.",
        category: "devops",
        status: "active",
        tech: ["Go", "Gemini API", "Docker SDK", "Terraform", "GitHub Actions"],
        icon: "robot",
        link: "projects/gopher-ops",
        github: "https://github.com/AmiQT/Gopher-Ops",
    },
    {
        title: "Student Talent Profiling",
        type: "AI-Powered Full-Stack Platform",
        description: "End-to-end UTHM student talent profiling platform. Agentic AI (Gemini + LangGraph) converses in Bahasa Melayu, auto-tags skills from certificates, and generates PDF achievement reports. Ships Flutter mobile app, FastAPI backend, and Astro analytics dashboard.",
        category: "dev",
        status: "active",
        tech: ["Flutter", "FastAPI", "Supabase", "Gemini + LangGraph", "Astro", "Cloudinary"],
        icon: "graduation",
        link: "projects/student-talent-profiling",
        github: "https://github.com/AmiQT/student-talent-profling-app",
        liveUrl: "https://student-talent-profiling-app.vercel.app/",
    },
    {
        title: "Web-Pulse",
        type: "Uptime Monitoring System",
        description: "Fast and reliable website monitoring tool using Python/FastAPI. Simulates normal browser traffic to bypass WAFs and delivers real-time Telegram alerts for downtime.",
        category: "devops",
        status: "active",
        tech: ["Python", "FastAPI", "Telegram API", "Asyncio", "BeautifulSoup4"],
        icon: "antenna",
        link: "projects/web-pulse",
        github: "https://github.com/AmiQT/web-pulse"
    },
    {
        title: "AI Resume Builder",
        type: "Full-Stack SaaS",
        description: "AI-powered resume builder using Gemini to optimize resumes based on job descriptions. Features professional templates, PDF/Word export, and ATS optimization.",
        category: "dev",
        status: "active",
        tech: ["React 18", "FastAPI", "Supabase", "Gemini AI"],
        icon: "document",
        link: "projects/ai-resume-builder",
        github: "https://github.com/AmiQT/ai-resume",
        liveUrl: "https://resume-ai-tawny-seven.vercel.app"
    },
    {
        title: "DayOne Deploy",
        type: "Enterprise Automation Suite",
        description: "C# (.NET 10) automation suite for zero-touch laptop provisioning at DayOne internship. Features offline network staging, resilient orchestration, and real-time observability.",
        category: "it",
        status: "intern",
        tech: ["C#", ".NET 10", "PowerShell", "WMI", "Spectre.Console"],
        icon: "monitor",
        link: "projects/dayone-deploy",
        github: "https://github.com/AmiQT/dayone-deploy"
    },
    {
        title: "FinTrack Pro",
        type: "Enterprise Payroll & HR Management System",
        description: "Enterprise-grade Payroll & HR platform with automated EPF/SOCSO/PCB calculations, leave approval workflows, and PDF payslip generation. Full CI/CD with 42 Testcontainers-backed tests, Prometheus telemetry, and Bucket4j rate limiting.",
        category: "dev",
        status: "active",
        tech: ["Java 21", "Spring Boot", "React 18", "PostgreSQL", "Redis", "JWT", "Docker", "GitHub Actions"],
        icon: "document",
        link: "projects/fin-track",
        github: "https://github.com/AmiQT/fin-track"
    },
    {
        title: "Infra-Pulse",
        type: "Production-Grade Infrastructure Health Microservice",
        description: "Java 21 microservice simulating infrastructure health monitoring with real-time SRE metrics. Dual CI pipeline (Jenkins + GitHub Actions), k3d Kubernetes via Helm, Terraform IaC, and full Prometheus/Grafana observability stack with custom Micrometer metrics.",
        category: "devops",
        status: "active",
        tech: ["Java 21", "Spring Boot", "Kubernetes", "Helm", "Terraform", "Jenkins", "GitHub Actions", "Prometheus", "Grafana", "Docker"],
        icon: "antenna",
        link: "projects/infra-pulse",
        github: "https://github.com/AmiQT/infra-pulse"
    },
    {
        title: "Home Anywhere",
        type: "Open-Source Homestay Booking Platform",
        description: "Self-hostable homestay booking platform with multi-step booking flow, Stripe deposit payments (30% to confirm), Google Calendar sync, and a built-in no-code CMS. Deployable in one command via Docker Compose.",
        category: "dev",
        status: "active",
        tech: ["Next.js 14", "Laravel 11", "TypeScript", "Tailwind CSS", "Stripe", "Google Calendar API", "Docker"],
        icon: "globe",
        link: "projects/home-anywhere",
        github: "https://github.com/AmiQT/home-anywhere"
    }
];

