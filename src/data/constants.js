export const Bio = {
  name: "Virendra Kate",
  roles: [
    "Experienced Golang Developer (3+ years)",
    "Cloud Software Engineer – IBM Cloud PaaS",
    "Kubernetes / OpenShift (ROKS) Platform Automation",
  ],
  description:
    "Experienced Golang Developer with 3+ years of experience building and operating cloud-native applications and IBM Cloud PaaS services. Proven expertise in Golang microservices, REST/gRPC APIs (35+), and platform automation on Kubernetes/OpenShift (ROKS). Strong background in CI/CD automation using IBM OnePipeline, Mend security scanning, observability, zero-downtime deployments, worker node orchestration, cluster health monitoring, and security/compliance automation. Actively involved in 24×7 SRE/on-call operations and PagerDuty.",
  github: "https://github.com/Viru9029",
  resume:
    "https://drive.google.com/file/d/1UqS82sJvbxqM9H0TPJO0r1_-mW7i270O/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/virendrakate/",
  email: "vbkate9@gmail.com",
};

export const skills = [
  {
    title: "Languages, Frameworks & Databases",
    skills: [
      { name: "Golang", image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "SQL", image: "https://symbols.getvecta.com/stencil_28/61_sql-database-generic.90b41636a8.png" },
      { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "MySQL", image: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
      { name: "MongoDB", image: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" },
      { name: "Gin", image: "https://avatars.githubusercontent.com/u/7894478?s=280&v=4" },
      { name: "gRPC", image: "https://www.vectorlogo.zone/logos/grpcio/grpcio-icon.svg" },
    ],
  },
  {
    title: "Cloud, DevOps & Platform",
    skills: [
      { name: "IBM Cloud", image: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Symbol.jpg" },
      { name: "Kubernetes", image: "https://www.svgrepo.com/show/376331/kubernetes.svg" },
      { name: "OpenShift (ROKS)", image: "https://www.svgrepo.com/show/354467/openshift.svg" },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "IBM OnePipeline", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/IBM_logo.svg" },
      { name: "Tekton", image: "https://avatars.githubusercontent.com/u/47602533?s=280&v=4" },
      { name: "Jenkins", image: "https://www.svgrepo.com/show/353929/jenkins.svg" },
      { name: "PagerDuty", image: "https://upload.wikimedia.org/wikipedia/commons/0/0a/PagerDuty_logo.svg" },
    ],
  },
  {
    title: "Observability & Security",
    skills: [
      { name: "Sysdig", image: "https://avatars.githubusercontent.com/u/31815447?s=280&v=4" },
      { name: "LogDNA", image: "https://avatars.githubusercontent.com/u/34378917?s=280&v=4" },
      { name: "Ospray", image: "https://www.ibm.com/content/dam/adobe-cms/solutions/it-automation/images/ospray.svg" },
      { name: "RBAC", image: "https://cdn-icons-png.flaticon.com/512/942/942751.png" },
      { name: "JWT", image: "https://jwt.io/img/logo.svg" },
      { name: "PAG", image: "https://cdn-icons-png.flaticon.com/512/2917/2917990.png" },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Symbol.jpg",
    role: "Cloud Software Engineer",
    company: "IBM, Bengaluru, India",
    date: "Sep 2025 - Present",
    desc: `Project: Dreadnought (PaaS)<br>
    • Designed and developed <b>dreadnought-worker-updater (dn-updater)</b>, a centralized worker node patching system for <b>Red Hat OpenShift (ROKS)</b> clusters, ensuring <b>zero downtime</b>.<br>
    • Automated <b>rolling worker node updates</b> with pre/post validation to keep clusters secure and compliant.<br>
    • Implemented <b>cluster health checks</b> including cluster-proxy, DNS DaemonSet, node readiness, and core OpenShift components.<br>
    • Built <b>service-level health verification</b> jobs to validate workload stability during upgrades.<br>
    • Designed <b>PostgreSQL-backed orchestration</b> to track update states in real time.<br>
    • Integrated <b>IBM Cloud App Configuration</b> for one-click pause/resume across environments.<br>
    • Enabled <b>PagerDuty alerting</b> for <b>24×7 SRE/on-call</b> operations and worked in <b>PAG-secured clusters</b>.`,
  },
  {
    id: 1,
    img: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Symbol.jpg",
    role: "Golang Developer",
    company: "IBM (Payroll: Infinite Computer Solution), Bengaluru, India",
    date: "Dec 2022 - Sep 2025",
    desc: `Project: Resource Metadata Services (RMDS) (IaaS)<br>
    • Built <b>35+ Golang REST/gRPC APIs</b> serving metadata for IBM Cloud VSI and Bare Metal services.<br>
    • Implemented <b>JWT authentication</b>, OpenAPI standards, and observability tooling.<br>
    • Automated CI/CD using <b>IBM OnePipeline</b>, Docker, and Kubernetes with Mend scans.<br>
    • Reduced API latency by <b>40%</b> via caching and pagination.<br><br>

    Project: Security and Compliance Automation (IaaS)<br>
    • Developed <b>Golang microservices</b> to automate security checks achieving <b>100% audit compliance</b>.<br>
    • Migrated Python workflows to Go, improving performance by <b>60%</b>.<br>
    • Used <b>goroutines</b> and caching to reduce compute costs by <b>45%</b>.`,
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    role: "Junior Engineer",
    company: "SJ Contracts Pvt Ltd, Pune, India",
    date: "Dec 2020 - Aug 2021",
    desc: `• Assisted in project execution, site coordination, and technical documentation.<br>
    • Supported engineering teams in planning, quality checks, and progress tracking.<br>
    • Gained hands-on experience in professional engineering workflows and cross-team collaboration.`,
  },
];


export const education = [
  {
    id: 0,
    img: "https://cdac.in/img/C-DAC.jpg",
    school: "Centre for Development of Advanced Computing (C-DAC), Noida",
    date: "2022",
    degree: "PG Diploma in Artificial Intelligence",
  },
  {
    id: 1,
    img: "https://prolearnindia.com/wp-content/uploads/2023/03/3-4.jpg",
    school: "Savitribai Phule Pune University",
    date: "2018 - 2021",
    degree: "Bachelor of Engineering",
  },
];

export const TimeLineData = [
  { year: 2018, text: "Started Bachelor of Engineering" },
  { year: 2020, text: "Junior Engineer – SJ Contracts Pvt Ltd (Pune)" },
  { year: 2022, text: "PG Diploma in Artificial Intelligence – C-DAC" },
  { year: 2022, text: "Associate Software Engineer – Infinite Computer Solution (IBM Account)" },
  { year: 2025, text: "IBM Cloud PaaS – Dreadnought (OpenShift Platform)" },
];
