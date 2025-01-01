import dash
from dash import dcc, html
import pandas as pd
import plotly.express as px
import json

# Load your dataset
df = pd.read_csv("Unified_Regional_Analysis.csv")
print(df["Region"].unique())

# Load GeoJSON file
with open("maroc.geojson", "r") as f:
    geojson = json.load(f)
regions = [feature['properties']['region'] for feature in geojson['features']]
print(regions)

# Initialize Dash App
app = dash.Dash(__name__)

# App Layout
app.layout = html.Div([
    html.H1("Economic Status Dashboard", style={'textAlign': 'center'}),
    
    # First Row: Stacked Bar Chart and Pie Chart
    html.Div([
        html.Div([
            # Stacked Bar Chart
            dcc.Graph(
                id="stacked-bar-chart",
                figure=px.bar(
                    df,
                    x="Region",
                    y=["Work for Pay Rate (%)", "Average Weekly Work Frequency"],
                    title="Work-for-Pay Rate (%) and Weekly Work Frequency",
                    barmode="group",  # 'group' for side-by-side bars
                    labels={"value": "Percentage/Frequency", "Region": "Region"},
                    text_auto=True
                )
            )
        ], style={"width": "49%", "display": "inline-block"}),  # Adjust width for side-by-side layout

        html.Div([
            # Pie Chart
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
        ], style={"width": "49%", "display": "inline-block"}),  # Adjust width for side-by-side layout
    ]),
    
    # Second Row: Map Visualization
    html.Div([
        dcc.Graph(
            id="map-chart",
            figure=px.choropleth_mapbox(
                df,
                geojson=geojson,
                locations="Region",
                featureidkey="properties.region",
                color="Low Socio-Economic Proportion (%)",
                title="Proportion of Students from Disadvantaged Backgrounds",
                color_continuous_scale="Viridis",
                mapbox_style="carto-positron",
                zoom=5,
                center={"lat": 32, "lon": -6}  # Center for Morocco
            ).update_layout(margin={"r": 0, "t": 0, "l": 0, "b": 0})
        )
    ], style={"width": "100%", "marginTop": "20px"})  # Map occupies full width
])

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8052)
