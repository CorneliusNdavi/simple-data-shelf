
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

// Initial projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Predictive Analysis of Customer Behavior",
    description: "Developed a machine learning model to predict customer purchase behavior based on historical transaction data. Used Python, Pandas, and Scikit-learn to build and validate the model.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/corneliusndavi/customer-prediction",
    date: "2023-05-01"
  },
  {
    id: "2",
    title: "COVID-19 Data Visualization Dashboard",
    description: "Created an interactive dashboard to visualize COVID-19 data across different regions. Implemented using Python, Plotly, and Dash to provide real-time insights.",
    tags: ["Python", "Data Visualization", "Plotly", "Dash"],
    githubUrl: "https://github.com/corneliusndavi/covid-dashboard",
    liveUrl: "https://covid-dashboard.example.com",
    date: "2023-02-15"
  },
  {
    id: "3",
    title: "Natural Language Processing for Sentiment Analysis",
    description: "Built a sentiment analysis tool to analyze customer reviews and feedback. Utilized NLTK and TensorFlow to create a deep learning model for accurate sentiment classification.",
    tags: ["Python", "NLP", "TensorFlow", "NLTK"],
    githubUrl: "https://github.com/corneliusndavi/sentiment-analysis",
    date: "2022-11-20"
  },
  {
    id: "4",
    title: "Stock Market Price Prediction",
    description: "Developed a time series forecasting model to predict stock market prices. Used ARIMA, LSTM, and other statistical methods to improve prediction accuracy.",
    tags: ["Python", "Time Series Analysis", "LSTM", "Financial Data"],
    githubUrl: "https://github.com/corneliusndavi/stock-prediction",
    date: "2022-08-10"
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
