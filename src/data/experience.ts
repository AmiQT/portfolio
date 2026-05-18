export interface Experience {
  title: string;
  organization: string;
  duration: string;
  icon: string;
  color: string;
  responsibilities: string[];
}

export const experiencesData = {
  devops: [
    {
      title: "IT Support Intern",
      organization: "DayOne",
      duration: "February 2026 - Present",
      icon: "☁️",
      color: "emerald",
      responsibilities: [
        "Architected a Compliance-as-Code engine using Python to audit 200+ endpoints, minimizing security risks through automated tracking.",
        "Implemented Standardized Configuration Management for L1 support systems via PowerShell, ensuring systemic consistency across the office network.",
        "Administered Identity & Access Management (IAM) flows via Active Directory and M365, adhering to strict enterprise security and onboarding protocols.",
        "Optimized internal deployment workflows for IT support tools, utilizing health-check logic and standardized logging."
      ]
    },
    {
      title: "Vice President, Information Technology Club",
      organization: "UTHM",
      duration: "2023 - 2025",
      icon: "🎯",
      color: "blue",
      responsibilities: [
        "Streamlined operational workflows for 17 major events, implementing project management best practices across a large student team.",
        "Spearheaded leadership training modules, focusing on reliable task execution and accountability frameworks.",
        "Ensured zero-failure rate in event logistics through rigorous pre-flight planning and cross-departmental orchestration."
      ]
    }
  ]
};
