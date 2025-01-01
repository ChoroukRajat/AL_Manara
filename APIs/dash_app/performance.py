import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Load your dataset
df = pd.read_csv("Unified_Regional_Analysis.csv")

# Initialize Dash App
app = dash.Dash(__name__)

# App Layout
app.layout = html.Div([
    html.H1("Performance Dashboard", style={'textAlign': 'center'}),
    
    # Clustered Bar Chart
    html.Div([
        dcc.Graph(
            id="clustered-bar-chart",
            figure=px.bar(
                df.melt(id_vars="Region", value_vars=["Low Performance(%)", "Very Low Performance(%)", "Moderate Performance(%)", "High Performance(%)"]),
                x="Region",
                y="value",
                color="variable",
                barmode="group",
                title="Distribution of Performance Clusters by Region",
                labels={"value": "Percentage", "variable": "Performance Cluster"}
            )
        )
    ], style={"width": "100%", "display": "inline-block"}),

    # Dropdown and Pie Chart
    html.Div([
        html.Label("Select a Region:"),
        dcc.Dropdown(
            id="region-dropdown",
            options=[{"label": region, "value": region} for region in df["Region"].unique()],
            value=df["Region"].iloc[0]  # Default value
        ),
        dcc.Graph(id="pie-chart")
    ], style={"width": "100%", "display": "inline-block"})
])

# Callback for updating the pie chart
@app.callback(
    Output("pie-chart", "figure"),
    Input("region-dropdown", "value")
)
def update_pie_chart(selected_region):
    # Filter the dataset for the selected region
    region_data = df[df["Region"] == selected_region].melt(
        id_vars="Region",
        value_vars=["Low Performance(%)", "Very Low Performance(%)", "Moderate Performance(%)", "High Performance(%)"]
    )
    # Generate the pie chart
    fig = px.pie(
        region_data,
        names="variable",
        values="value",
        title=f"Performance Cluster Breakdown: {selected_region}",
        labels={"variable": "Performance Cluster", "value": "Percentage"}
    )
    return fig

# Run the app
if __name__ == "__main__":
    app.run_server(debug=True)
