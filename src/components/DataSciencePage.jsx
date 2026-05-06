import ProgramDetailTemplate from './ProgramDetailTemplate'
import { getNextBatchDate } from '../lib/programUtils'

function DataSciencePage() {
    const programData = {
        title: "Data Science",
        subtitle: "Data Analysis & Visualization",
        category: "Technology • Data",
        description: "Transform raw data into actionable insights. Master data analysis, visualization, statistical modeling, and dashboard creation to drive data-driven decision making.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&h=600&fit=crop&q=95",
        path: "/programs/data-science",
        enrollUrl: "https://forms.gle/DyDigMebuEbwED347?program=data-science",
        duration: "3 months",
        level: "Beginner to Advanced",
        enrolled: "950+ enrolled",
        quickStats: [{
            value: "92%",
            label: "Placement Rate",
            icon: "🎯"
        }, {
            value: "4.7★",
            label: "Student Rating",
            icon: "⭐"
        }, {
            value: "950+",
            label: "Alumni Network",
            icon: "👥"
        }, {
            value: "40+",
            label: "Live Projects",
            icon: "💼"
        }],
        cost: "Starting at ₹1,499",
        costDetails: {
            foundation: {
                name: "Foundation",
                price: "₹1,499",
                duration: "3 months",
                features: ["Foundation Level Content", "Recorded Sessions Only", "Community Forum Access", "Email Support", "3 Hands-on Projects", "Digital Certificate", "Lifetime Content Access"]
            },
            professional: {
                name: "Professional",
                price: "₹4,999",
                duration: "3 months",
                features: ["All Foundation Features", "Intermediate + Advanced Content", "Live + Recorded Sessions", "Weekly Doubt Clearing", "5 Real-world Projects", "Basic Placement Assistance", "Resume Review", "2 Industry Certifications", "Alumni Network Access"]
            },
            premium: {
                name: "Premium",
                price: "₹7,999",
                duration: "3 months",
                features: ["All Professional Features", "Unlimited 1-on-1 Mentorship", "8+ Projects + Capstone", "100% Placement Assistance", "Job Referrals (100+ Partners)", "Mock Interviews", "LinkedIn Profile Optimization", "3+ Industry Certifications", "Priority Support"]
            }
        },
        topics: [{
            title: "Python for Data Analysis",
            description: "Master Python and essential data science libraries"
        }, {
            title: "Pandas & NumPy",
            description: "Manipulate and analyze data efficiently"
        }, {
            title: "Data Visualization",
            description: "Create compelling visualizations with Matplotlib & Seaborn"
        }, {
            title: "Statistical Analysis",
            description: "Apply statistical methods to extract insights"
        }, {
            title: "SQL & Databases",
            description: "Query and manage data from databases"
        }, {
            title: "Dashboard Creation",
            description: "Build interactive dashboards with Tableau & Power BI"
        }],
        curriculum: [{
            title: "Python & Data Fundamentals",
            description: "Learn Python programming and data manipulation basics",
            duration: "1 week",
            phase: "foundation",
            topics: ["Python Basics", "Data Types", "Pandas Introduction", "NumPy Arrays"]
        }, {
            title: "Data Analysis & Cleaning",
            description: "Master data wrangling and preprocessing techniques",
            duration: "1 week",
            phase: "foundation",
            topics: ["Data Cleaning", "Missing Data", "Data Transformation", "Feature Engineering"]
        }, {
            title: "Statistical Analysis",
            description: "Apply statistical methods for data insights",
            duration: "1.5 weeks",
            phase: "foundation",
            topics: ["Descriptive Statistics", "Hypothesis Testing", "Correlation", "Regression Analysis"]
        }, {
            title: "Exploratory Data Analysis (EDA)",
            description: "Master techniques to explore and understand datasets",
            duration: "1 week",
            phase: "foundation",
            topics: ["Data Profiling", "Distribution Analysis", "Outlier Detection", "Pattern Recognition", "EDA Reports"]
        }, {
            title: "Foundation Project",
            description: "Perform comprehensive data analysis on real business data",
            duration: "1 week",
            phase: "foundation",
            topics: ["E-commerce Sales Analysis", "Customer Behavior Study", "Marketing Campaign Analysis", "Product Performance Report", "Retail Trends Dashboard"]
        }, {
            title: "Data Visualization",
            description: "Create impactful visualizations and charts",
            duration: "1 week",
            phase: "intermediate",
            topics: ["Matplotlib", "Seaborn", "Plotly", "Best Practices"]
        }, {
            title: "SQL & Database Management",
            description: "Work with databases and write complex queries",
            duration: "1 week",
            phase: "intermediate",
            topics: ["SQL Basics", "Joins", "Aggregations", "Database Design"]
        }, {
            title: "Advanced Analytics & ML Basics",
            description: "Introduction to predictive modeling and machine learning",
            duration: "1.5 weeks",
            phase: "intermediate",
            topics: ["Predictive Analytics", "ML Algorithms", "Model Evaluation", "Time Series", "Forecasting"]
        }, {
            title: "Intermediate Project",
            description: "Build predictive analytics dashboard with visualizations",
            duration: "1 week",
            phase: "intermediate",
            topics: ["Revenue Forecasting Dashboard", "Inventory Management System", "Customer Lifetime Value Predictor", "Demand Forecasting Tool", "HR Analytics Dashboard"]
        }, {
            title: "Dashboard & BI Tools",
            description: "Build interactive dashboards for business intelligence",
            duration: "1.5 weeks",
            phase: "advanced",
            topics: ["Tableau", "Power BI", "Dashboard Design", "Storytelling"]
        }, {
            title: "Big Data & Cloud Analytics",
            description: "Work with large-scale data using cloud platforms",
            duration: "1.5 weeks",
            phase: "advanced",
            topics: ["Big Data Concepts", "Cloud Storage", "Data Warehousing", "ETL Pipelines", "Performance Optimization"]
        }, {
            title: "Advanced Project",
            description: "Create enterprise-level BI solution with real-time analytics",
            duration: "1 week",
            phase: "advanced",
            topics: ["Real-Time Sales Monitor", "Supply Chain Analytics Platform", "Financial Performance Dashboard", "Social Media Analytics Tool", "Executive KPI Dashboard"]
        }, {
            title: "Capstone Project",
            description: "Complete end-to-end data analysis and BI solution for business",
            duration: "1 week",
            phase: "advanced",
            topics: ["Business Intelligence Suite", "Market Analysis Platform", "Customer Analytics System", "Operations Optimization Dashboard", "Risk Assessment Tool"]
        }],
        skills: ["Python", "Pandas", "NumPy", "SQL", "Tableau", "Power BI", "Statistics", "Data Visualization"],
        projects: [{
            title: "Business Intelligence Dashboard",
            description: "Build comprehensive BI dashboard for revenue and operations analysis with real-time data visualization",
            technologies: ["Python", "Tableau", "SQL", "Pandas"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        }, {
            title: "Customer Analytics Platform",
            description: "Develop customer segmentation and churn prediction system with interactive visualizations",
            technologies: ["Python", "Scikit-learn", "Power BI", "SQL"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
        }, {
            title: "Sales Forecasting System",
            description: "Create predictive model for sales forecasting using time series analysis and statistical methods",
            technologies: ["Python", "NumPy", "Matplotlib", "Statistics"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        }, {
            title: "Market Research Analysis Tool",
            description: "Build comprehensive market analysis system with data visualization and competitor insights",
            technologies: ["Python", "Pandas", "Seaborn", "APIs"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
        }],
        jobRoles: ["Data Analyst", "Business Intelligence Analyst", "Data Visualization Specialist", "Junior Data Scientist", "Analytics Consultant"],
        hiringCompanies: ["Google", "Microsoft", "IBM", "Amazon", "Accenture", "Deloitte", "EY", "KPMG", "PWC", "Oracle", "SAP", "Salesforce"],
        salaryRanges: [{
            role: "Data Analyst",
            range: "₹4-8 LPA"
        }, {
            role: "Business Intelligence Analyst",
            range: "₹5-10 LPA"
        }, {
            role: "Data Scientist",
            range: "₹8-15 LPA"
        }],
        growthStats: [{
            value: "28%",
            label: "Annual Growth",
            description: "Data Science job market growth rate"
        }, {
            value: "274B",
            label: "Market Size by 2026",
            description: "Global big data and analytics market"
        }, {
            value: "11.5M",
            label: "Job Openings",
            description: "Data-related positions by 2026"
        }],
        marketDataSource: [{
            label: "World Economic Forum",
            url: "https://www.weforum.org/reports/the-future-of-jobs-report-2025/"
        }, {
            label: "Statista Analytics Outlook",
            url: "https://www.statista.com/outlook/tmo/big-data-analytics/worldwide"
        }, {
            label: "LinkedIn Economic Graph",
            url: "https://economicgraph.linkedin.com/"
        }],
        comparisonSource: [{
            label: "Coursera Pricing",
            url: "https://www.coursera.org/"
        }, {
            label: "Udemy Pricing",
            url: "https://www.udemy.com/"
        }, {
            label: "Bootcamp Listings",
            url: "https://www.coursereport.com/"
        }],
        futureOutlook: "Data Science is the backbone of modern business decision-making. Every company from startups to Fortune 500 giants needs data professionals to unlock insights from their data. With the explosion of big data, IoT, and digital transformation, the demand for skilled data scientists continues to soar. This field offers excellent work-life balance, remote opportunities, and lucrative compensation packages.",
        reviews: [{
            name: "Rahul Verma",
            role: "Data Scientist",
            company: "Microsoft",
            image: "https://ui-avatars.com/api/?name=Rahul+Verma&background=0A2342&color=fff&size=200",
            rating: 5,
            text: "The Data Science program gave me practical skills I could apply immediately. Now building ML models at Microsoft!"
        }, {
            name: "Sanya Malhotra",
            role: "Data Analyst",
            company: "Amazon",
            image: "https://ui-avatars.com/api/?name=Sanya+Malhotra&background=FF7A00&color=fff&size=200",
            rating: 5,
            text: "Excellent curriculum covering Python, ML, and deep learning. The real-world projects prepared me perfectly!"
        }, {
            name: "Karan Singh",
            role: "Business Intelligence Analyst",
            company: "Flipkart",
            image: "https://ui-avatars.com/api/?name=Karan+Singh&background=0A2342&color=fff&size=200",
            rating: 5,
            text: "From zero data knowledge to creating dashboards and insights. The mentors are incredibly supportive!"
        }, {
            name: "Divya Nair",
            role: "Machine Learning Engineer",
            company: "Adobe",
            image: "https://ui-avatars.com/api/?name=Divya+Nair&background=FF7A00&color=fff&size=200",
            rating: 5,
            text: "Best investment in my career! The hands-on approach helped me transition smoothly into data science."
        }],
        instructors: [{
            name: "Dr. Priya Sharma",
            role: "Lead Data Science Instructor",
            experience: "12+ years in Data Analytics",
            credentials: "PhD in Statistics, Ex-Microsoft",
            image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=0A2342&color=fff&size=200&bold=true",
            specialization: "Statistical Modeling & BI"
        }, {
            name: "Amit Patel",
            role: "Senior Data Analyst",
            experience: "10+ years in Business Intelligence",
            credentials: "MS in Data Science, Ex-Amazon",
            image: "https://ui-avatars.com/api/?name=Amit+Patel&background=FF7A00&color=fff&size=200&bold=true",
            specialization: "Data Visualization & Tableau"
        }, {
            name: "Neha Kapoor",
            role: "Industry Mentor",
            experience: "8+ years in Analytics",
            credentials: "Data Science Lead, Ex-Google",
            image: "https://ui-avatars.com/api/?name=Neha+Kapoor&background=0A2342&color=fff&size=200&bold=true",
            specialization: "Python & SQL Analytics"
        }],
        prerequisites: {
            required: ["Basic understanding of mathematics and statistics", "Familiarity with Excel or spreadsheets", "Logical thinking and problem-solving skills"],
            recommended: ["Basic Python programming knowledge", "Understanding of database concepts", "Experience with data analysis tools"],
            idealFor: ["Business analysts looking to upskill", "Recent graduates in any field", "Professionals seeking career transition into data", "Marketing professionals wanting data skills"]
        },
        batchInfo: {
            nextBatchDate: getNextBatchDate(),
            seatsAvailable: 22,
            totalSeats: 30
        },
        pricingComparison: [{
            feature: "Program Duration",
            foundation: "3 months",
            professional: "3 months",
            premium: "3 months"
        }, {
            feature: "Content Access",
            foundation: "Foundation only",
            professional: "All levels",
            premium: "All levels"
        }, {
            feature: "Live Sessions",
            foundation: "❌",
            professional: "40+ hours",
            premium: "60+ hours"
        }, {
            feature: "Hands-on Projects",
            foundation: "3 projects",
            professional: "5 projects",
            premium: "8+ projects"
        }, {
            feature: "Capstone Project",
            foundation: "❌",
            professional: "❌",
            premium: "✅"
        }, {
            feature: "1-on-1 Mentorship",
            foundation: "❌",
            professional: "❌",
            premium: "✅ Unlimited"
        }, {
            feature: "Interview Preparation",
            foundation: "❌",
            professional: "Basic",
            premium: "Advanced + Mock"
        }, {
            feature: "Placement Assistance",
            foundation: "❌",
            professional: "Basic",
            premium: "✅ 100%"
        }, {
            feature: "Resume Building",
            foundation: "❌",
            professional: "✅",
            premium: "✅ + LinkedIn"
        }, {
            feature: "Industry Certifications",
            foundation: "1 certification",
            professional: "2 certifications",
            premium: "3+ certifications"
        }, {
            feature: "Job Referrals",
            foundation: "❌",
            professional: "❌",
            premium: "✅ Priority"
        }, {
            feature: "Lifetime Access",
            foundation: "✅",
            professional: "✅",
            premium: "✅"
        }, {
            feature: "Community Support",
            foundation: "Forum only",
            professional: "✅ Active",
            premium: "✅ + Alumni Network"
        }],
        faqs: [{
            question: "Do I need programming knowledge to start?",
            answer: "No! Our Foundation plan starts with Python basics. We recommend basic computer skills and logical thinking."
        }, {
            question: "What tools will I learn?",
            answer: "You'll master Python, SQL, Tableau, Power BI, Excel, and various data science libraries like Pandas, NumPy, and Scikit-learn."
        }, {
            question: "Can I work while learning?",
            answer: "Absolutely! Our flexible schedule includes weekend and evening batches designed for working professionals."
        }, {
            question: "Is there placement support?",
            answer: "Yes! The Premium plan includes 100% placement assistance with resume building, mock interviews, and job referrals to 100+ partner companies."
        }, {
            question: "What is the batch size?",
            answer: "We maintain small batches of 25-30 students for personalized attention and better interaction with instructors."
        }, {
            question: "Will I get certifications?",
            answer: "Yes! You'll receive Venura certification plus guidance for industry certifications from Microsoft, Google, and Tableau."
        }, {
            question: "What if I miss classes?",
            answer: "All sessions are recorded and available lifetime. You can watch them anytime and ask questions in our active community."
        }, {
            question: "How much time do I need weekly?",
            answer: "We recommend 8-12 hours per week including live sessions, practice, and projects for optimal learning outcomes."
        }],
        learningFormat: {
            mode: "Live + Recorded",
            batchOptions: ["Weekend Batch (Sat-Sun)", "Weekday Evening Batch (Mon-Fri 7-9 PM)"],
            groupSize: "25-30 students per batch",
            doubtsResolution: "24/7 doubt support via community forum + Weekly doubt clearing sessions",
            communityAccess: "Lifetime access to Venura Data Science community with 950+ members",
            liveSessionDuration: "2 hours per session",
            additionalSupport: "1-on-1 mentor sessions for Premium plan students"
        },
        competitorComparison: [{
            feature: "Price",
            venura: "₹4,999 - ₹7,999",
            coursera: "₹18,000+",
            udemy: "₹4,499",
            bootcamp: "₹1,80,000+"
        }, {
            feature: "Duration",
            venura: "3 months",
            coursera: "3 months",
            udemy: "3 months",
            bootcamp: "3 months"
        }, {
            feature: "Live Sessions",
            venura: "60+ hours",
            coursera: "Limited",
            udemy: "None",
            bootcamp: "180+ hours"
        }, {
            feature: "Placement Support",
            venura: "100% (Premium)",
            coursera: "None",
            udemy: "None",
            bootcamp: "Yes"
        }, {
            feature: "1-on-1 Mentorship",
            venura: "Unlimited (Premium)",
            coursera: "None",
            udemy: "None",
            bootcamp: "Limited"
        }, {
            feature: "Real Projects",
            venura: "8+ projects",
            coursera: "3-4 projects",
            udemy: "6-8 projects",
            bootcamp: "4-5 projects"
        }, {
            feature: "Job Referrals",
            venura: "100+ partners",
            coursera: "None",
            udemy: "None",
            bootcamp: "50+ partners"
        }, {
            feature: "Community",
            venura: "Active 950+",
            coursera: "Forum only",
            udemy: "Limited",
            bootcamp: "Batch only"
        }, {
            feature: "Certification",
            venura: "Industry recognized",
            coursera: "University backed",
            udemy: "Platform certificate",
            bootcamp: "Industry recognized"
        }],
        certificatePreview: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
    };
    return <ProgramDetailTemplate programData={programData} />
}

export default DataSciencePage
