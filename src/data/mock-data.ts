import { Brain, BookOpen, BarChart3, Database, LineChart, PieChart, Sigma } from 'lucide-react';

// Mock Students Data
export const mockStudents = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 92,
    completionRate: 85,
    topSkills: ['Data Mining', 'Machine Learning', 'Statistical Analysis'],
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
    topSkills: ['Data Visualization', 'Statistical Analysis'],
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
    topSkills: ['Machine Learning', 'Data Mining', 'Neural Networks'],
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
    topSkills: ['Data Visualization', 'Basic Statistics'],
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
    topSkills: ['Statistical Analysis', 'Data Mining', 'Regression Models'],
    completedCaselets: ['1', '5', '7', '9'],
    assignedCaselets: ['11'],
    status: 'Active',
    isActive: true,
    scores: { '1': 90, '5': 85, '7': 92, '9': 86 }
  },
  {
    id: '6',
    name: 'Jessica Taylor',
    email: 'jessica.taylor@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 72,
    completionRate: 60,
    topSkills: ['Data Visualization', 'Basic Machine Learning'],
    completedCaselets: ['2', '6', '8'],
    assignedCaselets: ['10', '12'],
    status: 'Needs Help',
    isActive: false,
    scores: { '2': 75, '6': 70, '8': 72 }
  },
  {
    id: '7',
    name: 'Ryan Patel',
    email: 'ryan.patel@example.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 95,
    completionRate: 95,
    topSkills: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'Data Mining'],
    completedCaselets: ['1', '3', '5', '7', '9', '11'],
    assignedCaselets: ['13', '15'],
    status: 'Active',
    isActive: true,
    scores: { '1': 98, '3': 95, '5': 92, '7': 96, '9': 94, '11': 95 }
  },
  {
    id: '8',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@example.com',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    overallScore: 82,
    completionRate: 70,
    topSkills: ['Statistical Analysis', 'Data Visualization', 'Regression Models'],
    completedCaselets: ['2', '4', '8', '10'],
    assignedCaselets: ['12', '14'],
    status: 'Active',
    isActive: true,
    scores: { '2': 85, '4': 80, '8': 78, '10': 84 }
  }
];

