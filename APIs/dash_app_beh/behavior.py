import dash
from dash import dcc, html
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

# Load your dataset
df = pd.read_csv("Unified_Regional_Analysis.csv")

# Initialize Dash App
app = dash.Dash(__name__)

# App Layout
app.layout = html.Div([
    html.H1("Students Behavior Dashboard", style={'textAlign': 'center'}),

    # First Row: Bubble Chart and Dual Axis Chart
    html.Div([
        html.Div([
            # Bubble Chart
            dcc.Graph(
                id="bubble-chart",
                figure=px.scatter(
                    df,
                    x="Work for Pay Rate (%)",
                    y="Average Weekly Work Frequency",
                    size="Low Socio-Economic Proportion (%)",
                    color="Region",
                    title="Work-for-Pay Rate vs. Average Weekly Work Frequency",
                    labels={
                        "Work for Pay Rate (%)": "Work-for-Pay Rate (%)",
                        "Average Weekly Work Frequency": "Average Weekly Work Frequency",
                        "Low Socio-Economic Proportion (%)": "Socio-Economic Disadvantage"
                    },
                    hover_name="Region",
                    size_max=40
                )
            )
        ], style={"width": "49%", "display": "inline-block"}),

        html.Div([
            # Dual Axis Chart
            dcc.Graph(
                id="dual-axis-chart",
                figure={
                    "data": [
                        go.Bar(
                            x=df["Region"],
                            y=df["Grade Repetition Rate"],
                            name="Grade Repetition Rate (%)",
                            marker_color="blue",
                            yaxis="y1"
                        ),
                        go.Scatter(
                            x=df["Region"],
                            y=df["ICT-Enhanced Learning (%)"],
                            name="ICT-Enhanced Learning (%)",
                            marker_color="green",
                            mode="lines+markers",
                            yaxis="y2"
                        )
                    ],
                    "layout": go.Layout(
                        title="Grade Repetition Rate vs. ICT-Enhanced Learning",
                        xaxis=dict(title="Region"),
                        yaxis=dict(title="Grade Repetition Rate (%)", side="left"),
                        yaxis2=dict(
                            title="ICT-Enhanced Learning (%)",
                            overlaying="y",
                            side="right"
                        ),
                        legend=dict(x=0.1, y=1.1),
                        margin=dict(l=40, r=40, t=40, b=40)
                    )
                }
            )
        ], style={"width": "49%", "display": "inline-block"})
    ])
])

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8053)

