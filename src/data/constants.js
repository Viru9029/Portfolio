export const Bio = {
  name: "Virendra Kate",
  roles: ["Cloud Software Engineer at IBM | Ex-ICS"],
  description:
    "Experienced Golang Developer with 3+ years of experience building and operating cloud-native applications and IBM Cloud PaaS services. Proven expertise in Golang microservices, REST/gRPC APIs (35+), and platform automation on Kubernetes/OpenShift (ROKS). Strong background in CI/CD automation using IBM OnePipeline, Mend security scanning, observability, zero-downtime deployments, worker node orchestration, cluster health monitoring, and security/compliance automation. Actively involved in 24×7 SRE/on-call operations and PagerDuty.",
  github: "https://github.com/Viru9029",
  resume:
    "https://drive.google.com/file/d/1UqS82sJvbxqM9H0TPJO0r1_-mW7i270O/view",
  linkedin: "https://www.linkedin.com/in/virendrakate/",
  email: "vbkate9@gmail.com",
};

/* ===================== SKILLS ===================== */

export const skills = [
  {
    title: "Languages, Frameworks & Databases",
    skills: [
      { name: "Golang", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
      { name: "MySQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "Gin", image: "https://avatars.githubusercontent.com/u/7894478?s=200&v=4" },
      { name: "gRPC", image: "https://www.vectorlogo.zone/logos/grpcio/grpcio-icon.svg" },
    ],
  },

  {
    title: "Cloud, DevOps & Platform",
    skills: [
      { name: "IBM Cloud", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },

      /* ✅ FIXED */
      { name: "OpenShift (ROKS)", image: "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg" },

      { name: "Kubernetes", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },

      /* ✅ IBM OnePipeline → IBM logo */
      { name: "IBM OnePipeline", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },

      { name: "Tekton", image: "https://raw.githubusercontent.com/cncf/artwork/master/projects/tekton/icon/color/tekton-icon-color.svg" },
      { name: "Jenkins", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg" },

      /* ✅ FIXED */
      { name: "PagerDuty", image: "https://www.vectorlogo.zone/logos/pagerduty/pagerduty-icon.svg" },
    ],
  },

  {
    title: "Observability & Security",
    skills: [
      /* ✅ FIXED */
      { name: "Sysdig", image: "https://www.vectorlogo.zone/logos/sysdig/sysdig-icon.svg" },

      /* ✅ FIXED */
      { name: "LogDNA", image: "https://www.vectorlogo.zone/logos/logdna/logdna-icon.svg" },

      /* ✅ FIXED (IBM Ospray) */
      { name: "Ospray", image: "https://www.ibm.com/content/dam/adobe-cms/solutions/it-automation/images/ospray.svg" },

      { name: "RBAC", image: "https://cdn-icons-png.flaticon.com/512/942/942751.png" },
      { name: "JWT", image: "https://jwt.io/img/logo.svg" },
      { name: "PAG", image: "https://cdn-icons-png.flaticon.com/512/2917/2917990.png" },
    ],
  },
];

/* ===================== EXPERIENCE ===================== */

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Cloud Software Engineer",
    company: "IBM, Bengaluru, India",
    date: "Sep 2025 - Present",
    desc: `Project: Dreadnought (PaaS)<br>
    • Designed and developed <b>dreadnought-worker-updater (dn-updater)</b> for <b>ROKS</b> ensuring <b>zero downtime</b>.<br>
    • Automated rolling worker node updates with health validation.<br>
    • Implemented cluster & workload health checks.<br>
    • PostgreSQL-backed orchestration and PagerDuty alerts.<br>
    • Worked in <b>PAG-secured clusters</b> following IBM Cloud security standards.`,
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Golang Developer",
    company: "IBM (Payroll: Infinite Computer Solution)",
    date: "Dec 2022 - Sep 2025",
    desc: `• Built 35+ REST/gRPC APIs for IBM Cloud IaaS.<br>
    • CI/CD with IBM OnePipeline, Docker & Kubernetes.<br>
    • Reduced latency by 40%.<br>
    • Automated IaaS security achieving 100% audit compliance.`,
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    role: "Junior Engineer",
    company: "SJ Contracts Pvt Ltd, Pune",
    date: "Dec 2020 - Aug 2021",
    desc: `• Site coordination and technical documentation.<br>
    • Assisted project planning and execution.`,
  },
];

/* ===================== EDUCATION ===================== */

export const education = [
  {
    id: 0,
    img: "https://cdac.in/img/C-DAC.jpg", // ✅ FIXED
    school: "Centre for Development of Advanced Computing (C-DAC)",
    date: "2022",
    degree: "PG Diploma in Artificial Intelligence",
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Savitribai_Phule_Pune_University_Logo.png", // ✅ FIXED
    school: "Savitribai Phule Pune University",
    date: "2018 - 2021",
    degree: "Bachelor of Engineering",
  },
];

/* ===================== TIMELINE ===================== */

export const TimeLineData = [
  { year: 2018, text: "Started Bachelor of Engineering" },
  { year: 2020, text: "Junior Engineer – SJ Contracts Pvt Ltd" },
  { year: 2022, text: "PG Diploma in AI – C-DAC" },
  { year: 2022, text: "Joined IBM (via Infinite Computer Solution)" },
  { year: 2025, text: "IBM Cloud PaaS – Dreadnought (ROKS)" },
];
