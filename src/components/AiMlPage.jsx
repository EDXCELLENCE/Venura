import ProgramDetailTemplate from "./ProgramDetailTemplate";
import { getNextBatchDate } from "../lib/programUtils";

function AiMlPage() {
  const programData = {
    title: "AI & ML",
    subtitle: "Artificial Intelligence & Machine Learning",
    category: "Technology • AI",
    description:
      "Master the fundamentals of AI and Machine Learning, from Python programming to building and deploying GenAI applications. Learn to create intelligent systems that can learn from data.",
    image: "/ai_ml.jpeg",
    path: "/programs/ai-ml",
    enrollUrl: "https://venuratech.com/dashboard/student/login",
    duration: "3 months",
    level: "Beginner to Advanced",
    enrolled: "1200+ enrolled",
    quickStats: [
      { value: "94%", label: "Placement Rate", icon: "🎯" },
      { value: "4.8★", label: "Student Rating", icon: "⭐" },
      { value: "1200+", label: "Alumni Network", icon: "👥" },
      { value: "50+", label: "Live Projects", icon: "💼" },
    ],
    topics: [
      {
        title: "Python Programming",
        description: "Master Python fundamentals and advanced concepts for ML",
      },
      {
        title: "Machine Learning Fundamentals",
        description: "Learn supervised & unsupervised learning algorithms",
      },
      {
        title: "Deep Learning & Neural Networks",
        description:
          "Build and train neural networks with TensorFlow & PyTorch",
      },
      {
        title: "Natural Language Processing",
        description: "Process and analyze text data with NLP techniques",
      },
      {
        title: "Computer Vision",
        description: "Work with image and video data for AI applications",
      },
      {
        title: "Generative AI",
        description: "Build GenAI applications with LLMs and diffusion models",
      },
    ],
    curriculum: [
      {
        title: "Python for AI & ML",
        description:
          "Master Python programming with focus on data science libraries",
        duration: "1 week",
        phase: "foundation",
        topics: [
          "Python Basics",
          "NumPy & Pandas",
          "Data Visualization",
          "Object-Oriented Programming",
        ],
      },
      {
        title: "Machine Learning Foundations",
        description: "Learn core ML algorithms and techniques",
        duration: "2 weeks",
        phase: "foundation",
        topics: [
          "Linear Regression",
          "Classification",
          "Clustering",
          "Decision Trees",
          "Ensemble Methods",
        ],
      },
      {
        title: "Data Processing & Feature Engineering",
        description:
          "Master data preparation and feature extraction techniques",
        duration: "1 week",
        phase: "foundation",
        topics: [
          "Data Cleaning",
          "Missing Value Handling",
          "Feature Scaling",
          "Feature Selection",
          "Dimensionality Reduction",
        ],
      },
      {
        title: "Foundation Project",
        description: "Build a predictive ML model with real-world dataset",
        duration: "1 week",
        phase: "foundation",
        topics: [
          "House Price Prediction System",
          "Customer Churn Predictor",
          "Stock Market Trend Analyzer",
          "Weather Forecasting Model",
          "Sales Revenue Predictor",
        ],
      },
      {
        title: "Deep Learning",
        description: "Build and train neural networks for complex tasks",
        duration: "2 weeks",
        phase: "intermediate",
        topics: [
          "Neural Networks",
          "CNNs",
          "RNNs",
          "Transfer Learning",
          "TensorFlow & PyTorch",
        ],
      },
      {
        title: "NLP & Computer Vision",
        description: "Specialized AI domains for text and image processing",
        duration: "1 week",
        phase: "intermediate",
        topics: [
          "Text Processing",
          "Sentiment Analysis",
          "Image Classification",
          "Object Detection",
        ],
      },
      {
        title: "Model Optimization & Deployment",
        description: "Optimize models and deploy them to production",
        duration: "1 week",
        phase: "intermediate",
        topics: [
          "Hyperparameter Tuning",
          "Model Compression",
          "API Development",
          "Cloud Deployment",
          "Monitoring",
        ],
      },
      {
        title: "Intermediate Project",
        description: "Develop an end-to-end deep learning application",
        duration: "1 week",
        phase: "intermediate",
        topics: [
          "Emotion Detection System",
          "Image Classification App",
          "Text Sentiment Analyzer",
          "Product Recommendation Engine",
          "Handwriting Recognition Tool",
        ],
      },
      {
        title: "Generative AI & LLMs",
        description: "Work with cutting-edge GenAI technologies",
        duration: "2 weeks",
        phase: "advanced",
        topics: [
          "GPT Models",
          "Prompt Engineering",
          "RAG Systems",
          "Fine-tuning LLMs",
        ],
      },
      {
        title: "Advanced AI Applications",
        description: "Explore cutting-edge AI applications and research",
        duration: "1 week",
        phase: "advanced",
        topics: [
          "Reinforcement Learning",
          "GANs",
          "Multimodal AI",
          "AI Ethics",
          "Research Papers",
        ],
      },
      {
        title: "Advanced Project",
        description: "Create an innovative GenAI solution",
        duration: "1 week",
        phase: "advanced",
        topics: [
          "AI-Powered Chatbot Assistant",
          "Document Summarization Tool",
          "Code Generation Platform",
          "Content Creation Assistant",
          "Medical Diagnosis Support System",
        ],
      },
      {
        title: "Capstone Project",
        description: "Build and deploy a complete AI product from scratch",
        duration: "1 week",
        phase: "advanced",
        topics: [
          "AI-Powered Resume Analyzer",
          "Personalized Learning Platform",
          "Smart Healthcare Advisor",
          "Automated Content Moderator",
          "Intelligent Customer Support Bot",
        ],
      },
    ],
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "NLP",
      "Computer Vision",
      "LLMs",
      "Model Deployment",
    ],
    projects: [
      {
        title: "Computer Vision Object Detection",
        description:
          "Build a real-time object detection system using YOLO and OpenCV for security surveillance applications",
        technologies: ["Python", "TensorFlow", "OpenCV", "YOLO"],
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500",
      },
      {
        title: "NLP Chatbot with Sentiment Analysis",
        description:
          "Create an intelligent customer service chatbot with sentiment detection and context understanding",
        technologies: ["Python", "NLTK", "Transformers", "Flask"],
        image:
          "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500",
      },
      {
        title: "Predictive Analytics Dashboard",
        description:
          "Develop a machine learning model to predict customer churn with interactive visualization dashboard",
        technologies: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      },
      {
        title: "Recommendation Engine",
        description:
          "Build a collaborative filtering recommendation system for e-commerce product suggestions",
        technologies: ["Python", "PyTorch", "Matrix Factorization", "APIs"],
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      },
    ],
    batchInfo: {
      nextBatchDate: getNextBatchDate(),
      seatsAvailable: 18,
      totalSeats: 30,
    },
    learningFormat: {
      mode: "Live + Recorded",
      batchOptions: [
        "Weekend Batch (Sat-Sun)",
        "Weekday Evening Batch (Mon-Fri 7-9 PM)",
      ],
      groupSize: "25-30 students per batch",
      doubtsResolution:
        "24/7 doubt support via community forum + Weekly doubt clearing sessions",
      communityAccess:
        "Lifetime access to Venura AI/ML community with 1200+ members",
      liveSessionDuration: "2 hours per session",
      additionalSupport: "1-on-1 mentor sessions for Premium plan students",
    },
    prerequisites: {
      required: [
        "Basic Python programming knowledge",
        "Understanding of mathematics (algebra, calculus)",
        "Familiarity with statistics fundamentals",
      ],
      recommended: [
        "Experience with NumPy and Pandas",
        "Basic understanding of data structures",
        "Knowledge of linear algebra",
      ],
      idealFor: [
        "Working professionals looking to transition into AI/ML",
        "Recent graduates in computer science or related fields",
        "Data analysts wanting to upskill",
        "Software engineers interested in machine learning",
      ],
    },
    cost: "Starting at ₹1,499",
    costDetails: {
      foundation: {
        name: "Foundation",
        price: "₹1,499",
        duration: "3 months",
        features: [
          "Foundation Level Content",
          "Recorded Sessions Only",
          "Community Forum Access",
          "Email Support",
          "3 Hands-on Projects",
          "Digital Certificate",
          "Lifetime Content Access",
        ],
      },
      professional: {
        name: "Professional",
        price: "₹4,999",
        duration: "3 months",
        features: [
          "All Foundation Features",
          "Intermediate + Advanced Content",
          "Live + Recorded Sessions",
          "Weekly Doubt Clearing",
          "5 Real-world Projects",
          "Basic Placement Assistance",
          "Resume Review",
          "2 Industry Certifications",
          "Alumni Network Access",
        ],
      },
      premium: {
        name: "Premium",
        price: "₹7,999",
        duration: "3 months",
        features: [
          "All Professional Features",
          "Unlimited 1-on-1 Mentorship",
          "8+ Projects + Capstone",
          "100% Placement Assistance",
          "Job Referrals (100+ Partners)",
          "Mock Interviews",
          "LinkedIn Profile Optimization",
          "3+ Industry Certifications",
          "Priority Support",
        ],
      },
    },
    pricingComparison: [
      {
        feature: "Program Duration",
        foundation: "3 months",
        professional: "3 months",
        premium: "3 months",
      },
      {
        feature: "Content Access",
        foundation: "Foundation only",
        professional: "All levels",
        premium: "All levels",
      },
      {
        feature: "Live Sessions",
        foundation: "❌",
        professional: "40+ hours",
        premium: "60+ hours",
      },
      {
        feature: "Hands-on Projects",
        foundation: "3 projects",
        professional: "5 projects",
        premium: "8+ projects",
      },
      {
        feature: "Capstone Project",
        foundation: "❌",
        professional: "❌",
        premium: "✅",
      },
      {
        feature: "1-on-1 Mentorship",
        foundation: "❌",
        professional: "❌",
        premium: "✅ Unlimited",
      },
      {
        feature: "Interview Preparation",
        foundation: "❌",
        professional: "Basic",
        premium: "Advanced + Mock",
      },
      {
        feature: "Placement Assistance",
        foundation: "❌",
        professional: "Basic",
        premium: "✅ 100%",
      },
      {
        feature: "Resume Building",
        foundation: "❌",
        professional: "✅",
        premium: "✅ + LinkedIn",
      },
      {
        feature: "Industry Certifications",
        foundation: "1 certification",
        professional: "2 certifications",
        premium: "3+ certifications",
      },
      {
        feature: "Job Referrals",
        foundation: "❌",
        professional: "❌",
        premium: "✅ Priority",
      },
      {
        feature: "Lifetime Access",
        foundation: "✅",
        professional: "✅",
        premium: "✅",
      },
      {
        feature: "Community Support",
        foundation: "Forum only",
        professional: "✅ Active",
        premium: "✅ + Alumni Network",
      },
    ],
    competitorComparison: [
      {
        feature: "Price",
        venura: "₹4,999 - ₹7,999",
        coursera: "₹15,000+",
        udemy: "₹3,999",
        bootcamp: "₹1,50,000+",
      },
      {
        feature: "Duration",
        venura: "3 months",
        coursera: "3 months",
        udemy: "3 months",
        bootcamp: "3 months",
      },
      {
        feature: "Live Sessions",
        venura: "60+ hours",
        coursera: "Limited",
        udemy: "None",
        bootcamp: "200+ hours",
      },
      {
        feature: "Placement Support",
        venura: "100% (Premium)",
        coursera: "None",
        udemy: "None",
        bootcamp: "Yes",
      },
      {
        feature: "1-on-1 Mentorship",
        venura: "Unlimited (Premium)",
        coursera: "None",
        udemy: "None",
        bootcamp: "Limited",
      },
      {
        feature: "Real Projects",
        venura: "8+ projects",
        coursera: "2-3 projects",
        udemy: "5-10 projects",
        bootcamp: "3-5 projects",
      },
      {
        feature: "Job Referrals",
        venura: "100+ partners",
        coursera: "None",
        udemy: "None",
        bootcamp: "50+ partners",
      },
      {
        feature: "Community",
        venura: "Active 1200+",
        coursera: "Forum only",
        udemy: "Limited",
        bootcamp: "Batch only",
      },
      {
        feature: "Certification",
        venura: "Industry recognized",
        coursera: "University backed",
        udemy: "Platform certificate",
        bootcamp: "Industry recognized",
      },
    ],
    jobRoles: [
      "Machine Learning Engineer",
      "AI Developer",
      "Data Scientist",
      "ML Research Engineer",
      "GenAI Application Developer",
    ],
    salaryRanges: [
      {
        role: "Machine Learning Engineer",
        range: "₹8-15 LPA",
        experience: "0-2 years",
      },
      { role: "Data Scientist", range: "₹7-13 LPA", experience: "0-2 years" },
      { role: "AI Engineer", range: "₹9-16 LPA", experience: "0-2 years" },
      {
        role: "Deep Learning Engineer",
        range: "₹10-18 LPA",
        experience: "0-2 years",
      },
      { role: "NLP Engineer", range: "₹8-14 LPA", experience: "0-2 years" },
      {
        role: "Computer Vision Engineer",
        range: "₹9-17 LPA",
        experience: "0-2 years",
      },
    ],
    hiringCompanies: [
      "Google",
      "Microsoft",
      "IBM",
      "Amazon",
      "Meta",
      "Accenture",
      "Deloitte",
      "Adobe",
      "Oracle",
      "Salesforce",
      "TCS",
      "Infosys",
    ],
    growthStats: [
      {
        value: "40%",
        label: "Annual Growth",
        description: "AI market growing at 40% CAGR globally",
      },
      {
        value: "$190B+",
        label: "Market Size by 2025",
        description: "Global AI market valuation",
      },
      {
        value: "2.3M",
        label: "Job Openings",
        description: "AI/ML positions worldwide in 2024",
      },
    ],
    marketDataSource: [
      {
        label: "World Economic Forum",
        url: "https://www.weforum.org/reports/the-future-of-jobs-report-2025/",
      },
      {
        label: "Statista AI Outlook",
        url: "https://www.statista.com/outlook/tmo/artificial-intelligence/worldwide",
      },
      {
        label: "LinkedIn Economic Graph",
        url: "https://economicgraph.linkedin.com/",
      },
    ],
    comparisonSource: [
      { label: "Coursera Pricing", url: "https://www.coursera.org/" },
      { label: "Udemy Pricing", url: "https://www.udemy.com/" },
      { label: "Bootcamp Listings", url: "https://www.coursereport.com/" },
    ],
    instructors: [
      {
        name: "Dr. Vikram Singh",
        role: "Lead AI Instructor",
        experience: "15+ years in AI/ML",
        credentials: "PhD in Machine Learning, Ex-Google AI",
        image:
          "https://ui-avatars.com/api/?name=Vikram+Singh&background=0A2342&color=fff&size=200&bold=true",
        specialization: "Deep Learning & Computer Vision",
      },
      {
        name: "Anjali Verma",
        role: "Senior ML Engineer",
        experience: "10+ years in Data Science",
        credentials: "MS in AI, Ex-Microsoft Research",
        image:
          "https://ui-avatars.com/api/?name=Anjali+Verma&background=FF7A00&color=fff&size=200&bold=true",
        specialization: "NLP & Generative AI",
      },
      {
        name: "Rajesh Khanna",
        role: "Industry Mentor",
        experience: "12+ years in AI Solutions",
        credentials: "ML Architect, Ex-IBM Watson",
        image:
          "https://ui-avatars.com/api/?name=Rajesh+Khanna&background=0A2342&color=fff&size=200&bold=true",
        specialization: "MLOps & Production AI",
      },
    ],
    reviews: [
      {
        name: "Anjali Patel",
        role: "ML Engineer",
        company: "Amazon",
        image:
          "https://ui-avatars.com/api/?name=Anjali+Patel&background=FF7A00&color=fff&size=200",
        rating: 5,
        text: "From zero AI knowledge to building production-ready ML models in 3 months! Best investment in my career.",
      },
      {
        name: "Rohan Mehta",
        role: "AI Research Engineer",
        company: "Google",
        image:
          "https://ui-avatars.com/api/?name=Rohan+Mehta&background=0A2342&color=fff&size=200",
        rating: 5,
        text: "The depth of AI/ML concepts covered is incredible. Now working on cutting-edge research at Google!",
      },
      {
        name: "Pooja Iyer",
        role: "Deep Learning Engineer",
        company: "NVIDIA",
        image:
          "https://ui-avatars.com/api/?name=Pooja+Iyer&background=FF7A00&color=fff&size=200",
        rating: 5,
        text: "The hands-on projects with neural networks and computer vision prepared me perfectly for my role at NVIDIA.",
      },
      {
        name: "Aryan Joshi",
        role: "NLP Engineer",
        company: "Microsoft",
        image:
          "https://ui-avatars.com/api/?name=Aryan+Joshi&background=0A2342&color=fff&size=200",
        rating: 5,
        text: "Amazing program! The mentorship and practical projects helped me land a role in natural language processing.",
      },
    ],
    certificatePreview:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    faqs: [
      {
        question:
          "Can I switch between Foundation, Professional, and Premium plans?",
        answer:
          "Yes. You can upgrade anytime during the program by paying the difference amount and instantly unlock all features in the selected plan, including placement support in Premium.",
      },
      {
        question: "What if I miss a live session?",
        answer:
          "All live sessions are recorded and available for lifetime access. You can watch them at your convenience. Additionally, you can ask questions in our community forum.",
      },
      {
        question: "Is there a job guarantee?",
        answer:
          "While we don't provide job guarantee, our Premium plan includes 100% placement assistance with dedicated career support, resume building, mock interviews, and priority job referrals to our 100+ hiring partners.",
      },
      {
        question: "What is the batch size?",
        answer:
          "We maintain small batch sizes of 25-30 students to ensure personalized attention from instructors and better learning outcomes.",
      },
      {
        question: "Can I get a refund if I'm not satisfied?",
        answer:
          "Yes, we offer a 7-day money-back guarantee. If you're not satisfied with the program quality within the first week, we'll provide a full refund, no questions asked.",
      },
      {
        question: "Will I get a certificate after completion?",
        answer:
          "Yes, you'll receive an industry-recognized certificate from Venura upon successful completion. Premium plan students also get guidance for additional certifications from Google, AWS, and Microsoft.",
      },
      {
        question: "How much time should I dedicate per week?",
        answer:
          "We recommend 8-10 hours per week for the Foundation plan and 12-15 hours per week for the Professional/Premium plans to complete all assignments and projects successfully.",
      },
    ],
  };

  return <ProgramDetailTemplate programData={programData} />;
}

export default AiMlPage;
