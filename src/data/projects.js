
import globalStudios from "../assets/globalStudios.png";
import dream from "../assets/dream.png"
export const PROJECTS = [
    {
        id : 1,
        title : "Dream Analyzer",
        description :
        "A dream journal that analyzes your nightly visions using natural language processing to surface symbols, emotions, and connections you'd never catch on your own",
        link : "https://github.com/tlope6/dream_analyzer",
        tags : ["Python", "CSS", "HTML", "Streamlit", "Plotly", "scikit-learn", "Hugging Face Transformers" ],
        image : dream, 
        liveLink : "https://dreamanalyzer-g5dprbfrbyb5dku8oumg99.streamlit.app/",
    },
    {

        id : 2,
        title : "Say Cheese?",
        description : "An interactive Python application that uses hand gestures and facial detection to control a live camera interface, blending computer vision, creative visuals, and data logging.",
        link : "https://github.com/tlope6/Say-Cheese-",
        tags :  ["Python", "OpenCV", "Computer Vision"],
        demo : null, 
        liveLink : null,
    },
    {
        id : 3, 
        title : "Global Studios", 
        description :"An interactive 3D Globe website that allows users from all around the entertainment industry to connect with one another. ", 
         link: "https://github.com/tlope6/GlobalStudios", 
        tags: ["React", "Three.js", "SQL", "Supabase" ],
        image: globalStudios,
        liveLink: "https://tlope6.github.io/GlobalStudios/",
        
    },
];