// Mock Caselets Data
export const mockCaselets = [
  {
    id: '1',
    title: 'Customer Segmentation Analysis',
    domain: 'Data Mining',
    difficulty: 'Medium',
    description: 'Apply clustering techniques to segment customers based on purchasing behavior.',
    skills: ['Clustering', 'Customer Analytics', 'Data Preprocessing'],
    averageScore: 82,
    completionTime: 35,
    icon: Brain
  },
  {
    id: '2',
    title: 'Sales Forecasting Model',
    domain: 'Machine Learning',
    difficulty: 'Hard',
    description: 'Build a time series forecasting model to predict future sales based on historical data.',
    skills: ['Time Series Analysis', 'Forecasting', 'Feature Engineering'],
    averageScore: 75,
    completionTime: 45,
    icon: LineChart
  },
  {
    id: '3',
    title: 'Sentiment Analysis of Product Reviews',
    domain: 'Natural Language Processing',
    difficulty: 'Medium',
    description: 'Analyze customer reviews to determine sentiment and extract key insights.',
    skills: ['Text Mining', 'Sentiment Analysis', 'NLP'],
    averageScore: 80,
    completionTime: 40,
    icon: Brain
  },
  {
    id: '4',
    title: 'Fraud Detection System',
    domain: 'Data Mining',
    difficulty: 'Hard',
    description: 'Develop a system to identify potentially fraudulent transactions using anomaly detection.',
    skills: ['Anomaly Detection', 'Classification', 'Imbalanced Data'],
    averageScore: 68,
    completionTime: 50,
    icon: Brain
  },
  {
    id: '5',
    title: 'Customer Churn Prediction',
    domain: 'Machine Learning',
    difficulty: 'Medium',
    description: 'Build a model to predict which customers are likely to cancel their subscription.',
    skills: ['Classification', 'Feature Selection', 'Model Evaluation'],
    averageScore: 78,
    completionTime: 35,
    icon: BarChart3
  },
  {
    id: '6',
    title: 'Market Basket Analysis',
    domain: 'Data Mining',
    difficulty: 'Easy',
    description: 'Discover associations between products frequently purchased together.',
    skills: ['Association Rules', 'Apriori Algorithm', 'Data Preprocessing'],
    averageScore: 85,
    completionTime: 30,
    icon: Brain
  },
  {
    id: '7',
    title: 'Customer Lifetime Value Prediction',
    domain: 'Statistical Analysis',
    difficulty: 'Medium',
    description: 'Estimate the total value a business can expect from a customer throughout their relationship.',
    skills: ['Regression', 'Customer Analytics', 'Statistical Modeling'],
    averageScore: 76,
    completionTime: 40,
    icon: Sigma
  },
  {
    id: '8',
    title: 'Product Recommendation System',
    domain: 'Machine Learning',
    difficulty: 'Hard',
    description: 'Build a collaborative filtering system to recommend products to users.',
    skills: ['Collaborative Filtering', 'Recommendation Systems', 'Matrix Factorization'],
    averageScore: 72,
    completionTime: 45,
    icon: Brain
  },
  {
    id: '9',
    title: 'Customer Segmentation Dashboard',
    domain: 'Data Visualization',
    difficulty: 'Medium',
    description: 'Create an interactive dashboard to visualize customer segments and their characteristics.',
    skills: ['Data Visualization', 'Dashboard Design', 'Clustering'],
    averageScore: 80,
    completionTime: 35,
    icon: PieChart
  },
  {
    id: '10',
    title: 'A/B Testing Analysis',
    domain: 'Statistical Analysis',
    difficulty: 'Medium',
    description: 'Analyze the results of an A/B test to determine statistical significance.',
    skills: ['Hypothesis Testing', 'Statistical Inference', 'Experimental Design'],
    averageScore: 79,
    completionTime: 30,
    icon: Sigma
  },
  {
    id: '11',
    title: 'Customer Support Ticket Classification',
    domain: 'Natural Language Processing',
    difficulty: 'Medium',
    description: 'Build a model to automatically categorize customer support tickets based on their content.',
    skills: ['Text Classification', 'NLP', 'Feature Extraction'],
    averageScore: 77,
    completionTime: 40,
    icon: Brain
  },
  {
    id: '12',
    title: 'Database Optimization Challenge',
    domain: 'Data Engineering',
    difficulty: 'Hard',
    description: 'Optimize database queries and schema design for improved performance.',
    skills: ['SQL Optimization', 'Database Design', 'Query Performance'],
    averageScore: 65,
    completionTime: 50,
    icon: Database
  },
  {
    id: '13',
    title: 'Sales Performance Dashboard',
    domain: 'Data Visualization',
    difficulty: 'Easy',
    description: 'Create an interactive dashboard to track sales performance across regions and products.',
    skills: ['Data Visualization', 'Dashboard Design', 'KPI Tracking'],
    averageScore: 88,
    completionTime: 25,
    icon: BarChart3
  },
  {
    id: '14',
    title: 'Predictive Maintenance Model',
    domain: 'Machine Learning',
    difficulty: 'Hard',
    description: 'Build a model to predict equipment failures before they occur.',
    skills: ['Time Series Analysis', 'Anomaly Detection', 'Predictive Modeling'],
    averageScore: 70,
    completionTime: 45,
    icon: LineChart
  },
  {
    id: '15',
    title: 'Customer Feedback Analysis',
    domain: 'Natural Language Processing',
    difficulty: 'Medium',
    description: 'Extract key themes and insights from open-ended customer feedback.',
    skills: ['Text Mining', 'Topic Modeling', 'Sentiment Analysis'],
    averageScore: 75,
    completionTime: 35,
    icon: Brain
  }
];

