import { Brain, BookOpen, BarChart3, Database, LineChart, PieChart, Sigma, Search, FileSpreadsheet, BarChart as ChartBar, Network, GitBranch, Microscope, Code } from 'lucide-react';

// Mock Students Data
export const mockStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 92,
    completionRate: 85,
    topSkills: ['Problem Formulation', 'Data Cleaning', 'Model Selection'],
    completedCaselets: ['1', '3', '5', '7'],
    assignedCaselets: ['9', '11'],
    status: 'Active',
    isActive: true,
    scores: { '1': 95, '3': 88, '5': 92, '7': 85 }
  },
  {
    id: '2',
    name: 'Samantha Lee',
    email: 'samantha.lee@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 78,
    completionRate: 65,
    topSkills: ['Data Visualization', 'Exploratory Data Analysis'],
    completedCaselets: ['2', '4', '6'],
    assignedCaselets: ['8', '10'],
    status: 'At Risk',
    isActive: false,
    scores: { '2': 75, '4': 68, '6': 82 }
  },
  {
    id: '3',
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 85,
    completionRate: 90,
    topSkills: ['Feature Engineering', 'Model Selection', 'Data Collection'],
    completedCaselets: ['1', '3', '5', '9'],
    assignedCaselets: ['11', '13'],
    status: 'Active',
    isActive: true,
    scores: { '1': 88, '3': 92, '5': 85, '9': 90 }
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 65,
    completionRate: 50,
    topSkills: ['Data Visualization', 'Exploratory Data Analysis'],
    completedCaselets: ['2', '4'],
    assignedCaselets: ['6', '8', '10'],
    status: 'Needs Help',
    isActive: true,
    scores: { '2': 62, '4': 68 }
  },
  {
    id: '5',
    name: 'David Kim',
    email: 'david.kim@example.com',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 88,
    completionRate: 75,
    topSkills: ['Model Diagnosis', 'Data Cleaning', 'Feature Engineering'],
    completedCaselets: ['1', '5', '7', '9'],
    assignedCaselets: ['11'],
    status: 'Active',
    isActive: true,
    scores: { '1': 90, '5': 85, '7': 92, '9': 86 }
  }
];

// Mock Caselets Data
export const mockCaselets = [
  {
    id: '1',
    title: 'Clicks to Conversion: Decoding E-Commerce Behavior',
    domain: 'E-Commerce Analytics',
    difficulty: 'Medium',
    description: 'Analyze customer journey data to optimize conversion rates and understand purchasing patterns.',
    skills: ['Data Collection', 'Feature Engineering', 'Model Selection'],
    averageScore: 82,
    completionTime: 35,
    icon: Brain
  },
  {
    id: '2',
    title: 'Sentiment at Scale: Tracking Social Media Buzz',
    domain: 'Natural Language Processing',
    difficulty: 'Hard',
    description: 'Build a sentiment analysis model to track brand perception across social media platforms.',
    skills: ['Data Collection', 'Text Processing', 'Model Selection'],
    averageScore: 75,
    completionTime: 45,
    icon: LineChart
  },
  {
    id: '3',
    title: 'Smart City, Safer Streets: Predicting Traffic Accidents',
    domain: 'Urban Analytics',
    difficulty: 'Medium',
    description: 'Develop a predictive model for traffic accident hotspots using historical data.',
    skills: ['Data Cleaning', 'Feature Engineering', 'Model Diagnosis'],
    averageScore: 80,
    completionTime: 40,
    icon: Brain
  },
  {
    id: '4',
    title: 'The Patient Puzzle: Predicting Hospital Readmissions',
    domain: 'Healthcare Analytics',
    difficulty: 'Hard',
    description: 'Create a model to identify patients at risk of hospital readmission.',
    skills: ['Problem Formulation', 'Feature Selection', 'Model Selection'],
    averageScore: 68,
    completionTime: 50,
    icon: Brain
  },
  {
    id: '5',
    title: 'Foodie Forecast: Predicting Restaurant Ratings',
    domain: 'Recommendation Systems',
    difficulty: 'Medium',
    description: 'Build a prediction model for restaurant ratings based on various features.',
    skills: ['Data Cleaning', 'EDA', 'Feature Engineering'],
    averageScore: 78,
    completionTime: 35,
    icon: BarChart3
  },
  {
    id: '6',
    title: 'Climate Check: Air Quality and Health Outcomes',
    domain: 'Environmental Analytics',
    difficulty: 'Hard',
    description: 'Analyze the relationship between air quality metrics and public health data.',
    skills: ['Data Collection', 'EDA', 'Model Diagnosis'],
    averageScore: 72,
    completionTime: 45,
    icon: Brain
  },
  {
    id: '7',
    title: 'Spot the Fraud: Credit Card Transaction Monitoring',
    domain: 'Financial Analytics',
    difficulty: 'Hard',
    description: 'Develop a fraud detection system for credit card transactions.',
    skills: ['Problem Formulation', 'Feature Engineering', 'Model Selection'],
    averageScore: 70,
    completionTime: 50,
    icon: Brain
  },
  {
    id: '8',
    title: 'Streaming Success: What Makes a Show Binge-Worthy?',
    domain: 'Entertainment Analytics',
    difficulty: 'Medium',
    description: 'Analyze streaming data to identify factors contributing to show success.',
    skills: ['Data Collection', 'EDA', 'Data Visualization'],
    averageScore: 85,
    completionTime: 40,
    icon: BarChart3
  },
  {
    id: '9',
    title: 'College Dropout: Predicting Student Retention',
    domain: 'Education Analytics',
    difficulty: 'Medium',
    description: 'Build a model to identify students at risk of dropping out.',
    skills: ['Problem Formulation', 'Feature Selection', 'Model Diagnosis'],
    averageScore: 77,
    completionTime: 35,
    icon: Brain
  },
  {
    id: '10',
    title: 'Sustainable Shopping: Forecasting Eco-Friendly Products',
    domain: 'Retail Analytics',
    difficulty: 'Medium',
    description: 'Predict demand for sustainable products using historical sales data.',
    skills: ['Data Collection', 'Feature Engineering', 'Model Selection'],
    averageScore: 80,
    completionTime: 40,
    icon: LineChart
  }
];

