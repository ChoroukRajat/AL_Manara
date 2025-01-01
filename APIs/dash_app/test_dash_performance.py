import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import pandas as pd
import plotly.express as px

# Sample dataset (replace this with your actual dataset)
data = {
    "Region": [
        "Tanger-Tetouan-Hoceima", "Oriental", "Fes-Meknes", "Rabat-Salé-Kénitra",
        "Beni Mellal-Khenifra", "Casablanca-Settat", "Marrakech-Safi",
        "Daraa-Tafilalet", "Sous Massa", "Guelmim-Oued Noun", "Laayoune-Saguia Hamra", "Dakhla-Oued Eddahab"
    ],
    "Low Performance (%)": [32.84, 34.43, 37.70, 28.17, 38.78, 33.84, 30.69, 39.69, 31.38, 12.05, 31.32, 34.94],
    "High Performance (%)": [15.75, 3.82, 14.61, 11.45, 8.48, 13.95, 16.13, 6.36, 17.02, 39.76, 13.25, 7.22],
    "Very Low Performance (%)": [17.75, 38.25, 20.76, 43.96, 20.20, 22.46, 22.91, 30.0, 15.35, 1.20, 33.73, 20.48],
    "Moderate Performance (%)": [33.64, 23.50, 26.91, 16.41, 32.53, 29.73, 30.25, 23.94, 36.23, 46.98, 21.69, 37.35]
}

df = pd.DataFrame(data)

# Initialize the Dash app
app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Performance Clusters by Region"),
    dcc.Dropdown(
        id='region-dropdown',
        options=[{'label': region, 'value': region} for region in df['Region']],
        value='Tanger-Tetouan-Hoceima',  # Default value
        placeholder="Select a region"
    ),
    dcc.Graph(id='pie-chart')
])

@app.callback(
    Output('pie-chart', 'figure'),
    [Input('region-dropdown', 'value')]
)
def update_pie_chart(selected_region):
    # Filter data for the selected region
    filtered_data = df[df['Region'] == selected_region].iloc[0]
    labels = ["Low Performance", "High Performance", "Very Low Performance", "Moderate Performance"]
    values = [
        filtered_data["Low Performance (%)"],
        filtered_data["High Performance (%)"],
        filtered_data["Very Low Performance (%)"],
        filtered_data["Moderate Performance (%)"]
    ]
    
    # Create the pie chart
    fig = px.pie(
        names=labels,
        values=values,
        title=f"Performance Clusters in {selected_region}",
        hole=0.3
    )
    
    return fig

if __name__ == '__main__':
    app.run_server(debug=True)
