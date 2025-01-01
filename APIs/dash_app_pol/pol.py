import dash
from dash import dcc, html
from dash.dependencies import Input, Output, State
from sentence_transformers import SentenceTransformer
from transformers import T5Tokenizer, T5ForConditionalGeneration
import faiss
import json
import os
from PyPDF2 import PdfReader

# Function to clean text
def clean_text(text):
    text = text.replace("\n", " ").replace("\r", " ")  # Remove line breaks
    text = " ".join(text.split())  # Remove extra spaces
    return text

# Load prompts and responses from a JSON file
with open('prompts.json', 'r') as file:
    prompts_and_responses = json.load(file)

# Extract values (responses) for the corpus and clean them
corpus = [clean_text(response) for response in prompts_and_responses.values()]

# Function to extract text from PDFs
def extract_text_from_pdfs(pdf_folder):
    documents = []
    for file_name in os.listdir(pdf_folder):
        if file_name.endswith('.pdf'):
            file_path = os.path.join(pdf_folder, file_name)
            reader = PdfReader(file_path)
            text = ""
            for page in reader.pages:
                text += page.extract_text()
            documents.append(clean_text(text))  # Clean the extracted text
    return documents

# Add PDFs to the corpus
pdf_folder = 'C:\\Users\\Chorouk\\Downloads\\dash_app_pol\\folder'  # Replace with your folder path
pdf_texts = extract_text_from_pdfs(pdf_folder)
corpus.extend(pdf_texts)

# Create embeddings and FAISS index
embedder = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')
embeddings = embedder.encode(corpus, convert_to_tensor=False)
dimension = embeddings[0].shape[0]
index = faiss.IndexFlatL2(dimension)
index.add(embeddings)

print("FAISS index created successfully.")

# Function to search the corpus
def search(query, top_k=1):
    query_embedding = embedder.encode([query], convert_to_tensor=False)
    distances, indices = index.search(query_embedding, top_k)
    results = [corpus[i] for i in indices[0]]
    return results

# Load the T5 model and tokenizer
tokenizer = T5Tokenizer.from_pretrained('t5-small')
model = T5ForConditionalGeneration.from_pretrained('t5-small')

# Function to generate a response
def generate_response(context):
    input_text = f"summarize: {context}"
    input_ids = tokenizer.encode(input_text, return_tensors='pt', max_length=512, truncation=True)
    output_ids = model.generate(input_ids, max_length=150, num_beams=2, length_penalty=1.2, early_stopping=True)
    return tokenizer.decode(output_ids[0], skip_special_tokens=True)

# Initialize Dash app
app = dash.Dash(__name__)
app.title = "Policy Recommendation System"

# App Layout
app.layout = html.Div([
    html.Div([
        html.H1("Policy Recommendation System", style={'textAlign': 'center', 'color': '#2c3e50', 'margin-bottom': '20px'}),
        html.P("Get tailored policy recommendations by entering a prompt below.", 
               style={'textAlign': 'center', 'color': '#34495e', 'font-size': '16px'}),
    ], style={"margin-bottom": "40px", "background-color": "#ecf0f1", "padding": "20px", "border-radius": "10px"}),

    # Input query
    html.Div([
        html.Label("Enter your prompt:", style={"font-size": "16px", "margin-bottom": "5px", "color": "#2c3e50"}),
        dcc.Input(id="query-input", type="text", placeholder="Type your query here", style={
            "width": "70%", "padding": "10px","margin-left": "10px", "margin-bottom": "10px", "border": "1px solid #bdc3c7", "border-radius": "5px"
        }),
        html.Button("Generate Policy", id="generate-button", n_clicks=0, 
                    style={"background-color": "#3498db", "color": "#fff", "padding": "10px 15px", 
                           "border": "none", "border-radius": "5px", "cursor": "pointer"}),
    ], style={"textAlign": "center", "margin-bottom": "30px"}),

    # Generated response
    html.Div([
        html.H3("Generated Policy:", style={'textAlign': 'left', 'color': '#2c3e50'}),
        html.Div(id="generated-response", style={
            "border": "1px solid #bdc3c7", "padding": "20px", "min-height": "150px", "border-radius": "10px",
            "background-color": "#f9f9f9", "color": "#2c3e50", "font-size": "14px"
        }),
    ], style={"width": "80%", "margin": "0 auto"})
])

# Callbacks
@app.callback(
    Output("generated-response", "children"),
    [Input("generate-button", "n_clicks")],
    [State("query-input", "value")]
)
def process_query(n_clicks, query):
    if n_clicks > 0 and query:
        # Search for relevant documents
        retrieved_docs = search(query)
        if retrieved_docs:
            context = clean_text(retrieved_docs[0])
            response = generate_response(context)
        else:
            response = "No relevant policies found."
        return response
    return "Enter a prompt to get started."

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8055)

