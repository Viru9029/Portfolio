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

export const projects = [

  {
    id: 6,
    title: "SkinVision App",
    date: "Description:",
    description:
    "SkinVision App is a groundbreaking Streamlit app leveraging the power of AI to swiftly identify various skin diseases with just the upload of an image depicting the affected area. By simply uploading the image and clicking on the 'Proceed to Detection' button, you can swiftly obtain accurate diagnoses. The app not only detects the disease but also furnishes comprehensive information including symptoms, precautions, and available treatments",
    image:
      "https://www.dermengine.com/hs-fs/hubfs/DE%20Blog%20CTA%20Articles/DermEngine%20Evolution%20Tracker%20Doctor.png?width=767&height=682&name=DermEngine%20Evolution%20Tracker%20Doctor.png",
    tags: ["Google API Key", "Python", "Streamlit", "Deep Learning", "Generative Models"],
    category: "generative ai",
    github: "https://github.com/Viru9029/SkinVision-AI",
    webapp: "https://skinvision-ai.streamlit.app/",
  },
  {
    id: 5,
    title: "WeatherSnap",
    date: "Description:",
    description:
        "The WeatherSnap is a user-friendly application that provides accurate weather information for any location worldwide. With a clean and intuitive interface, users can quickly check the current weather conditions, including temperature, humidity, wind speed, and more. Whether planning for a trip, organizing outdoor activities, or simply staying informed about the weather, this app offers a convenient way to access up-to-date weather data.",
    image:
      "https://img.pikbest.com/templates/20211121/bg/0e1b29f5c2423708338dd4e3a17f35eb_117851.png!w700wp",
    tags: ["React Js", "API", "Github", "Google Auth"],
    category: "web app",
    github: "https://github.com/Viru9029/WeatherSnap",
    webapp: "https://viru9029.github.io/WeatherSnap/",
  },
  {
    id: 4,
    title: "BrainHealth-AI",
    date: "Description:",
    description:
      "BrainHealth AI is a cutting-edge project dedicated to the detection and analysis of brain tumors using advanced AI technology. Our platform offers efficient and accurate tumor detection, aiding medical professionals in early diagnosis and treatment planning. Join us in advancing brain health through innovation and technology",
    image:
      "https://assets.technologynetworks.com/production/dynamic/images/content/354432/early-detection-of-brain-tumors-and-beyond-354432-960x540.jpg?cb=11900964",
    tags: [
      "Python",
      "Deep Learning",
      "VGG16",
      "Keras",
      "Image Classification",
      "Flask",
    ],
    category: "machine learning",
    github: "https://github.com/Viru9029/BrainHealth-AI",
    webapp: "https://github.com/Viru9029/BrainHealth-AI",
  },
  {
    id: 3,
    title: "AI-Based-Humanoid-Broadcaster",
    date: "Description:",
    description:
        "The AI-Based-Humanoid-Broadcaster project focuses on developing humanoid broadcasters utilizing Natural Language Processing (NLP) techniques to assist in providing summaries of news articles. With the help of this project, readers can easily obtain summarized short news articles.",
    image:
        "https://img.freepik.com/premium-vector/live-news-cartoon-tv-broadcast-sport-fans-journalist-interview-television-media-studio-breaking-reporting-about-protest-utter-vector-concept_53562-17056.jpg",
    tags: ["Python", "NLP", "Pytorch", "Keras", "BERT","Flask"],
    category: "machine learning",
    github: "https://github.com/Viru9029/AI-Based-Humanoid-Broadcaster",
    webapp: "https://github.com/Viru9029/AI-Based-Humanoid-Broadcaster",
  },
  {
    id: 7,
    title: "CareerFit-Analyzer",
    date: "Description:",
    description:
    "Addressing the challenge faced by college-level students in optimizing their job applications, this project aims to develop an AI based solution utilizing Generative AI. Enhances student productivity with features such as 'ATS', 'Resume Analyzer', and 'Chat with PDF'",
    image:
      "https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2023-08/ai-assistant_0.jpg",
    tags: [
      "Python",
      "Google Gemini",
      "Generative AI",
      "Streamlit",
      "SqlLite",
      "Langchain",
      "NLP",
    ],
    category: "generative ai",
    github: "https://github.com/Viru9029/CareerFit-Analyzer",
    webapp: "https://github.com/Viru9029/CareerFit-Analyzer",
  },

  {
    id: 2,
    title: "Footware-E-Commerce",
    date: "Description:",
    description:
      "Footware-E-Commerce is a backend project developed using the Gin framework in Go(lang) to create an E-commerce platform for footwear. It provides various APIs for user authentication, product management, and shopping cart functionalities.",
    image:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5066.jpg",
    tags: ["Golang", "Gin Framework", "API Development", "Authentication", "MongoDB"],
    category: "web app",
    github: "https://github.com/Viru9029/Footware-E-Commerce",
    webapp: "https://github.com/Viru9029/Footware-E-Commerce",
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
