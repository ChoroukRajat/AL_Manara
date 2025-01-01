
# import dash
# from dash import dcc, html
# from dash.dependencies import Input, Output
# import pandas as pd
# import plotly.express as px
# import json

# # Load your dataset
# df = pd.read_csv("Unified_Regional_Analysis.csv")
# print(df["Region"].unique())

# # Load GeoJSON file
# with open("maroc.geojson", "r") as f:
#     geojson = json.load(f)
# regions = [feature['properties']['region'] for feature in geojson['features']]
# print(regions)

# # Initialize Dash App
# app = dash.Dash(__name__)

# # App Layout
# app.layout = html.Div([
#     html.H1("Economic Status Dashboard", style={'textAlign': 'center'}),
    
#     html.Div([
#         # Map Visualization
#         html.Div([
#             dcc.Graph(
#                 id="map-chart",
#                 figure=px.choropleth_mapbox(
#                     df,
#                     geojson=geojson,
#                     locations="Region",
#                     featureidkey="properties.region",  # Adjust based on your GeoJSON property
#                     color="Low Socio-Economic Proportion (%)",
#                     title="Proportion of Students from Disadvantaged Backgrounds",
#                     color_continuous_scale="Viridis",
#                     mapbox_style="carto-positron",
#                     zoom=5,  # Adjust zoom level
#                     center={"lat": 32, "lon": -6}  # Adjust the center for Morocco
#                 ).update_layout(margin={"r":0,"t":0,"l":0,"b":0})
#             )
#         ], style={"width": "33%", "display": "inline-block"}),  # Adjust width for side-by-side layout

#         # Scatter Plot
#         html.Div([
#             dcc.Graph(
#                 id="scatter-plot",
#                 figure=px.scatter(
#                     df,
#                     x="Low Socio-Economic Proportion (%)",
#                     y="Grade Repetition Rate",
#                     text="Region",
#                     title="Socio-Economic Proportion vs. Grade Repetition",
#                     color="Region",
#                     size="Grade Repetition Rate",
#                 ).update_traces(textposition="top center")
#             )
#         ], style={"width": "33%", "display": "inline-block"}),

#     ])
# ])

# # Run the app
# if __name__ == "__main__":
#     app.run_server(debug=True)
import dash
from dash import dcc, html
from dash.dependencies import Input, Output
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

    # Vertical layout for the graphs
    html.Div([

        # Map Visualization
        html.Div([
            dcc.Graph(
                id="map-chart",
                figure=px.choropleth_mapbox(
                    df,
                    geojson=geojson,
                    locations="Region",
                    featureidkey="properties.region",  # Adjust based on your GeoJSON property
                    color="Low Socio-Economic Proportion (%)",
                    title="Proportion of Students from Disadvantaged Backgrounds",
                    color_continuous_scale="Viridis",
                    mapbox_style="carto-positron",
                    zoom=5,  # Adjust zoom level
                    center={"lat": 32, "lon": -6}  # Adjust the center for Morocco
                ).update_layout(margin={"r":0,"t":0,"l":0,"b":0})
            )
        ], style={"marginBottom": "40px"}),  # Add margin for spacing between graphs

        # Scatter Plot
        html.Div([
            dcc.Graph(
                id="scatter-plot",
                figure=px.scatter(
                    df,
                    x="Low Socio-Economic Proportion (%)",
                    y="Grade Repetition Rate",
                    text="Region",
                    title="Socio-Economic Proportion vs. Grade Repetition",
                    color="Region",
                    size="Grade Repetition Rate",
                ).update_traces(textposition="top center")
            )
        ], style={"marginBottom": "40px"}),  # Add margin for spacing between graphs

        # Heatmap
        html.Div([
            dcc.Graph(
                id="heatmap",
                figure=px.density_heatmap(
                    df,
                    x="Work for Pay Rate (%)",
                    y="Low Socio-Economic Proportion (%)",
                    z="Grade Repetition Rate",
                    color_continuous_scale="Viridis",
                    title="Heatmap of Work for Pay Rate vs. Low Socio-Economic Proportion"
                )
            )
        ])
    ], style={"display": "flex", "flexDirection": "column", "alignItems": "center"})
])

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True, port=8052)
