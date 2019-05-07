// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface WeatherForecastModel {
    location:            Location;
    current_observation: CurrentObservation;
    forecasts:           Forecast[];
}

export interface CurrentObservation {
    wind:       Wind;
    atmosphere: Atmosphere;
    astronomy:  Astronomy;
    condition:  Condition;
    pubDate:    number;
}

export interface Astronomy {
    sunrise: string;
    sunset:  string;
}

export interface Atmosphere {
    humidity:   number;
    visibility: number;
    pressure:   number;
    rising:     number;
}

export interface Condition {
    text:        Text;
    code:        number;
    temperature: number;
}

export interface Wind {
    chill:     number;
    direction: number;
    speed:     number;
}

export interface Forecast {
    day:  string;
    date: number;
    low:  number;
    high: number;
    text: String;
    code: number;
}

export interface Location {
    woeid:       number;
    city:        string;
    region:      string;
    country:     string;
    lat:         number;
    long:        number;
    timezone_id: string;
}


export enum WeatherCode {
    "tornado" = 0,
    "tropical storm" = 1,
    "hurricane" = 2,
    "severe thunderstorms" = 3,
    "thunderstorms" = 4,
    "mixed rain and snow" = 5,
    "mixed rain and sleet" = 6,
    "mixed snow and sleet" = 7,
    "freezing drizzle" = 8,
    "drizzle" = 9,
    "freezing rain" = 10,
    "showers" = 11,
    "showers " = 12,
    "snow flurries" = 13,
    "light snow showers" = 14,
    "blowing snow" = 15,
    "snow" = 16,
    "hail" = 17,
    "sleet" = 18,
    "dust" = 19,
    "foggy" = 20,
    "haze" = 21,
    "smoky" = 22,
    "blustery" = 23,
    "windy" = 24,
    "cold" = 25,
    "cloudy" = 26,
    "mostly cloudy (night)" = 27,
    "mostly cloudy (day)" = 28,
    "partly cloudy (night)" = 29,
    "partly cloudy (day)" = 30,
    "clear (night)" = 31,
    "sunny" = 32,
    "fair (night)" = 33,
    "fair (day)" = 34,
    "mixed rain and hail" = 35,
    "hot" = 36,
    "isolated thunderstorms" = 37,
    "scattered thunderstorms" = 38,
    "scattered thunderstorms " = 39,
    "scattered showers" = 40,
    "heavy snow" = 41,
    "scattered snow showers" = 42,
    "heavy snow " = 43,
    "partly cloudy" = 44,
    "thundershowers" = 45,
    "snow showers" = 46,
    "isolated thundershowers" = 47,
    "not available" = 3200
}