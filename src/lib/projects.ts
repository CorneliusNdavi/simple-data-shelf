
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction Model",
    description: "Developed a machine learning model to predict customer churn for a telecom company. Achieved 89% accuracy using Random Forest and XGBoost algorithms.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "XGBoost"],
    githubUrl: "https://github.com/corneliusndavi/churn-prediction",
    liveUrl: "https://churn-prediction-demo.herokuapp.com",
    date: "2024-10-15"
  },
  {
    id: "2",
    title: "COVID-19 Data Visualization Dashboard",
    description: "Created an interactive dashboard to visualize COVID-19 trends across African countries. Used Python, Dash, and Plotly to visualize infection rates, recovery, and vaccination data.",
    tags: ["Python", "Data Visualization", "Plotly", "Dash"],
    githubUrl: "https://github.com/corneliusndavi/covid-africa-dashboard",
    liveUrl: "https://covid-africa-dashboard.herokuapp.com",
    date: "2024-11-20"
  },
  {
    id: "3",
    title: "Sentiment Analysis for Product Reviews",
    description: "Built an NLP pipeline to analyze customer sentiment in product reviews. Implemented advanced text preprocessing and BERT model fine-tuning to achieve 92% classification accuracy.",
    tags: ["Python", "NLP", "TensorFlow", "BERT", "Hugging Face"],
    githubUrl: "https://github.com/corneliusndavi/sentiment-analysis",
    date: "2024-12-10"
  },
  {
    id: "4",
    title: "Nairobi Housing Price Predictor",
    description: "Developed a regression model to predict housing prices in Nairobi based on location, size, amenities, and other features. Created a web app for real-time predictions.",
    tags: ["Python", "Regression", "Flask", "GeoPandas", "Scikit-learn"],
    githubUrl: "https://github.com/corneliusndavi/nairobi-housing",
    liveUrl: "https://nairobi-housing-predictor.herokuapp.com",
    date: "2025-01-05"
  },
  {
    id: "5",
    title: "Agricultural Crop Yield Forecasting",
    description: "Created a time series forecasting model to predict crop yields based on historical data and weather patterns. Implemented ARIMA, LSTM, and Prophet models for comparison.",
    tags: ["Python", "Time Series", "LSTM", "Prophet", "Agricultural Data"],
    githubUrl: "https://github.com/corneliusndavi/crop-yield-forecast",
    date: "2025-01-22"
  }
];

// Function to get all projects
export const getAllProjects = (): Project[] => {
  return projectsData;
};

// Function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

// Function to add a new project (this would be called by the Python script)
export const addProject = (project: Omit<Project, "id">): Project => {
  const newProject: Project = {
    ...project,
    id: Date.now().toString(),
  };
  
  projectsData.push(newProject);
  return newProject;
};

// Function to update a project
export const updateProject = (id: string, updatedProject: Partial<Project>): Project | undefined => {
  const index = projectsData.findIndex(project => project.id === id);
  
  if (index !== -1) {
    projectsData[index] = { ...projectsData[index], ...updatedProject };
    return projectsData[index];
  }
  
  return undefined;
};

// Function to delete a project
export const deleteProject = (id: string): boolean => {
  const index = projectsData.findIndex(project => project.id === id);
  
  if (index !== -1) {
    projectsData.splice(index, 1);
    return true;
  }
  
  return false;
};