// Mock Skills Data
export const mockSkills = [
  {
    domain: 'Data Understanding',
    skills: [
      { name: 'Problem Formulation', level: 'Advanced', icon: Brain },
      { name: 'Data Collection and Acquisition', level: 'Intermediate', icon: Database },
      { name: 'Data Cleaning and Preprocessing', level: 'Advanced', icon: FileSpreadsheet },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Expert', icon: Search }
    ]
  },
  {
    domain: 'Feature Engineering',
    skills: [
      { name: 'Feature Engineering and Selection', level: 'Advanced', icon: Code },
      { name: 'Experiment Design', level: 'Intermediate', icon: Microscope },
      { name: 'Data Visualization', level: 'Expert', icon: ChartBar }
    ]
  },
  {
    domain: 'Model Development',
    skills: [
      { name: 'Model Selection', level: 'Advanced', icon: GitBranch },
      { name: 'Model Diagnosis', level: 'Intermediate', icon: Network }
    ]
  }
];

// Mock Activity Data for Contribution Graph
export const mockActivityData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - 365 + i);
  
  const dayOfWeek = date.getDay();
  const isWeekday = dayOfWeek > 0 && dayOfWeek < 6;
  const isRecent = i > 300;
  
  let count = 0;
  if (isWeekday) {
    if (isRecent) {
      count = Math.floor(Math.random() * 5);
    } else {
      count = Math.floor(Math.random() * 3);
    }
  } else {
    if (isRecent) {
      count = Math.floor(Math.random() * 3);
    } else {
      count = Math.floor(Math.random() * 2);
    }
  }
  
  if (Math.random() < 0.3) {
    count = 0;
  }
  
  return {
    date: date.toISOString().split('T')[0],
    count
  };
});

// Mock Learning Path Data
export const mockLearningPath = [
  {
    id: '1',
    title: 'Problem Formulation Fundamentals',
    status: 'completed',
    score: 92
  },
  {
    id: '2',
    title: 'Data Collection Techniques',
    status: 'completed',
    score: 85
  },
  {
    id: '3',
    title: 'Advanced Data Cleaning',
    status: 'completed',
    score: 88
  },
  {
    id: '4',
    title: 'Feature Engineering Mastery',
    status: 'in-progress',
    score: null
  },
  {
    id: '5',
    title: 'Model Selection and Evaluation',
    status: 'locked',
    score: null
  },
  {
    id: '6',
    title: 'Advanced Model Diagnosis',
    status: 'locked',
    score: null
  }
];

// Mock Recommendations
export const mockRecommendations = [
  {
    id: '1',
    caseletId: '4',
    title: 'The Patient Puzzle: Predicting Hospital Readmissions',
    reason: 'Aligns with your strong problem formulation skills',
    confidence: 92,
    domain: 'Healthcare Analytics',
    difficulty: 'Hard'
  },
  {
    id: '2',
    caseletId: '7',
    title: 'Spot the Fraud: Credit Card Transaction Monitoring',
    reason: 'Will strengthen your feature engineering expertise',
    confidence: 85,
    domain: 'Financial Analytics',
    difficulty: 'Hard'
  },
  {
    id: '3',
    caseletId: '10',
    title: 'Sustainable Shopping: Forecasting Eco-Friendly Products',
    reason: 'Great opportunity to apply your model selection skills',
    confidence: 78,
    domain: 'Retail Analytics',
    difficulty: 'Medium'
  }
];