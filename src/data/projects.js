
import globalStudios from "../assets/globalStudios.png";
import dream from "../assets/dream.png"
import hobbyist_find from "../assets/hobbyist_find.png"


export const PROJECTS = [
  {
    id: 1,
    title: "Dream Analyzer",
    subtitle: "Machine Learning · Journal Analysis ",
    description:
       "A dream journal that analyzes your nightly visions using natural language processing to surface symbols, emotions, and connections you'd never catch on your own",
    details: [
      "Built audio feature extraction pipeline using Librosa for mel-spectrograms, MFCCs, and chroma features",
      "Trained classification models to predict mood and genre from audio signals",
      "Integrated Spotify Web API for real-time artist, track, and playlist recommendations",
      "Designed a clean user interface for uploading audio and viewing results",
    ],
    tech: ["Python", "Scikit-learn", "spaCy", "Hugging Face Transformers", "Streamlit", "Plotly"],
    link: "https://github.com/tlope6/MoodFlow-AI",
    tags: ["Python", "ML"],
    image: dream,
    liveLink: "https://dreamanalyzer-g5dprbfrbyb5dku8oumg99.streamlit.app/",
    color: "#7c8aff",
  },
  {
    id: 2,
    title: "HobbyFind", 
    subtitle: "Hobby · Full-Stack · Geolocation",
    description:
      "A location-based hobby discovery app that connects people with local events, workshops, and activities in their area",
    details: [
      "Built a full-stack hobby discovery web app using React 19, Vite, and TailWind CSS with a responsive deisgn that adapts across desktop, tablet, and mobile",
      "Integrated Mapbox GL JS to render an interactive location-based map with real-time event pins, adjustable search radius, and custom category markers",
      "Implemented live search with instant dropdown filtering ",
      "Added data logging for tracking user interactions and session analytics",
    ],
    tech: ["React", "MapBox GL JS", "Supabase", "PostgreSQL", "Parallel API", "HTML", "Node.js", "Express"],
    link: "https://github.com/tlope6/HobbyistFind",
    tags: ["Python", "OpenCV", "Computer Vision"],
    image: hobbyist_find,
    liveLink: "https://hobbyist-find.vercel.app/" ,
    color: "#f79ac0",
  },
  {
    id: 3,
    title: "Global Studios",
    subtitle: "WorldWide · Connection · Entertainment Industry",
    description:
      "An interactive 3D Globe platform that allows users to be able to connect with people in the entertainment industry.",
    details: [
      "Built an interactive 3D globe in React/Three.js with raycasting hit detection, GeoJSON country rendering, and continent-coded map pins with hover/click interactions",
      "Developed a multi-filter talent search system querying profiles by country, city, role, experience level, and genre specialty with async data handling",
      "Engineered a layered UI architecture using React Portals to manage overlapping search, profile, and analytics panels above a live 3D canvas",
      "Designed a data visualization dashboard with SVG-based bar, donut, and area charts breaking down talent distribution across regions, roles, and experience levels",
    ],
    tech: ["React", "Three.js", "SQL", "Supabase"],
    link: "https://github.com/tlope6/GlobalStudios",
    tags: ["React", "JavaScript", "SQL"],
    image: globalStudios,
    liveLink: "https://tlope6.github.io/GlobalStudios/",
    color: "#9e7bb5",
  },
];
