
// Edit this file to update publications, projects, experience,
// achievements, certificates, and skills.
//
// Empty links are hidden automatically.
//
// Google Drive permissions:
// General access → Anyone with the link → Viewer
//
// Project screenshots:
// screenshotsUrl: "GOOGLE_DRIVE_FILE_OR_FOLDER_LINK"
//
// Project video:
// videoUrl: "GOOGLE_DRIVE_VIDEO_FILE_LINK"
//
// Certificate:
// certificateUrl: "GOOGLE_DRIVE_CERTIFICATE_LINK"

window.portfolioData = {
  researchInterests: [
    "Medical Image Analysis",
    "Explainable AI",
    "Self-Supervised Learning",
    "Computer Vision",
    "Vision Transformers",
    "Trustworthy AI",
    "Model Evaluation"
  ],

  publications: [
    {
      title:
        "A Novel Deep Learning Framework for Gestational Age Estimation from Fetal Brain MRI Data",

      authors:
        "Sumaiya Khatun, Md. Omaer Faruq Goni, Abdullah Al Bayozid",

      venue:
        "2025 28th International Conference on Computer and Information Technology (ICCIT)",

      date: "December 2025",
      status: "Published",
      type: "Conference Paper",

      summary:
        "A deep learning framework for estimating gestational age from fetal brain MRI data.",

      paperUrl:
        "https://doi.org/10.1109/ICCIT68739.2025.11490221",

      codeUrl: "",
      featured: true
    },

    {
      title:
        "An Explainable Self-Supervised Learning Method for Kidney Disease Detection",

      authors:
        "Abdullah Al Bayozid, Md Faysal Ahamed, Sumaiya Khatun, Rukaiya Haque",

      venue: "IEEE SPICSON 2026",
      date: "2026",
      status: "Under Review",
      type: "Conference Paper",

      summary:
        "An explainable self-supervised approach for kidney disease detection using medical imaging.",

      paperUrl: "",
      codeUrl: "",
      featured: true
    },

    {
      title:
        "Attention Enhanced Transfer Learning Approach for Fetal Brain Plane Classification",

      authors:
        "Rukaiya Haque, MD Alvin Sarkar Sakib, Tanzid Ahmed, Abdullah Al Bayozid",

      venue: "IEEE SPICSON 2026",
      date: "2026",
      status: "Under Review",
      type: "Conference Paper",

      summary:
        "Attention-enhanced transfer learning for robust fetal brain plane classification.",

      paperUrl: "",
      codeUrl: "",
      featured: false
    },

    {
      title:
        "Cybersecurity Threat Analysis in Social Media Using Artificial Intelligence",

      authors: "",
      venue: "Manuscript in preparation",
      date: "2026",
      status: "In Preparation",
      type: "Research Paper",

      summary:
        "An AI-based study of cybersecurity threats and harmful activity in social media environments.",

      paperUrl: "",
      codeUrl: "",
      featured: false
    }
  ],

  projects: [
    {
      title: "Zero Brakes",
      category: "Unity",
      date: "June 2026",

      summary:
        "A one-tap endless zigzag driving game with procedural platforms, score tracking, smooth camera movement, and Android support.",

      highlights: [
        "Implemented one-tap directional control and procedural platform generation.",
        "Built score, game-over, persistent audio, and Android UI systems.",
        "Refined camera behaviour and vehicle-edge handling for smoother gameplay."
      ],

      technologies: [
        "Unity",
        "C#",
        "Android",
        "Procedural Generation"
      ],

      githubUrl:
        "https://github.com/re13shan/No-Breaks",

      githubUrls: [],

      screenshotsUrl:
        "https://drive.google.com/drive/folders/1f-LPXrcyXptG4cuSbsA4RFluXZUfzJQ9?usp=sharing",

      videoUrl: "",

      releaseUrl:
        "https://github.com/re13shan/No-Breaks/releases/latest",

      demoUrl: ""
    },

    {
      title: "Penguin Panic",
      category: "Unity",
      date: "June 2026",

      summary:
        "A portrait Android Unity game where a penguin dodges falling footballs in an increasingly difficult survival challenge.",

      highlights: [
        "Created responsive mobile movement and obstacle-spawning systems.",
        "Implemented scoring, difficulty progression, menus, and game-over flow.",
        "Prepared and released an Android build through GitHub Releases."
      ],

      technologies: [
        "Unity",
        "C#",
        "Android",
        "2D Gameplay"
      ],

      githubUrl:
        "https://github.com/re13shan/Penguin-Panic",

      githubUrls: [],

      screenshotsUrl:
        "https://drive.google.com/drive/folders/1ZjP1_YKtR7oD1-zO5K7tGv8uKKlzJpTN?usp=sharing",

      videoUrl: "",

      releaseUrl:
        "https://github.com/re13shan/Penguin-Panic/releases/latest",

      demoUrl: ""
    },

    {
      title: "Rabbit Eat Game",
      category: "Unity",
      date: "2026",

      summary:
        "A Unity obstacle game where the player guides a rabbit through challenging paths to collect and eat carrots.",

      highlights: [
        "Developed obstacle-based movement and progression mechanics.",
        "Implemented carrot collection and feeding interactions.",
        "Added collision detection, scoring, and game-over systems.",
        "Optimised the controls and interface for Android devices."
      ],

      technologies: [
        "Unity",
        "C#",
        "Android",
        "Unity Physics"
      ],

      githubUrl: "https://github.com/re13shan/Rabbit-Game",
      githubUrls: [],

      screenshotsUrl: "",

      videoUrl: "",

      releaseUrl: "",
      demoUrl: ""
    },
    {
      title: "Movie Review and Rating Website",
      category: "Web",
      date: "May 2023",

      summary:
        "A full-stack platform with authentication, user reviews, ratings, and automatic average-rating aggregation.",

      highlights: [
        "Implemented user authentication and review posting.",
        "Built rating aggregation and movie detail workflows.",
        "Connected an Angular frontend to Node.js and MongoDB services."
      ],

      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "CSS"
      ],

      githubUrl: "",

      githubUrls: [
        {
          label: "Frontend",
          url: "https://github.com/re13shan/Movie_Review_Angular"
        },
        {
          label: "Backend",
          url: "https://github.com/re13shan/Movie_Review_Server"
        }
      ],

      screenshotsUrl:
        "https://drive.google.com/drive/folders/1K-upr2px6m_t-AAEwMzlZlTrdCcb7u2V?usp=sharing",

      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },

    {
      title: "Automatic Robotic Arm Car",
      category: "Robotics",
      date: "October 2023",

      summary:
        "An autonomous robotic arm car that records and replays movement sequences for pick-and-place tasks.",

      highlights: [
        "Created memory-based record-and-replay automation.",
        "Implemented task sequences for object picking and placement.",
        "Developed real-time microcontroller control logic."
      ],

      technologies: [
        "Arduino",
        "Microcontrollers",
        "Automation",
        "Robotics"
      ],

      githubUrl: "",
      githubUrls: [],

      screenshotsUrl:
        "https://drive.google.com/drive/folders/1iaqm7ifIZLD37mhkNc690lG9ndr1KsC5?usp=drive_link",

      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },
    {
      title: "Bluetooth Controlled Robotic Arm Car",
      category: "Robotics",
      date: "March 2023",

      summary:
        "A smartphone-controlled robotic arm car supporting real-time movement and grip control over Bluetooth.",

      highlights: [
        "Integrated Arduino, motor drivers, and Bluetooth control.",
        "Implemented directional movement and grip actuation.",
        "Connected a mobile interface for real-time operation."
      ],

      technologies: [
        "Arduino",
        "Bluetooth",
        "Node.js",
        "Embedded Systems"
      ],

      githubUrl: "",
      githubUrls: [],
      screenshotsUrl: "",
      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },
    {
      title: "Ball Bouncing Android Game",
      category: "Unity",
      date: "September 2022",

      summary:
        "A physics-driven Unity game where the player controls a bouncing ball, avoids obstacles, and reaches targets.",

      highlights: [
        "Built bounce, gravity, and obstacle mechanics with Unity physics.",
        "Created progressive difficulty and mobile controls.",
        "Designed the game loop and level progression."
      ],

      technologies: [
        "Unity",
        "C#",
        "Rigidbody",
        "Android"
      ],

      githubUrl: "",
      githubUrls: [],
      screenshotsUrl: "",
      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },

    {
      title: "Ball Rolling Through Obstacle Game",
      category: "Unity",
      date: "September 2022",

      summary:
        "A 3D obstacle game featuring narrow paths, physics-based rolling controls, and level challenges.",

      highlights: [
        "Used Rigidbody-based movement and collision handling.",
        "Designed obstacle courses and narrow-path challenges.",
        "Balanced responsive control with physics simulation."
      ],

      technologies: [
        "Unity",
        "C#",
        "3D",
        "Physics"
      ],

      githubUrl: "",
      githubUrls: [],
      screenshotsUrl: "",
      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },

    {
      title: "Teacher’s Invoice Generator",
      category: "Web",
      date: "June 2023",

      summary:
        "A web tool that automates teacher invoice creation with dynamic forms, calculations, and PDF generation.",

      highlights: [
        "Built dynamic invoice forms and real-time calculations.",
        "Implemented PDF generation and database persistence.",
        "Designed a practical workflow for repetitive invoice tasks."
      ],

      technologies: [
        "PHP",
        "JavaScript",
        "CSS",
        "MySQL"
      ],

      githubUrl: "",
      githubUrls: [],
      screenshotsUrl: "",
      videoUrl: "",
      releaseUrl: "",
      demoUrl: ""
    },


  ],

  experience: [
    {
      role:
        "AI Engineer — MLOps & Model Evaluation",

      company:
        "Invigilo AI",

      period:
        "February 2026 – Present",

      bullets: [
        "Monitor production AI outputs, identify failure patterns, and report quality issues that affect model reliability.",
        "Validate model outputs, document recurring errors, and provide structured feedback for improvement.",
        "Collaborate on feedback loops, reliability monitoring, and deployed model performance."
      ]
    },

    {
      role:
        "Student Data Analyst — Project-based",

      company:
        "Collaboration with a PhD researcher, George Mason University",

      period:
        "January 2025 – May 2025",

      bullets: [
        "Developed a centralised data ecosystem to support transparent research and policymaking.",
        "Consolidated historical Bangladesh data across population, elections, geography, AQI, GDP, forest coverage, unemployment, and law-and-order."
      ]
    },

    {
      role:
        "Industrial Attachment",

      company:
        "SELISE Digital Platforms",

      period:
        "March 2024",

      bullets: [
        "Worked with agile methodologies, sprint planning, version control, and enterprise software workflows.",
        "Gained practical experience with Angular, Node.js, REST APIs, and full-stack application architecture."
      ]
    }
  ],

  achievements: [
    {
      title:
        "UGC Technical Scholarship",

      detail:
        "Awarded for academic results in 2020, 2021, 2022, and 2023.",

      certificateUrl: "",
      featured: true
    },

    {
      title:
        "National High School Programming Contest",

      detail:
        "1st Prize — 2016",

      certificateUrl: "",
      featured: false
    },

    {
      title:
        "National High School Programming Contest",

      detail:
        "Top 10 — 2017",

      certificateUrl: "",
      featured: false
    },

    {
      title:
        "Josephites Technovation",

      detail:
        "3rd Prize in Programming Contest — 2017",

      certificateUrl: "",
      featured: false
    },

    {
      title:
        "National High School Programming Contest",

      detail:
        "Participant — 2015",

      certificateUrl: "",
      featured: false
    },

    {
      title:
        "Techno Fair",

      detail:
        "Innovative Project Showcase — 2023",

      certificateUrl: "",
      featured: false
    }
  ],

  skillGroups: [
    {
      title: "AI & Data",

      items: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
        "pandas",
        "NumPy",
        "Model Evaluation"
      ]
    },

    {
      title: "Game Development",

      items: [
        "Unity",
        "C#",
        "Android",
        "3D Physics",
        "Mobile UI"
      ]
    },

    {
      title: "Programming",

      items: [
        "Python",
        "C++",
        "C#",
        "JavaScript",
        "PHP",
        "MATLAB",
        "LaTeX"
      ]
    },

    {
      title: "Web & Database",

      items: [
        "Angular",
        "Node.js",
        "HTML",
        "CSS",
        "MongoDB",
        "MySQL",
        "REST APIs"
      ]
    },

    {
      title: "Robotics",

      items: [
        "Arduino",
        "Microcontrollers",
        "Bluetooth Control",
        "Embedded Programming"
      ]
    },

    {
      title: "Research",

      items: [
        "Computer Vision",
        "Medical Imaging",
        "Explainable AI",
        "Self-Supervised Learning",
        "Vision Transformers"
      ]
    }
  ]
};

