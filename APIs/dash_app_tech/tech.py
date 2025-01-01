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
    html.H1("Tech Resources Dashboard", style={'textAlign': 'center'}),

    # First Row: Pie Chart and Bar Chart
    html.Div([
        # Pie Chart
        html.Div([
            dcc.Graph(
                id="pie-chart",
                figure=px.pie(
                    df.melt(id_vars="Region", value_vars=["Low_ICT_Quality(%)", "Medium_ICT_Quality(%)", "High_ICT_Quality(%)"]),
                    names="variable",
                    values="value",
                    title="Distribution of ICT Quality Categories Across Regions",
                    labels={"variable": "ICT Quality"}
                )
            )
        ], style={"width": "49%", "display": "inline-block"}),

        # Bar Chart
        html.Div([
            dcc.Graph(
                id="bar-chart",
                figure=px.bar(
                    df,
                    x="Region",
                    y="Fully Equipped Schools (%)",
                    title="Percentage of Fully Equipped Schools in Each Region",
                    labels={"Region": "Region", "Fully Equipped Schools (%)": "Fully Equipped Schools (%)"},
                    color="Region",
                ).update_layout(showlegend=False)
            )
        ], style={"width": "49%", "display": "inline-block"}),
    ]),

    # Second Row: Stacked Bar Chart
    html.Div([
        dcc.Graph(
            id="stacked-bar-chart",
            figure=px.bar(
                df.melt(id_vars="Region", value_vars=["ICT-Enhanced Learning (%)", "Low_ICT_Quality(%)", "Medium_ICT_Quality(%)", "High_ICT_Quality(%)"]),
                x="Region",
                y="value",
                color="variable",
                title="ICT-Enhanced Learning vs. ICT Availability Categories by Region",
                labels={"variable": "Category", "value": "Percentage (%)"},
                barmode="stack"
            )
        )
    ], style={"width": "100%", "display": "block"})
])

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8054)
