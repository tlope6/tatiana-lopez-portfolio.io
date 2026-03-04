
import globalStudios from "../assets/globalStudios.png";
import dream from "../assets/dream.png"
import sayCheese from "../assets/say-cheese.png"


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
    title: "Say Cheese?",
    subtitle: "Computer Vision · Gesture Control · Real-Time Detection",
    description:
      "An interactive Python application that uses hand gestures and facial detection to control a live camera interface, blending computer vision, creative visuals, and data logging. ",
    details: [
      "Implemented real-time hand tracking and gesture recognition using MediaPipe",
      "Built facial detection system for automated camera triggers",
      "Created interactive overlay system with creative visual effects",
      "Added data logging for tracking user interactions and session analytics",
    ],
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    link: "https://github.com/tlope6/Say-Cheese-",
    tags: ["Python", "OpenCV", "Computer Vision"],
    image: sayCheese,
    liveLink: null,
    color: "#ff8a9e",
  },
  {
    id: 3,
    title: "Global Studios",
    subtitle: "WorldWide · Connection · Entertainment Industry",
    description:
      "A financial app with an adventure theme that gathers user information to determine savings habits and financing goals, calculating leftover income after bills and taxes.",
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
    color: "#8affc1",
  },
];
