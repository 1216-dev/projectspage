import { Github } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  image: string;
  icon: typeof Github;
}

export const projects: Project[] = [
  {
    id: "breast-cancer-detection",
    title: "Breast Cancer Detection Using XGBoost",
    description: "This project uses machine learning to classify breast cancer as malignant or benign. It evaluates multiple models like XGBoost, Random Forest, and SVM, with techniques like SMOTE for class imbalance.",
    technologies: ["Python", "XGBoost", "Random Forest", "SVM", "SMOTE"],
    githubUrl: "https://github.com/Divyansh1414/Breast-Cancer-Detection-Using-XGBoost",
    image: "https://img.freepik.com/free-vector/doctors-examining-mammogram-scan_74855-5474.jpg",
    icon: Github,
  },
  {
    id: "sbu-hackathon",
    title: "Disease Detection & AI Recommendations",
    description: "An innovative healthcare solution developed during SBU Hackathon that combines disease detection with explainable AI to provide transparent medical recommendations and insights.",
    technologies: ["Explainable AI", "Machine Learning", "Healthcare", "Python"],
    githubUrl: "https://github.com/1216-dev/SBU_hack",
    image: "https://img.freepik.com/free-vector/doctor-robot-checking-patient-medical-data_74855-7674.jpg",
    icon: Github,
  },
  {
    id: "deep-art",
    title: "Deep Art Generation with CNN",
    description: "A creative AI project that uses Convolutional Neural Networks to generate artistic images, exploring the intersection of artificial intelligence and creative expression.",
    technologies: ["Deep Learning", "CNN", "Computer Vision", "Neural Style Transfer"],
    githubUrl: "https://github.com/1216-dev/Deep-Art",
    image: "https://img.freepik.com/free-vector/cute-robot-artist-painting-canvas-cartoon-vector-icon-illustration_138676-5714.jpg",
    icon: Github,
  },
  {
    id: "garbage-detection",
    title: "Garbage Detection System",
    description: "A state-of-the-art technical solution for automating garbage detection and monitoring in defined urban areas using artificial intelligence developments.",
    technologies: ["Computer Vision", "AI", "Object Detection", "Python"],
    githubUrl: "https://github.com/Divyansh1414/Garbage-Detection-System",
    image: "https://img.freepik.com/free-vector/robot-sorting-garbage-cartoon-illustration_74855-17316.jpg",
    icon: Github,
  },
  {
    id: "music-generation",
    title: "Music Generation with RNN",
    description: "A deep learning project that leverages Recurrent Neural Networks to generate original music compositions based on training data.",
    technologies: ["Deep Learning", "RNN", "TensorFlow", "Music Generation"],
    githubUrl: "https://github.com/1216-dev/Music_Genration_DL",
    image: "https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg",
    icon: Github,
  },
  {
    id: "multipath-detection",
    title: "Multipath Detection",
    description: "Project focused on applying machine learning techniques to detect and analyze multipath signal propagation in communication systems.",
    technologies: ["Machine Learning", "Signal Processing", "Classification"],
    githubUrl: "https://github.com/1216-dev/Multipath-Detection-Machine-Learning",
    image: "https://img.freepik.com/free-vector/signal-transmission-abstract-concept-illustration_335657-3873.jpg",
    icon: Github,
  }
];