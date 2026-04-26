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
        { name: "Terraform (IaC)", icon: "🏗️", color: "purple", level: 80 },
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
    },
    {
        title: "Google IT Automation with Python",
        issuer: "Google",
        icon: "🐍",
        color: "blue",
        year: "2024"
    }
];

export const featuredProjects = [
    {
        title: "Central-Infra",
        type: "Kubernetes Sandbox Architecture",
        description: "Modular, multi-tier k3d cluster simulating production environments. Provisioned via Terraform across 4 layers (Cluster, Platform, Apps, Workloads) with NGINX Ingress and Prometheus/Grafana stack.",
        architecture: [
            "IaC: Terraform (4-layer isolation strategy)",
            "Orchestration: k3d (1 server, 2 agent nodes)",
            "Networking: NGINX Ingress Controller via Helm",
            "Observability: Kube-Prometheus-Stack (Metrics & Visualization)",
            "Security: RBAC, Isolated Namespaces, ServiceAccounts"
        ],
        highlights: [
            "Production-grade local cluster simulation",
            "Modular infrastructure-as-code design",
            "Full observability into workload health",
            "Scalable networking via NGINX Ingress"
        ],
        tech: ["Kubernetes", "Terraform", "Helm", "k3d", "Prometheus", "Grafana"],
        icon: "☸️",
        color: "blue",
        link: "role-devops-engineer/architecture/central-infra",
        github: "https://github.com/AmiQT/layer4-workloads"
    },
    {
        title: "Go-Lumina",
        type: "High-Performance Proxy",
        description: "Engineered a high-concurrency reverse proxy in Go (1.26+) handling up to 7,500 RPS. Features multi-stage Docker builds for minimal footprint (~15MB Alpine image).",
        architecture: [
            "Concurrency: Custom Go worker-pools (1M concurrent reqs handling)",
            "Caching: Thread-Safe LRU Cache (hashicorp/golang-lru)",
            "Reliability: Singleflight, Stale-While-Revalidate (SWR)",
            "Security: Rate Limiting & TLS Handshake Optimization",
            "Packaging: Docker Multi-stage (UPX compressed)"
        ],
        highlights: [
            "Sustained 5,000-7,500 RPS performance",
            "Significant reduction in backend load via SWR",
            "Ultra-lean production image management",
            "Production-ready rate limiting & security"
        ],
        tech: ["Go", "Docker", "Singleflight", "LRU Cache", "Rate Limiting"],
        icon: "⚡",
        color: "cyan",
        link: "projects/go-lumina"
    },
    {
        title: "Gopher-Ops",
        type: "AI SRE Control Bot",
        description: "Secure AI ChatOps bot (Go + Gemini 2.5) for Docker management and OS telemetry. Implements Zero-Trust identity gating via Telegram ID verification.",
        architecture: [
            "AI: Gemini 2.5 (Natural language intent parsing)",
            "Telemetry: gopsutil & Docker SDK integration",
            "Execution: HITL (Human-in-the-loop) action buttons",
            "Sec: Zero-Trust ID gating via Telegram API",
            "CI: GitHub Actions (Testing & TF Validation)"
        ],
        highlights: [
            "Seamless natural language infra management",
            "Secure, gateway-controlled remote execution",
            "Real-time host & container telemetry",
            "Automated CI/CD for infra validation"
        ],
        tech: ["Go", "Gemini API", "Docker SDK", "Terraform", "GitHub Actions"],
        icon: "🤖",
        color: "indigo",
        link: "projects/gopher-ops",
        github: "https://github.com/AmiQT/Gopher-Ops"
    },
    {
        title: "Student Talent Profiling Pipeline",
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
    }
];

export const skills = [
    {
        category: "Cloud & Infrastructure",
        items: [
            "AWS EC2 Deployment",
            "Docker Containerization",
            "Cloud Platform Management",
            "Terraform (Infrastructure as Code)",
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
