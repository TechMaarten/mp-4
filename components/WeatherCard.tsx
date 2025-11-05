// components/WeatherCard.tsx

type WeatherCardProps = {
    city: string;
    description: string;
    temperature: number;
    icon?: string;
};
type WeatherDay = {
    temp: number;
    icon?: string;
};

type WeatherData = {
    resolvedAddress: string;
    description: string;
    days: WeatherDay[];
};

export default function WeatherCard({ city, description, temperature, icon }: WeatherCardProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6 border text-center">
            <h2 className="text-2xl font-bold mb-2">{city}</h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-4xl font-bold">{temperature}°F</p>
            {icon && (
                <img
                    src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/4th%20Set%20-%20Color/${icon}.png`}
                    alt="weather icon"
                    className="mx-auto mt-4 w-20 h-20"
                />
            )}
        </div>
    );
}
export type { WeatherData };