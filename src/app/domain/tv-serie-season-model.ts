export interface Episode {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code?: any;
    season_number: number;
    show_id: number;
    still_path?: any;
    vote_average: number;
    vote_count: number;
    crew: any[];
    guest_stars: any[];
    poster_path?: string;
    serie_name?: string;
}

export interface TVSerieSeasonModel {
    _id: string;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string;
    season_number: number;
}