// Mock Skills Data
export const mockSkills = [
  {
    domain: 'Data Mining',
    skills: [
      { name: 'Clustering', level: 'Intermediate' },
      { name: 'Association Rules', level: 'Beginner' },
      { name: 'Anomaly Detection', level: 'Advanced' },
      { name: 'Pattern Recognition', level: 'Intermediate' },
      { name: 'Data Preprocessing', level: 'Beginner' }
    ]
  },
  {
    domain: 'Machine Learning',
    skills: [
      { name: 'Supervised Learning', level: 'Intermediate' },
      { name: 'Unsupervised Learning', level: 'Intermediate' },
      { name: 'Feature Engineering', level: 'Advanced' },
      { name: 'Model Evaluation', level: 'Beginner' },
      { name: 'Ensemble Methods', level: 'Advanced' }
    ]
  },
  {
    domain: 'Data Visualization',
    skills: [
      { name: 'Chart Selection', level: 'Beginner' },
      { name: 'Dashboard Design', level: 'Intermediate' },
      { name: 'Interactive Visualization', level: 'Advanced' },
      { name: 'Data Storytelling', level: 'Intermediate' },
      { name: 'Visual Encoding', level: 'Beginner' }
    ]
  },
  {
    domain: 'Statistical Analysis',
    skills: [
      { name: 'Hypothesis Testing', level: 'Intermediate' },
      { name: 'Regression Analysis', level: 'Intermediate' },
      { name: 'Probability Theory', level: 'Advanced' },
      { name: 'Experimental Design', level: 'Beginner' },
      { name: 'Statistical Inference', level: 'Advanced' }
    ]
  }
];

// Mock Activity Data for Contribution Graph
export const mockActivityData = Array.from({ length: 365 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() -  365 + i);
  
  // Generate more activity for recent dates and weekdays
  const dayOfWeek = date.getDay();
  const isWeekday = dayOfWeek > 0 && dayOfWeek < 6;
  const isRecent = i > 300;
  
  let count = 0;
  if (isWeekday) {
    if (isRecent) {
      count = Math.floor(Math.random() * 5); // 0-4 activities for recent weekdays
    } else {
      count = Math.floor(Math.random() * 3); // 0-2 activities for older weekdays
    }
  } else {
    if (isRecent) {
      count = Math.floor(Math.random() * 3); // 0-2 activities for recent weekends
    } else {
      count = Math.floor(Math.random() * 2); // 0-1 activities for older weekends
    }
  }
  
  // Ensure some days have zero activity
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
    title: 'Introduction to Data Mining',
    status: 'completed',
    score: 92
  },
  {
    id: '2',
    title: 'Clustering Techniques',
    status: 'completed',
    score: 85
  },
  {
    id: '3',
    title: 'Association Rule Mining',
    status: 'completed',
    score: 78
  },
  {
    id: '4',
    title: 'Advanced Pattern Recognition',
    status: 'in-progress',
    score: null
  },
  {
    id: '5',
    title: 'Anomaly Detection',
    status: 'locked',
    score: null
  },
  {
    id: '6',
    title: 'Data Mining in Real-world Applications',
    status: 'locked',
    score: null
  }
];

// Mock Recommendations
export const mockRecommendations = [
  {
    id: '1',
    caseletId: '4',
    title: 'Fraud Detection System',
    reason: 'Based on your strong performance in clustering and anomaly detection',
    confidence: 92,
    domain: 'Data Mining',
    difficulty: 'Hard'
  },
  {
    id: '2',
    caseletId: '8',
    title: 'Product Recommendation System',
    reason: 'Will help strengthen your collaborative filtering skills',
    confidence: 85,
    domain: 'Machine Learning',
    difficulty: 'Hard'
  },
  {
    id: '3',
    caseletId: '10',
    title: 'A/B Testing Analysis',
    reason: 'Recommended to improve your statistical analysis skills',
    confidence: 78,
    domain: 'Statistical Analysis',
    difficulty: 'Medium'
  }
];