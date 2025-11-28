export const myProjects = [
  {
    id: 1,
    title: "BudgetBee",
    description:
      "A mobile app that helps users track and manage daily expenses. It allows adding and viewing expenses, supports authentication, categorization, and spending analytics, offering valuable insights into financial habits.",
    subDescription: [
      "Developed a Flutter-based enhanced version of expense tracking app, enabling users to efficiently manage and categorize their expenses.",
      "Integrated Supabase authentication for secure user login and sign-up.",
      "Implemented an interactive expense visualization feature using bar charts and added a swipe-to-delete functionality with an undo option for improved user experience.",
    ],
    href: "https://github.com/Yashwant1105/BudgetBee",
    logo: "/assets/budgetbee.png",
    image: "/assets/projects/budgetbee1.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "Figma",
        path: "/assets/logos/figma.svg",
      },
    ],
  },
  {
    "id": 2,
    "title": "Flight Delay Prediction Pipeline",
    "description": "End-to-end AWS data and ML pipeline for flight delay prediction and real-time deployment.",
    "subDescription": [
      "Built an end-to-end data pipeline on AWS following the Medallion architecture (Bronze → Silver → Gold).",
      "Ingested flight delay data from Kaggle into Amazon S3 and transformed using AWS Athena.",
      "Developed analytical datasets and created Power BI dashboards for airline and route performance insights.",
      "Trained and optimized an XGBoost-based flight delay prediction model in Amazon SageMaker.",
      "Deployed the ML model using FastAPI, Docker, and EC2, serving real-time predictions via an API and interactive frontend.",
    ],
    "href": "https://github.com/dshryn/etl-pipeline-aws",
    "logo": "/assets/projects/flights.svg",
    "image": "/assets/projects/flightdelay.png",
    "tags": [
      { "id": 1, "name": "AWS S3", "path": "/assets/logos/s3.svg" },
      { "id": 2, "name": "AWS Athena", "path": "/assets/logos/athena.svg" },
      { "id": 3, "name": "SageMaker", "path": "/assets/logos/sagemaker.svg" },
      { "id": 4, "name": "EC2", "path": "/assets/logos/ec2.svg" },
      { "id": 5, "name": "Docker", "path": "/assets/logos/docker.svg" },
      { "id": 6, "name": "FastAPI", "path": "/assets/logos/fastapi.svg" },
      { "id": 7, "name": "Power BI", "path": "/assets/logos/powerbi.svg" },
      { "id": 8, "name": "Python", "path": "/assets/logos/python.svg" },
      { "id": 9, "name": "XGBoost", "path": "/assets/logos/xgboost.svg" }
    ]
  },
  {
    id: 3,
    title: "Grundfos - Chiller Load Prediction ",
    description:
      "App that predicts chiller loads using machine learning to optimize cooling and reduce energy consumption in large buildings.",
    subDescription: [
      "Built a cross-platform mobile app using Flutter & Dart to optimize cooling efficiency in commercial buildings.",
      "Integrated a Python FastAPI backend with machine learning (Scikit-Learn) to predict chiller loads based on occupancy, weather, and operational parameters.",
      "Developed interactive charts and visual analytics to help managers monitor energy usage and optimize chiller performance.",
      "Enabled energy savings, cost reduction, and peak load management through predictive insights and data-driven decision-making.",
      "*All core features are built; backend integration remains. "
    ],
    href: "https://github.com/Yashwant1105/grundfos",
    logo: "/assets/grundfos.png",
    image: "/assets/projects/grundfos.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "FastAPI",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "Sci-Kit Learn",
        path: "/assets/logos/scikitlearn.svg",
      },
      {
        id: 5,
        name: "Figma",
        path: "/assets/logos/figma.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Ootsav",
    description:
      "A cross-platform event planning app for weddings, birthdays, corporate events, and more. Supports sub-events (e.g., Mehendi, Sangeet) with timeline view, RSVP tracking, and guest group management.",
    subDescription: [
      "Designed UI to enable hosts to add/edit event details, send invites, and manage RSVPs.",
      "Created guest-facing views to access accommodation, timeline, and contact information.",
      "*Currently under development (IEEE-CS VIT)",
    ],
    href: "https://github.com/krish-1604/Ootsav",
    logo: "assets/ootsav.png",
    image: "  /assets/projects/ootsav.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Django",
        path: "/assets/logos/django.svg",
      },
      {
        id: 4,
        name: "Figma",
        path: "/assets/logos/figma.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Playlist Converter",
    description:
      "An application that helps users convert playlists between different music platforms primarily Spotify, Youtube Music and SoundCloud.",
    subDescription: [
      "Implementing an intuitive UI for selecting, filtering, and transferring playlists across platforms.",
      "Integrating REST APIs to fetch and display playlist data from different streaming services.",
      "Collaborating with the backend team to handle playlist processing and authentication using Supabase.",
      "*Still under development (SIAM-VIT)"
    ],
    href: "https://github.com/SIAM-VIT/playlist-converter-app",
    logo: "assets/playcon (1).webp",
    image: "/assets/projects/playlistconverter.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Dart",
        path: "/assets/logos/dart.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 5,
        name: "Figma",
        path: "/assets/logos/figma.svg",
      },
    ],
  },

];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/yashwantsahoo/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/Yashwant1105",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [

  {
    title: "Summer Intern",
    job: "ITC Infotech",
    date: "May - June 2025",
    contents: [
      "Observed the development of a batch data pipeline for an aviation client using Azure Data Factory, Databricks (PySpark), and Snowflake.",
      "Built simplified proof-of-concept pipelines to practice data ingestion, transformation, and querying.",
      "Explored the medallion architecture (Bronze, Silver, Gold layers) by experimenting with Netflix Customer Retention dataset to understand structured data flow."
    ],
  },
];
// export const reviews = [
//   {
//     name: "Suman Dey",
//     username: "@suman",
//     body: "Fantastic work! I'm really impressed. Do well with your future endeavours",
//     img: "",
//   },
// ]; 
