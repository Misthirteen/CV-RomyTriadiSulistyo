const baseIcon = "https://img.icons8.com" + "/color/48/";

const cvData = {
    common: {
    name: "Romy Triadi Sulistyo",
    location: "Depok, Indonesia",
    locationUrl: "https://www.google.com" + "/maps/search/?api=1&query=-6.385500,106.875000",
    email: "romy.triadi@gmail.com",
    phone: "+62 857 7785 4899",
     socials: [
      { icon: "🔗", label: "linkedin" + ".com/in/misthirteen", url: "https://www.linkedin" + ".com/in/misthirteen/" },
      { icon: "🎨", label: "behance" + ".net/misthirteen", url: "https://www.behance" + ".net/misthirteen" },
      { icon: "💻", label: "github" + ".com/Misthirteen", url: "https://github" + ".com/Misthirteen" },
      { icon: "🌐", label: "misthirteen.github" + ".io/CV-RomyTriadiSulistyo", url: "https://misthirteen.github" + ".io/CV-RomyTriadiSulistyo/" }
    ],
    techLogos: [
      { name: "Windows & Server", icon: baseIcon + "windows-10.png" },
      { name: "Linux", icon: baseIcon + "linux.png" },
      { name: "Red Hat (RHEL)", icon: baseIcon + "red-hat.png" },
      { name: "Ubuntu", icon: baseIcon + "ubuntu.png" },
      { name: "Docker", icon: baseIcon + "docker.png" },
      { name: "Kubernetes", icon: baseIcon + "kubernetes.png" },
      { name: "Prometheus", icon: baseIcon + "prometheus-app.png" },
      { name: "Grafana", icon: baseIcon + "grafana.png" },
      { name: "Elasticsearch", icon: baseIcon + "elasticsearch.png" },
      { name: "Python", icon: baseIcon + "python.png" },
      { name: "Playwright", icon: "https://playwright.dev" + "/img/playwright-logo.svg" },
      { name: "PostgreSQL", icon: baseIcon + "postgreesql.png" },
      { name: "Power BI", icon: baseIcon + "power-bi.png" },
      { name: "Google Workspace & Looker", icon: baseIcon + "google-logo.png" },
      { name: "Git", icon: baseIcon + "git.png" },
      { name: "WordPress", icon: baseIcon + "wordpress.png" },
      { name: "Figma", icon: baseIcon + "figma.png" },
      { name: "Adobe", icon: "https://avatars.githubusercontent.com" + "/u/476009?s=200&v=4" },
      { name: "Canva", icon: baseIcon + "canva.png" }
    ],
    radarScores: new Array(90, 82, 80, 75, 85),
    barDurations: new Array(1.0, 6.0, 0.6, 0.5, 4.0, 0.5)
  },
  id: {
    roleTitle: "IT Operations Specialist & Data Analyst",
    labels: {
      summary: "Ringkasan Profesional",
      downloadPdf: "Download CV (PDF)",
      techLogos: "Teknologi & Perangkat Kerja",
      radarChart: "Distribusi Pilar Kapasitas",
      barChart: "Durasi Pengalaman (Tahun)",
      jumpSkills: "Lihat Detail Keahlian",
      jumpExp: "Lihat Pengalaman Kerja",
      coreSkills: "Keahlian Inti",
      techSummary: "Tech Summary",
      education: "Pendidikan",
      languages: "Bahasa",
      certifications: "Sertifikasi",
      viewCert: "Lihat Sertifikat (PDF)",
      experience: "Pengalaman Kerja",
      achievements: "Pencapaian & Proyek Utama"
    },
    summary: "IT Operations Specialist dengan pengalaman lebih dari 5 tahun dalam mengelola infrastruktur IT, aplikasi enterprise, dan alur data operasional di lingkungan layanan kesehatan. Terampil dalam troubleshooting teknis, lingkungan Linux dan container, administrasi Odoo ERP serta Rekam Medis Elektronik (RME), dan analisis data operasional. Terbukti mampu menjaga keandalan sistem harian, menerjemahkan kebutuhan bisnis menjadi solusi teknis, serta meningkatkan efisiensi alur kerja lintas departemen.",
    charts: {
      radarLabels: ["IT Operations", "Business Analyst", "Data Analyst", "DevOps & Cloud", "UI & Visual"],
      barLabels: ["Suhada Clinic", "Budhi Jaya Clinic", "Droupadi NGO", "Kuldesak NGO", "The Fool Studio", "PT. Adhiguna"]
    },
    coreSkills: [
      {
        category: "IT Operations & Support",
        items: [
          "Hardware Troubleshooting",
          "Software Deployment & Support",
          "Networking & Infrastructure",
          "LAN/WAN & TCP/IP",
          "Windows OS",
          "Linux OS (RHEL, Ubuntu)",
          "VMware",
          "End-User Helpdesk",
          "Remote Support",
          "IT Asset Management",
          "Vendor Management",
          "WordPress Administration",
          "Web Maintenance",
          "Jira",
          "Trello",
          "CCTV Support",
          "System Documentation"
        ]
      },
      {
        category: "Business & System Analysis",
        items: [
          "Requirement Gathering",
          "BRD & FRD",
          "UML Diagram",
          "User Acceptance Testing (UAT)",
          "Odoo ERP",
          "Electronic Medical Records (RME)",
          "Business Process Mapping"
        ]
      },
      {
        category: "Data Analysis & Reporting",
        items: [
          "PostgreSQL",
          "Microsoft SQL Server",
          "Google BigQuery",
          "Python (Pandas, NumPy)",
          "Playwright (Web Scraping & QA)",
          "Microsoft Power BI",
          "Google Looker Studio",
          "Power Query",
          "Excel VBA & Macro Automation",
          "Microsoft Office 365",
          "ETL & Data Cleaning",
          "Operational Reporting",
          "KPI Dashboarding",
          "Spreadsheet Automation"
        ]
      },
      {
        category: "DevOps, Cloud & Monitoring",
        items: [
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "Nextcloud Private Cloud",
          "Prometheus",
          "Grafana",
          "Elasticsearch",
          "REST API",
          "JSON & YAML",
          "Bash Scripting",
          "PHP",
          "HTML & CSS",
          "JavaScript"
        ]
      },
      {
        category: "UI & Visual",
        items: [
          "Figma",
          "UI Prototyping",
          "Canva",
          "Adobe Photoshop",
          "Adobe Illustrator"
        ]
      }
    ],
    techSummary: [
      { title: "ERP & Sistem RME", desc: "Konfigurasi modul Odoo ERP, pemetaan alur kerja RME dengan vendor, dan pelaksanaan UAT." },
      { title: "Private Cloud & Infrastruktur", desc: "Deployment Nextcloud Private Cloud berbasis Docker Compose dengan persistent storage." },
      { title: "Analisis Data Operasional", desc: "Pembersihan data dan pembuatan template pelaporan standar untuk keputusan manajemen." },
      { title: "Monitoring & Troubleshooting", desc: "Pemeliharaan jaringan LAN/WAN, server Linux/Windows, serta analisis log sistem." }
    ],
    education: [
      { degree: "S1 Sistem Informasi", institution: "Universitas Nusa Mandiri", period: "2022 - 2023", gpa: "IPK: 3.27" },
      { degree: "D3 Manajemen Informatika", institution: "AMIK BSI", period: "2013 - 2016", gpa: "IPK: 3.10" }
    ],
    languages: [
      { name: "Bahasa Indonesia", level: "Native / Penutur Asli" },
      { name: "Bahasa Inggris", level: "Professional Working Proficiency (TOEFL ITP: 503)" }
    ],
    certifications: [
      { title: "Certified Program Analyst", issuer: "BNSP (Badan Nasional Sertifikasi Profesi)", year: "2022", file: "assets/2022-bnsp-analis-program-romy.pdf" }
    ],
        experience: [
      {
        period: "08/2025 – 07/2026",
        role: "IT Operations Specialist",
        company: "Suhada Clinic",
        location: "Depok, Indonesia",
        bullets: [
          "Business & System Analysis: Mengumpulkan kebutuhan pengguna di seluruh departemen klinis dan administrasi, berkoordinasi dengan vendor RME pihak ketiga untuk memetakan alur kerja bisnis, menjalankan User Acceptance Testing (UAT), serta menstandarkan operasional Rekam Medis Elektronik (RME).",
          "ERP & Application Support: Mengonfigurasi dan menguji modul Odoo ERP, memelihara sistem informasi klinik, serta menyusun panduan operasional pengguna bagi staf medis dan administrasi.",
          "Operational Data Analysis & Reporting: Mengumpulkan, membersihkan, dan menganalisis data operasional klinik untuk membangun template pelaporan terstandar guna mendukung pengambilan keputusan manajemen.",
          "Private Cloud & Infrastructure Deployment: Mendeploy Nextcloud Private Cloud on-premise menggunakan Docker Compose dengan penyimpanan persisten dan Nextcloud Talk untuk memusatkan berbagi file internal yang aman serta komunikasi tim.",
          "IT Infrastructure, Asset & Vendor Management: Mengelola jaringan LAN/WAN, dukungan server Linux/Windows, analisis log sistem, troubleshooting perangkat keras/lunak, inventaris aset IT, serta koordinasi vendor pihak ketiga untuk pengadaan dan pemeliharaan.",
          "Website Management: Mengelola dan memperbarui konten website WordPress klinik untuk meningkatkan kemudahan akses informasi bagi pasien.",
          "General Affairs (GA) Operations: Mengoordinasikan fasilitas MEP (Mechanical, Electrical, Plumbing), sistem keamanan fisik, dan kebersihan lingkungan kerja guna menunjang operasional harian klinik."
        ]
      },
      {
        period: "03/2019 – 02/2025",
        role: "IT Support & General Affairs",
        company: "Budhi Jaya Utama Clinic",
        location: "Depok, Indonesia",
        bullets: [
          "IT Support & Digital Operations: Menginstalasi, mengonfigurasi, dan memelihara workstation, printer, jaringan LAN/WAN, serta platform digital klinik sembari menangani troubleshooting teknis harian, pembaruan perangkat lunak, dan dokumentasi operasional.",
          "IT Asset & Facility Management (GA): Mengelola inventaris aset IT, pemeliharaan berkala (preventive maintenance), serta koordinasi operasional fasilitas MEP, sistem keamanan, dan kebersihan tempat kerja.",
          "Digital Marketing & Visual Support: Mengelola pembaruan konten media sosial dan memproduksi materi promosi untuk mendukung kampanye pemasaran digital dan branding klinik."
        ]
      },
      {
        period: "05/2018 – 11/2018",
        role: "Social Media Content Creator",
        company: "Droupadi NGO",
        location: "Bandung, Indonesia",
        bullets: [
          "Content Management: Membuat, mendesain, dan menjadwalkan konten media sosial untuk kampanye organisasi.",
          "Audience Engagement: Mengelola interaksi komunitas guna meningkatkan tingkat keterlibatan audiens.",
          "Performance Monitoring: Memantau dan mengevaluasi metrik performa konten secara berkala."
        ]
      },
      {
        period: "12/2017 – 05/2018",
        role: "Digital Media Planner",
        company: "Kuldesak NGO",
        location: "Depok, Indonesia",
        bullets: [
          "Campaign Strategy: Merencanakan strategi kampanye digital yang disesuaikan dengan target audiens.",
          "Channel Optimization: Mengelola dan mengoptimalkan kanal media digital organisasi.",
          "Performance Evaluation: Mengevaluasi hasil kampanye dan efektivitas media digital secara keseluruhan."
        ]
      },
      {
        period: "09/2013 – 09/2017",
        role: "Graphic Designer",
        company: "The Fool Studio",
        location: "Depok, Indonesia",
        bullets: [
          "Brand Identity Development: Merancang logo dan sistem identitas visual untuk berbagai klien bisnis.",
          "Collateral Production: Memproduksi materi pemasaran cetak maupun digital dengan menjaga konsistensi merek.",
          "Project Management: Mengelola proyek desain mulai dari konsep awal hingga penyerahan akhir kepada klien."
        ]
      },
      {
        period: "10/2012 – 03/2013",
        role: "Warehouse & Inventory Administrator",
        company: "PT. Adhiguna",
        location: "Bogor, Indonesia",
        bullets: [
          "Inventory Control: Mengelola dokumentasi inventaris gudang dan pelacakan stok barang.",
          "Logistics Coordination: Mengoordinasikan logistik proyek dan menyusun laporan operasional."
        ]
      }
    ],
    achievements: [
      {
        period: "04/2026 – 07/2026",
        title: "Sistem Pelaporan Operasional",
        bullets: [
          "Membangun template laporan operasional terstandar di seluruh unit klinis dan administrasi.",
          "Menyederhanakan alur dokumentasi data sehingga mengurangi waktu kompilasi laporan manual dan meningkatkan akurasi data mingguan."
        ]
      },
      {
        period: "09/2025 – 02/2026",
        title: "Implementasi Infrastruktur Private Cloud",
        bullets: [
          "Merancang dan mendeploy Nextcloud Private Cloud on-premise melalui Docker Compose dengan penyimpanan persisten.",
          "Menstandarkan konfigurasi workstation dan memusatkan berbagi file internal, sehingga meningkatkan stabilitas operasional dan keamanan data."
        ]
      },
      {
        period: "02/2026 – 03/2026",
        title: "Pengembangan Website Klinik",
        bullets: [
          "Membangun dan memelihara website WordPress klinik untuk meningkatkan aksesibilitas informasi layanan pasien.",
          "Mengintegrasikan pembaruan konten digital ke dalam operasional harian klinik untuk mendukung digitalisasi layanan."
        ]
      },
      {
        period: "03/2019 – 02/2025",
        title: "Branding & Identitas Visual",
        bullets: [
          "Merancang sistem identitas visual yang kohesif dan materi pemasaran di seluruh kanal cetak maupun digital.",
          "Menjaga standar merek yang konsisten untuk mendukung visibilitas klinik dan keterlibatan pasien."
        ]
      }
    ],
    footer: "© 2026 Romy Triadi Sulistyo • Dibangun dengan Arsitektur Modular untuk GitHub Pages"
  },
  en: {
    roleTitle: "IT Operations Specialist & Data Analyst",
    labels: {
      summary: "Professional Summary",
      downloadPdf: "Download CV (PDF)",
      techLogos: "Tech Stack & Tools",
      radarChart: "Competency Pillars Distribution",
      barChart: "Experience Duration (Years)",
      jumpSkills: "View Core Skills",
      jumpExp: "View Work Experience",
      coreSkills: "Core Competencies",
      techSummary: "Tech Summary",
      education: "Education",
      languages: "Languages",
      certifications: "Certifications",
      viewCert: "View Certificate (PDF)",
      experience: "Professional Experience",
      achievements: "Achievements & Key Projects"
    },
    summary: "IT Operations Specialist with over 5 years of experience maintaining IT infrastructure, enterprise applications, and operational data workflows within healthcare environments. Skilled in technical troubleshooting, Linux and containerized environments, Odoo ERP & Electronic Medical Records (RME) administration, and operational data analysis. Proven ability to support daily system reliability, translate business requirements into technical solutions, and improve workflow efficiency across departments.",
    charts: {
      radarLabels: ["IT Operations", "Business Analyst", "Data Analyst", "DevOps & Cloud", "UI & Visual"],
      barLabels: ["Suhada Clinic", "Budhi Jaya Clinic", "Droupadi NGO", "Kuldesak NGO", "The Fool Studio", "PT. Adhiguna"]
    },
    coreSkills: [
      {
        category: "IT Operations & Support",
        items: [
          "Hardware Troubleshooting",
          "Software Deployment & Support",
          "Networking & Infrastructure",
          "LAN/WAN & TCP/IP",
          "Windows OS",
          "Linux OS (RHEL, Ubuntu)",
          "VMware",
          "End-User Helpdesk",
          "Remote Support",
          "IT Asset Management",
          "Vendor Management",
          "WordPress Administration",
          "Web Maintenance",
          "Jira",
          "Trello",
          "CCTV Support",
          "System Documentation"
        ]
      },
      {
        category: "Business & System Analysis",
        items: [
          "Requirement Gathering",
          "BRD & FRD",
          "UML Diagram",
          "User Acceptance Testing (UAT)",
          "Odoo ERP",
          "Electronic Medical Records (RME)",
          "Business Process Mapping"
        ]
      },
      {
        category: "Data Analysis & Reporting",
        items: [
          "PostgreSQL",
          "Microsoft SQL Server",
          "Google BigQuery",
          "Python (Pandas, NumPy)",
          "Playwright (Web Scraping & QA)",
          "Microsoft Power BI",
          "Google Looker Studio",
          "Power Query",
          "Excel VBA & Macro Automation",
          "Microsoft Office 365",
          "ETL & Data Cleaning",
          "Operational Reporting",
          "KPI Dashboarding",
          "Spreadsheet Automation"
        ]
      },
      {
        category: "DevOps, Cloud & Monitoring",
        items: [
          "Docker",
          "Docker Compose",
          "Kubernetes",
          "Nextcloud Private Cloud",
          "Prometheus",
          "Grafana",
          "Elasticsearch",
          "REST API",
          "JSON & YAML",
          "Bash Scripting",
          "PHP",
          "HTML & CSS",
          "JavaScript"
        ]
      },
      {
        category: "UI & Visual",
        items: [
          "Figma",
          "UI Prototyping",
          "Canva",
          "Adobe Photoshop",
          "Adobe Illustrator"
        ]
      }
    ],
    techSummary: [
      { title: "ERP & RME Systems", desc: "Odoo ERP module configuration, third-party RME workflow mapping, and UAT execution." },
      { title: "Private Cloud & Infrastructure", desc: "On-premise Nextcloud deployment using Docker Compose with persistent storage." },
      { title: "Operational Data Analytics", desc: "Data cleaning and standardized reporting templates to support management decisions." },
      { title: "Monitoring & Troubleshooting", desc: "LAN/WAN network maintenance, Linux/Windows server support, and system log analysis." }
    ],
    education: [
      { degree: "Bachelor of Information Systems", institution: "Nusa Mandiri University", period: "2022 - 2023", gpa: "GPA: 3.27" },
      { degree: "Diploma III Information Management", institution: "Bina Sarana Informatics Academy", period: "2013 - 2016", gpa: "GPA: 3.10" }
    ],
    languages: [
      { name: "Bahasa Indonesia", level: "Native / Bilingual" },
      { name: "English", level: "Professional Working Proficiency (TOEFL ITP: 503)" }
    ],
    certifications: [
      { title: "Certified Program Analyst", issuer: "BNSP (Indonesian Professional Certification Authority)", year: "2022", file: "assets/2022-bnsp-analis-program-romy.pdf" }
    ],
        experience: [
      {
        period: "08/2025 – 07/2026",
        role: "IT Operations Specialist",
        company: "Suhada Clinic",
        location: "Depok, Indonesia",
        bullets: [
          "Business & System Analysis: Gathered user requirements across clinical and administrative departments, coordinated with third-party RME vendors to map business workflows, executed User Acceptance Testing (UAT), and standardized Electronic Medical Records (RME) operations.",
          "ERP & Application Support: Configured and tested Odoo ERP modules, maintained clinic information systems, and created operational user guides for medical and administrative staff.",
          "Operational Data Analysis & Reporting: Collected, cleaned, and analyzed clinic operational data to build standardized reporting templates and support management decision-making.",
          "Private Cloud & Infrastructure Deployment: Deployed an on-premise Nextcloud Private Cloud using Docker Compose with persistent storage and Nextcloud Talk to centralize secure file sharing and internal communication.",
          "IT Infrastructure, Asset & Vendor Management: Managed LAN/WAN networking, Linux/Windows server support, system log analysis, hardware/software troubleshooting, IT asset inventory, and third-party vendor coordination for procurement and maintenance.",
          "Website Management: Managed and updated WordPress clinic website content to improve patient information accessibility.",
          "General Affairs (GA) Operations: Coordinated facility MEP (Mechanical, Electrical, Plumbing), physical security systems, and workplace cleanliness to support daily clinic operations."
        ]
      },
      {
        period: "03/2019 – 02/2025",
        role: "IT Support & General Affairs",
        company: "Budhi Jaya Utama Clinic",
        location: "Depok, Indonesia",
        bullets: [
          "IT Support & Digital Operations: Installed, configured, and maintained workstations, printers, LAN/WAN networks, and clinic digital platforms while providing daily technical troubleshooting, software updates, and operational documentation.",
          "IT Asset & Facility Management (GA): Managed IT asset inventory, preventive maintenance, and operational coordination for facility MEP, security systems, and workplace cleanliness.",
          "Digital Marketing & Visual Support: Managed social media content updates and produced promotional materials to support digital marketing campaigns and clinic branding."
        ]
      },
      {
        period: "05/2018 – 11/2018",
        role: "Social Media Content Creator",
        company: "Droupadi NGO",
        location: "Bandung, Indonesia",
        bullets: [
          "Content Management: Created, designed, and scheduled social media content for organizational campaigns.",
          "Audience Engagement: Managed community interactions to increase audience engagement rates.",
          "Performance Monitoring: Monitored and evaluated content performance metrics regularly."
        ]
      },
      {
        period: "12/2017 – 05/2018",
        role: "Digital Media Planner",
        company: "Kuldesak NGO",
        location: "Depok, Indonesia",
        bullets: [
          "Campaign Strategy: Planned digital campaign strategies tailored to target audiences.",
          "Channel Optimization: Managed and optimized organizational digital media channels.",
          "Performance Evaluation: Evaluated campaign results and overall digital media effectiveness."
        ]
      },
      {
        period: "09/2013 – 09/2017",
        role: "Graphic Designer",
        company: "The Fool Studio",
        location: "Depok, Indonesia",
        bullets: [
          "Brand Identity Development: Designed logos and visual identity systems for diverse business clients.",
          "Collateral Production: Produced marketing collaterals and print/digital media maintaining brand consistency.",
          "Project Management: Managed design projects from initial concept through final client delivery."
        ]
      },
      {
        period: "10/2012 – 03/2013",
        role: "Warehouse & Inventory Administrator",
        company: "PT. Adhiguna",
        location: "Bogor, Indonesia",
        bullets: [
          "Inventory Control: Managed warehouse inventory documentation and stock tracking.",
          "Logistics Coordination: Coordinated project logistics and prepared operational reports."
        ]
      }
    ],
    achievements: [
      {
        period: "04/2026 – 07/2026",
        title: "Operational Reporting Systems",
        bullets: [
          "Built standardized operational reporting templates across clinical and administrative units.",
          "Streamlined data documentation workflows, reducing manual report compilation time and improving weekly data accuracy."
        ]
      },
      {
        period: "09/2025 – 02/2026",
        title: "IT Infrastructure Implementation",
        bullets: [
          "Planned and deployed an on-premise Nextcloud Private Cloud via Docker Compose with persistent storage.",
          "Standardized workstation configurations and centralized internal file sharing, improving operational stability and data security."
        ]
      },
      {
        period: "02/2026 – 03/2026",
        title: "Clinic Website Development",
        bullets: [
          "Developed and maintained the clinic WordPress website to improve patient service information accessibility.",
          "Integrated digital content updates into daily clinic operations to support service digitalization."
        ]
      },
      {
        period: "03/2019 – 02/2025",
        title: "Branding & Visual Identity",
        bullets: [
          "Designed cohesive visual identity systems and marketing collaterals across print and digital channels.",
          "Maintained consistent brand standards to support clinic visibility and patient engagement."
        ]
      }
    ],
footer: "© 2026 Romy Triadi Sulistyo • Built with Modular Architecture for GitHub Pages"
  }
};
