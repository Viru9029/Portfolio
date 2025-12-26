const publicUrl = process.env.PUBLIC_URL || "";

/* ================= BIO ================= */

export const Bio = {
  name: "Virendra Kate",
  roles: [
    "Cloud Software Engineer at IBM",
    "Golang Developer (3+ Years)",
    "IBM Cloud PaaS | OpenShift (ROKS)",
  ],
  description:
    "Experienced Golang Developer with 3+ years of experience building and operating cloud-native applications and IBM Cloud PaaS services. Proven expertise in Golang microservices, REST/gRPC APIs (35+), and platform automation on Kubernetes/OpenShift (ROKS). Strong background in CI/CD automation using IBM OnePipeline, security scanning, observability, zero-downtime deployments, worker node orchestration, cluster health monitoring, and compliance automation. Actively involved in 24×7 SRE/on-call operations and PagerDuty.",
  github: "https://github.com/Viru9029",
  resume:
    "https://drive.google.com/file/d/1UqS82sJvbxqM9H0TPJO0r1_-mW7i270O/view",
  linkedin: "https://www.linkedin.com/in/virendrakate/",
  email: "vbkate9@gmail.com",
};

/* ================= SKILLS ================= */

export const skills = [
  {
    title: "Languages, Frameworks & Databases",
    skills: [
      { name: "Golang", image: "https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg" },
      { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
      { name: "MySQL", image: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
      { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
      { name: "Gin", image: "https://avatars.githubusercontent.com/u/7894478?s=280&v=4" },
      { name: "gRPC", image: "https://www.vectorlogo.zone/logos/grpcio/grpcio-icon.svg" },
    ],
  },
  {
    title: "Cloud, DevOps & Platform",
    skills: [
      { name: "IBM Cloud", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Kubernetes", image: "https://www.svgrepo.com/show/376331/kubernetes.svg" },
      { name: "OpenShift (ROKS)", image: `${publicUrl}/images/openshift-logo.jpg` },
      { name: "Docker", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
      { name: "IBM OnePipeline", image: `${publicUrl}/images/ibm-onepipeline-logo.jpg` },
      { name: "Tekton", image: `${publicUrl}/images/ibm-onepipeline-logo.jpg` },
      { name: "Jenkins", image: "https://www.svgrepo.com/show/353929/jenkins.svg" },
      { name: "PagerDuty", image: `${publicUrl}/images/pagerduty-logo.jpg` },
    ],
  },
  {
    title: "Observability & Security",
    skills: [
      { name: "Sysdig", image: `${publicUrl}/images/sysdig-logo.jpg` },
      { name: "LogDNA", image: `${publicUrl}/images/logdna-logo.jpg` },
      { name: "Ospray", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "RBAC", image: "https://cdn-icons-png.flaticon.com/512/942/942751.png" },
      { name: "JWT", image: "https://jwt.io/img/logo.svg" },
      { name: "PAG", image: "https://cdn-icons-png.flaticon.com/512/2917/2917990.png" },
    ],
  },
];

/* ================= EXPERIENCE ================= */

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Cloud Software Engineer",
    company: "IBM, Bengaluru, India",
    date: "Sep 2025 - Present",
    desc: `Project: Dreadnought (IBM Cloud PaaS)<br>
    • Designed and developed <b>dreadnought-worker-updater (dn-updater)</b> enabling zero-downtime worker node patching on <b>OpenShift (ROKS)</b>.<br>
    • Automated rolling worker updates with cluster and service health checks.<br>
    • Implemented validation for cluster-proxy, DNS DaemonSet, node readiness, and core components.<br>
    • Built PostgreSQL-backed orchestration for real-time update tracking.<br>
    • Integrated IBM Cloud App Configuration for one-click pause/resume.<br>
    • Enabled PagerDuty alerts supporting 24×7 SRE/on-call operations.`,
  },
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    role: "Golang Developer",
    company: "IBM (Payroll: Infinite Computer Solution)",
    date: "Dec 2022 - Sep 2025",
    desc: `Project: Resource Metadata Services (RMDS)<br>
    • Developed 35+ Golang REST/gRPC APIs for IBM Cloud VSI and Bare Metal.<br>
    • Implemented JWT auth, OpenAPI specs, and observability using Sysdig & LogDNA.<br>
    • Automated CI/CD using IBM OnePipeline, Docker, and Kubernetes.<br><br>
    Project: IaaS Security & Compliance Automation<br>
    • Built Golang microservices achieving 100% audit compliance.<br>
    • Migrated Python workflows to Go improving performance by 60%.`,
  },
  {
    id: 2,
    img: `${publicUrl}/images/sj-logo.jpg`,
    role: "Junior Engineer",
    company: "SJ Contracts Pvt Ltd, Pune, India",
    date: "Dec 2020 - Aug 2021",
    desc: "Assisted in engineering project execution, site coordination, and technical documentation.",
  },
];

/* ================= EDUCATION ================= */

export const education = [
  {
    id: 0,
    img: `${publicUrl}/images/cdac-logo.jpg`,
    school: "Centre for Development of Advanced Computing (C-DAC), Noida",
    date: "Mar 2022 - Sep 2022",
    grade: "Distinction",
    degree: "PG Diploma in Artificial Intelligence",
    desc: "Hands-on experience in Python, Machine Learning, Deep Learning, NLP, Cloud Computing, Docker, Kubernetes, and CI/CD fundamentals.",
  },
  {
    id: 1,
    img: `${publicUrl}/images/sppu-logo.jpg`,
    school: "Savitribai Phule Pune University",
    date: "Jun 2018 - Jun 2021",
    grade: "First Class",
    degree: "Bachelor of Engineering",
    desc: "Strong foundation in software engineering, databases, and problem-solving.",
  },
];

/* ================= PROJECTS ================= */

export const projects = [
  {
    id: 6,
    title: "SkinVision App",
    description:
      "AI-powered Streamlit app for skin disease detection with diagnosis guidance.",
    image:
      "https://www.dermengine.com/hs-fs/hubfs/DE%20Blog%20CTA%20Articles/DermEngine%20Evolution%20Tracker%20Doctor.png",
    tags: ["Python", "Streamlit", "Deep Learning", "Generative AI"],
    category: "generative ai",
    github: "https://github.com/Viru9029/SkinVision-AI",
    webapp: "https://skinvision-ai.streamlit.app/",
  },
  {
    id: 5,
    title: "WeatherSnap",
    description: "React-based real-time weather application.",
    image:
      "https://img.pikbest.com/templates/20211121/bg/0e1b29f5c2423708338dd4e3a17f35eb_117851.png",
    tags: ["React", "API"],
    category: "web app",
    github: "https://github.com/Viru9029/WeatherSnap",
    webapp: "https://viru9029.github.io/WeatherSnap/",
  },
  {
    id: 4,
    title: "BrainHealth-AI",
    description: "Deep learning system for brain tumor detection.",
    image:
      "https://assets.technologynetworks.com/production/dynamic/images/content/354432/early-detection-of-brain-tumors-and-beyond-354432-960x540.jpg",
    tags: ["Python", "Deep Learning", "Keras"],
    category: "machine learning",
    github: "https://github.com/Viru9029/BrainHealth-AI",
  },
  {
    id: 3,
    title: "AI-Based Humanoid Broadcaster",
    description: "NLP-based AI system for news summarization.",
    image:
      "https://img.freepik.com/premium-vector/live-news-cartoon-tv-broadcast-sport-fans-journalist-interview-television-media-studio-breaking-reporting-about-protest-utter-vector-concept_53562-17056.jpg",
    tags: ["Python", "NLP", "BERT"],
    category: "machine learning",
    github: "https://github.com/Viru9029/AI-Based-Humanoid-Broadcaster",
  },
  {
    id: 7,
    title: "CareerFit Analyzer",
    description: "Generative AI tool for ATS scoring and resume analysis.",
    image:
      "https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2023-08/ai-assistant_0.jpg",
    tags: ["Python", "Generative AI", "Streamlit"],
    category: "generative ai",
    github: "https://github.com/Viru9029/CareerFit-Analyzer",
  },
  {
    id: 2,
    title: "Footwear E-Commerce",
    description: "Golang backend APIs for an e-commerce platform.",
    image:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5066.jpg",
    tags: ["Golang", "Gin", "MongoDB"],
    category: "web app",
    github: "https://github.com/Viru9029/Footware-E-Commerce",
  },
];

/* ================= TIMELINE ================= */

export const TimeLineData = [
  { year: 2018, text: "Started Bachelor of Engineering" },
  { year: 2020, text: "Junior Engineer – SJ Contracts Pvt Ltd" },
  { year: 2022, text: "PG Diploma in Artificial Intelligence – C-DAC" },
  { year: 2022, text: "Joined IBM via Infinite Computer Solution" },
  { year: 2025, text: "IBM Cloud PaaS – Dreadnought" },
];
