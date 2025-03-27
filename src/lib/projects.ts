
export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  codeSnippet?: string;
}

// Projects data
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Customer Churn Prediction Model",
    description: "Developed a machine learning model to predict customer churn for a telecom company. Achieved 89% accuracy using Random Forest and XGBoost algorithms.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "XGBoost"],
    githubUrl: "https://github.com/your-username/churn-prediction",
    liveUrl: "https://churn-prediction-demo.herokuapp.com",
    date: "2024-11-15",
    codeSnippet: `import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import xgboost as xgb

# Load and prepare data
def prepare_features(df):
    # Feature engineering
    df['tenure_group'] = pd.cut(df['tenure'], bins=[0, 12, 24, 36, 60], 
                               labels=['0-12 month', '12-24 month', '24-36 month', '36+ month'])
    return df

# Train XGBoost model
def train_model(X_train, y_train):
    model = xgb.XGBClassifier(
        max_depth=5,
        learning_rate=0.1,
        n_estimators=100,
        objective='binary:logistic'
    )
    model.fit(X_train, y_train)
    return model`
  },
  {
    id: "2",
    title: "COVID-19 Data Visualization Dashboard",
    description: "Created an interactive dashboard to visualize COVID-19 trends across African countries. Used Python, Dash, and Plotly to visualize infection rates, recovery, and vaccination data.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Python", "Data Visualization", "Plotly", "Dash"],
    githubUrl: "https://github.com/your-username/covid-africa-dashboard",
    liveUrl: "https://covid-africa-dashboard.herokuapp.com",
    date: "2024-12-05",
    codeSnippet: `import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.express as px
import pandas as pd

# Initialize Dash app
app = dash.Dash(__name__, external_stylesheets=['https://codepen.io/chriddyp/pen/bWLwgP.css'])

# Load COVID-19 data
df = pd.read_csv('africa_covid_data.csv')

# Create visualization
fig = px.line(df, x='date', y='cases', color='country',
              title='COVID-19 Cases in African Countries')

# Define layout
app.layout = html.Div([
    html.H1('COVID-19 in Africa Dashboard'),
    dcc.Graph(id='covid-trends', figure=fig),
    html.Div([
        html.H4('Select Countries:'),
        dcc.Dropdown(
            id='country-selector',
            options=[{'label': c, 'value': c} for c in df['country'].unique()],
            multi=True,
            value=['Kenya', 'South Africa', 'Nigeria']
        )
    ])
])`
  },
  {
    id: "3",
    title: "Sentiment Analysis for Product Reviews",
    description: "Built an NLP pipeline to analyze customer sentiment in product reviews. Implemented advanced text preprocessing and BERT model fine-tuning to achieve 92% classification accuracy.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Python", "NLP", "TensorFlow", "BERT", "Hugging Face"],
    githubUrl: "https://github.com/your-username/sentiment-analysis",
    liveUrl: "https://sentiment-analysis-demo.herokuapp.com",
    date: "2024-12-28",
    codeSnippet: `import torch
from transformers import BertTokenizer, BertForSequenceClassification
from torch.utils.data import DataLoader, TensorDataset

# Load pre-trained BERT model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=3)

# Tokenize and encode the dataset
def preprocess_data(texts, labels):
    encodings = tokenizer(texts, truncation=True, padding=True, max_length=128, return_tensors='pt')
    dataset = TensorDataset(encodings['input_ids'], encodings['attention_mask'], torch.tensor(labels))
    return dataset

# Fine-tune BERT on product reviews
def train_sentiment_model(train_dataloader, device):
    model.to(device)
    optimizer = torch.optim.AdamW(model.parameters(), lr=2e-5)
    
    for epoch in range(3):
        model.train()
        for batch in train_dataloader:
            batch = [b.to(device) for b in batch]
            input_ids, attention_mask, labels = batch
            
            outputs = model(input_ids, attention_mask=attention_mask, labels=labels)
            loss = outputs.loss
            
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()`
  },
  {
    id: "4",
    title: "Nairobi Housing Price Predictor",
    description: "Developed a regression model to predict housing prices in Nairobi based on location, size, amenities, and other features. Created a web app for real-time predictions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Python", "Regression", "Flask", "GeoPandas", "Scikit-learn"],
    githubUrl: "https://github.com/your-username/nairobi-housing",
    liveUrl: "https://nairobi-housing-predictor.herokuapp.com",
    date: "2025-02-10",
    codeSnippet: `from flask import Flask, request, jsonify, render_template
import pandas as pd
import pickle
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

app = Flask(__name__)

# Load trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Load location data
geo_data = pd.read_csv('nairobi_locations.csv')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    # Get input from form
    data = request.json
    
    # Prepare features
    features = np.array([
        data['size'], 
        data['bedrooms'],
        data['bathrooms'],
        data['location_score'],
        data['has_pool'],
        data['has_security']
    ]).reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(features)[0]
    
    return jsonify({'price': round(prediction, 2)})`
  },
  {
    id: "5",
    title: "Agricultural Crop Yield Forecasting",
    description: "Created a time series forecasting model to predict crop yields based on historical data and weather patterns. Implemented ARIMA, LSTM, and Prophet models for comparison.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    tags: ["Python", "Time Series", "LSTM", "Prophet", "Agricultural Data"],
    githubUrl: "https://github.com/your-username/crop-yield-forecast",
    liveUrl: "https://crop-yield-forecast.herokuapp.com",
    date: "2025-03-15",
    codeSnippet: `import pandas as pd
import numpy as np
from prophet import Prophet
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import matplotlib.pyplot as plt

# Load historical crop yield data
df = pd.read_csv('crop_yields.csv')

# Prepare data for Prophet
prophet_df = df[['date', 'yield']].rename(columns={'date': 'ds', 'yield': 'y'})

# Train Prophet model
def train_prophet_model(data):
    model = Prophet(yearly_seasonality=True, 
                   weekly_seasonality=False, 
                   daily_seasonality=False)
    model.add_regressor('rainfall')
    model.add_regressor('temperature')
    model.fit(data)
    return model

# Create LSTM model for sequence prediction
def create_lstm_model(sequence_length, features):
    model = Sequential()
    model.add(LSTM(50, activation='relu', input_shape=(sequence_length, features)))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mse')
    return model`
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
