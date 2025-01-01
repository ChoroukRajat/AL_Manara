'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';

const GeoJSONMap = () => {
    const [geojsonData, setGeojsonData] = useState(null);

    useEffect(() => {
        fetch('/data/sample.geojson')
            .then((response) => response.json())
            .then((data) => setGeojsonData(data));
    }, []);

    // Define a function to style each feature dynamically based on properties
    const getStyle = (feature: any) => {
        const lowPerformance = feature.properties.Low_Performance;
        let fillColor;

        // Example logic for coloring based on Low_Performance
        if (lowPerformance > 30) {
            fillColor = '#d73027'; // Red for high Low_Performance
        } else if (lowPerformance > 20) {
            fillColor = '#fc8d59'; // Orange for medium Low_Performance
        } else if (lowPerformance > 10) {
            fillColor = '#fee08b'; // Yellow for low Low_Performance
        } else {
            fillColor = '#1a9850'; // Green for very low Low_Performance
        }

        return {
            color: '#000', // Border color
            weight: 1,
            fillColor,
            fillOpacity: 0.6,
        };
    };

    // Legend Component
    const Legend = () => {
        const map = useMap();

        useEffect(() => {
            const legend = L.control({ position: 'bottomright' });

            legend.onAdd = () => {
                const div = L.DomUtil.create('div', 'info legend');
                const grades = [0, 10, 20, 30];
                const colors = ['#1a9850', '#fee08b', '#fc8d59', '#d73027'];

                div.innerHTML += '<h4>Low Performance</h4>';
                for (let i = 0; i < grades.length; i++) {
                    div.innerHTML += `
                        <i style="background:${colors[i]}"></i> 
                        ${grades[i]}${grades[i + 1] ? '&ndash;' + grades[i + 1] : '+'}<br>
                    `;
                }
                return div;
            };

            legend.addTo(map);

            return () => {
                map.removeControl(legend);
            };
        }, [map]);

        return null;
    };

    return (
        <MapContainer
            center={[24.5, -12.0]}
            zoom={6}
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {geojsonData && (
                <GeoJSON
                    data={geojsonData}
                    style={getStyle} // Apply dynamic styling
                />
            )}
            <Legend />
        </MapContainer>
    );
};

export default GeoJSONMap;
