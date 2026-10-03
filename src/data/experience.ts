export interface Experience {
    title: string;
    organization: string;
    duration: string;
    icon: string;
    responsibilities: string[];
}

export const experiencesData: Experience[] = [
    {
        title: "IT Support Engineer",
        organization: "DayOne",
        duration: "August 2026 - Present",
        icon: "wrench",
        responsibilities: [
            "Supported mission-critical data center IT operations and server infrastructure, maintaining high-availability uptime standards and rapid operational incident resolution.",
            "Architected a Compliance-as-Code engine using Python to audit 200+ endpoints, proactively reducing vulnerability blast radius and configuration drift."
        ]
    },
    {
        title: "IT Support Intern",
        organization: "DayOne",
        duration: "February 2026 - August 2026",
        icon: "wrench",
        responsibilities: [
            "Implemented Standardized Configuration Management for L1 support systems via PowerShell, accelerating provisioning speed across local network segments.",
            "Administered Identity & Access Management (IAM) flows via Active Directory and M365, adhering to strict enterprise security and onboarding protocols.",
            "Resolved 150+ L1/L2 hardware, OS, and networking incidents, maintaining a 98%+ first-contact resolution SLA."
        ]
    },
    {
        title: "Vice President, Information Technology Club",
        organization: "UTHM",
        duration: "2023 - 2025",
        icon: "target",
        responsibilities: [
            "Streamlined operational workflows for 17 major events, implementing project management best practices across a large student team.",
            "Spearheaded leadership training modules, focusing on reliable task execution and accountability frameworks.",
            "Ensured zero-failure rate in event logistics through rigorous pre-flight planning and cross-departmental orchestration."
        ]
    }
];
