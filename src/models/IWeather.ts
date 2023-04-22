interface ICurrent {
     cloud: number;
     condition: {
          code: number;
          icon: string;
          text: string;
     };
     feelslike_c: number;
     feelslike_f: number;
     gust_kph: number;
     gust_mph: number;
     humidity: number;
     is_day: 1 | 0;
     last_updated: string;
     pressure_in: number;
     pressure_mb: number;
     temp_c: number;
     temp_f: number;
     wind_degree: number;
     wind_dir: string;
     wind_kph: number;
     wind_mph: number;
}

interface ILocation {
     country: string;
     localtime: string;
     name: string;
     region: string;
     tz_id: string;
}

export interface IWeather {
     location: ILocation;
     current: ICurrent;
}