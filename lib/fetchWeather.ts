// lib/fetchWeather.ts
export async function fetchWeather(city: string) {
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${process.env.WEATHER_API_KEY}&contentType=json`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch weather");
    }

    return await response.json();
}

