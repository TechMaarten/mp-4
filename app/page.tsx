// app/page.tsx
"use client";
import { useEffect, useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import type { WeatherData } from "@/components/WeatherCard";

const featuredCities = ["Boston", "New York", "Chicago", "Los Angeles"];

export default function HomePage() {
    const [forecasts, setForecasts] = useState<WeatherData[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchForecasts() {
            const results: WeatherData[] = [];
            // Loop through each featured city
            for (const city of featuredCities) {
                try {
                    const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
                    const json = await res.json();
                    if (res.ok) {
                        results.push(json);
                    } else {
                        console.error(`Error for ${city}: ${json.error}`);
                    }
                } catch (err) {
                    console.error(`Network error for ${city}:`, err);
                    setError("Some forecasts could not be loaded.");
                }
            }
            // After all cities are fetched, update the state with the results
            setForecasts(results);
        }

        fetchForecasts().then(r => {});
    }, []);

    return (
        <main className="text-center">
            <h1 className="text-4xl font-bold mb-6">Today's Forecasts</h1>
            <p className="mb-6">Explore the weather in major U.S. cities</p>

            {error && <p className="text-red-600">{error}</p>}

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                {forecasts.map((weather) => (
                    <WeatherCard
                        key={weather.resolvedAddress}
                        city={weather.resolvedAddress}
                        description={weather.description}
                        temperature={weather.days[0].temp}
                        icon={weather.days[0].icon}
                    />
                ))}
            </div>
        </main>
    );
}
