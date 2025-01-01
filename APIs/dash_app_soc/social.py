import dash
from dash import dcc, html
import pandas as pd
import plotly.express as px

# Load your dataset
df = pd.read_csv("Unified_Regional_Analysis.csv")

# Initialize Dash App
app = dash.Dash(__name__)

# App Layout
app.layout = html.Div([
    html.H1("Social Conditions Dashboard", style={'textAlign': 'center'}),
    
    # Stacked Bar Chart: Work-for-Pay Rate (%) alongside average weekly work frequency
    html.Div([
        dcc.Graph(
            id="stacked-bar-chart",
            figure=px.bar(
                df,
                x="Region",
                y=["Work for Pay Rate (%)", "Average Weekly Work Frequency"],
                title="Work-for-Pay Rate (%) and Average Weekly Work Frequency by Region",
                barmode="group",  # 'group' for side-by-side, 'stack' for stacked bars
                labels={"value": "Percentage/Frequency", "Region": "Region"},
                text_auto=True
            )
        )
    ], style={"width": "100%", "marginBottom": "50px"}),
    
    # Pie Chart: Breakdown of "Clear Idea About Future Job Rate" by region
    html.Div([
        dcc.Graph(
            id="pie-chart",
            figure=px.pie(
                df,
                names="Region",
                values="Clear Idea About Future Job Rate",
                title="Clear Idea About Future Job Rate by Region",
                hole=0.4  # Donut-style pie chart
            )
        )
    ], style={"width": "100%"})
])

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8051)
