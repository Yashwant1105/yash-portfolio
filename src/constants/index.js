export const myProjects = [
  {
    "id": 1,
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
    id: 2,
    title: "Neo 150 Prep",
    description:
      "A cross-platform coding interview preparation app built around the NeetCode 150 problem set, helping users track progress, revise problems, practice interviews, and build consistency.",
    subDescription: [
      "Built problem tracking, notes, revision scheduling, daily goals, streaks, XP progression, and achievements.",
      "Integrated Supabase authentication and cloud synchronization with an offline-first architecture.",
      "Developed AI-powered coaching and mock interviews using Gemini API.",
      "Implemented cross-platform notifications using Firebase Cloud Messaging and Web Push.",
      "*Live as a Web App and available for Android",
    ],
    href: "https://github.com/Yashwant1105/neo-150-prep",
    logo: "/assets/neo150.svg",
    image: "/assets/projects/neo150.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/logos/flutter.svg",
      },
      {
        id: 2,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "Gemini API",
        path: "/assets/logos/gemini.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Ootsav",
    description:
      "A cross-platform event planning app for weddings, birthdays, corporate events, and more. Supports sub-events (e.g., Mehendi, Sangeet) with timeline view, RSVP tracking, and guest group management.",
    subDescription: [
      "Designed UI to enable hosts to add/edit event details, send invites, and manage RSVPs.",
      "Created guest-facing views to access accommodation, timeline, and contact information.",
      "*Live on Google Play Store (IEEE-CS VIT)",
    ],
    href: "https://play.google.com/store/apps/details?id=com.ootsav",
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
    id: 4,
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
  id: 5,
  title: "NYC Cab Surge Predictor",
  description:
    "An interactive Streamlit dashboard that predicts taxi surge probability using NYC Yellow Cab trip data, weather conditions, events, demand, and time-based features.",
  subDescription: [
    "Developed a machine learning dashboard for predicting surge risk in NYC taxi demand using Logistic Regression, Decision Tree, and Random Forest models.",
    "Implemented interactive inputs for pickup hour, trip count, rain, events, weekends, and peak hours with real-time surge probability and risk-level predictions.",
    "Added explainable feature-contribution charts, what-if scenario simulation, KPI cards, and live model performance comparison using Plotly visualizations.",
  ],
  href: "https://github.com/Yashwant1105/nyc-cab-surge-predictor",
  logo: "/assets/surge-predictor.svg",
  image: "/assets/projects/surge-predictor1.png",
  tags: [
    {
      id: 1,
      name: "Python",
      path: "/assets/logos/python.svg",
    },
    {
      id: 2,
      name: "Streamlit",
      path: "/assets/logos/streamlit.svg",
    },
    {
      id: 3,
      name: "Scikit-learn",
      path: "/assets/logos/scikitlearn.svg",
    },
    {
      id: 4,
      name: "Plotly",
      path: "/assets/logos/plotly.svg",
    },
    {
      id: 5,
      name: "Pandas",
      path: "/assets/logos/pandas.svg",
    },
  ],
  },
  {
  "id": 6,
  "title": "Forest Fire Risk Prediction Pipeline",
  "description": "End-to-end machine learning pipeline for predicting forest fire risk across Uttarakhand using weather, satellite vegetation, terrain, and geospatial fire data.",
  "subDescription": [
    "Processed MODIS fire observations, weather data, NDVI satellite imagery, and SRTM elevation data for Uttarakhand.",
    "Engineered temperature, humidity, rainfall, NDVI, elevation, and dryness-index features using seven-day time sequences.",
    "Trained Random Forest, CNN, and LSTM models to identify potential forest fire risk.",
    "Built an optimized ensemble model achieving approximately 0.867 ROC-AUC with a calibrated 0.40 decision threshold.",
    "Developed an interactive Streamlit dashboard with city selection, live Open-Meteo weather forecasts, risk probabilities, and Folium-based geospatial visualization."
  ],
  "href": "https://github.com/Yashwant1105/forest-fire-risk-prediction",
  "logo": "/assets/forest-fire.png",
  "image": "/assets/projects/forest-fire-risk.png",
  "tags": [
    { "id": 1, "name": "Python", "path": "/assets/logos/python.svg" },
    { "id": 2, "name": "Streamlit", "path": "/assets/logos/streamlit.svg" },
    { "id": 3, "name": "Scikit-learn", "path": "/assets/logos/scikitlearn.svg" },
    { "id": 4, "name": "TensorFlow", "path": "/assets/logos/tensorflow.svg" },
    { "id": 5, "name": "Random Forest", "path": "/assets/logos/random-forest.svg" },
    { "id": 6, "name": "CNN", "path": "/assets/logos/cnn.svg" },
    { "id": 7, "name": "LSTM", "path": "/assets/logos/lstm.svg" },
    { "id": 8, "name": "Open-Meteo", "path": "/assets/logos/weather.svg" },
    { "id": 9, "name": "Folium", "path": "/assets/logos/folium.svg" }
  ]
  }
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
    title: "TDP Intern",
    job: "Optum - UHG",
    date: "June - August 2026",
    contents: [
      "Worked on a microservice-based platform for governing safe and auditable production database changes across five databases.",
      "Built a multi-dialect SQL parser microservice using Flask and SQLGlot to analyze queries and extract statement-level risk metrics for downstream rule-based and LLM-driven optimization.",
      "Developed a drift detection engine and AI metrics dashboard for identifying out-of-band database changes, anomalies, behavioural patterns, and LLM usage analytics, deployed on Azure Kubernetes using Helm."
    ],
  },
  {
    title: "Summer Intern",
    job: "ITC Infotech",
    date: "May - June 2025",
    contents: [
      "Observed the development of a batch data pipeline for an aviation client using Azure Data Factory, Databricks (PySpark), and Snowflake.",
      "Built simplified proof-of-concept pipelines to practice data ingestion, transformation, and querying.",
      "Explored the medallion architecture (Bronze, Silver, Gold layers) by experimenting with Netflix Customer Retention dataset to understand structured data flow."
    ],
  }
];
// export const reviews = [
//   {
//     name: "Suman Dey",
//     username: "@suman",
//     body: "Fantastic work! I'm really impressed. Do well with your future endeavours",
//     img: "",
//   },
// ]; 
