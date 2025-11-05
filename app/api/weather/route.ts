// app/api/weather/route.ts
import { fetchWeather } from "@/lib/fetchWeather";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
        //Manually construct a JSON response — always type-safe
        return new Response(JSON.stringify({ error: "Missing city parameter" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const weatherData = await fetchWeather(city);


        return NextResponse.json(weatherData);
    } catch (error) {
        //Same manual JSON response for error
        return new Response(JSON.stringify({ error: "Weather fetch failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
