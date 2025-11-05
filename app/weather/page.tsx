// app/weather/page.tsx
"use client";
import { useState } from "react";
import WeatherCard from "@/components/WeatherCard";
import { type WeatherData } from "@/components/WeatherCard";


export default function WeatherPage() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState("");

    const getWeather = async () => {
        setError("");
        setWeather(null);

        const res = await fetch(`/api/weather?city=${encodeURIComponent(city)}`);
        const data = await res.json();

        if (res.ok) {
            setWeather(data);
        } else {
            setError(data.error || "Something went wrong.");
        }
    };

    return (
        <main className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Weather Forecast</h1>

            <input
                type="text"
                placeholder="Enter a city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border px-4 py-2 mb-4 rounded"
            />

            <button
                onClick={getWeather}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Get Forecast
            </button>

            {error && <p className="text-red-600 mt-4">{error}</p>}

            {weather && (
                <WeatherCard
                    city={weather.resolvedAddress}
                    description={weather.description}
                    temperature={weather.days[0].temp}
                    icon={weather.days[0].icon}
                />
            )}
        </main>
    );
}


