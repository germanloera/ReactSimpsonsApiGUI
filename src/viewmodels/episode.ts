// src/models/Episode.ts

const IMAGE_BASE = 'https://tu-imagen-base-url.com/';

export interface EpisodesApiResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Episode[];
}

export interface Episode {
    id: number;
    airdate: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
}

export const getEpisodeImageURL = (episode: Episode): string => {
    return IMAGE_BASE + episode.image_path;
};

export interface EpisodeDetail {
    id: number;
    airdate: string;
    description: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
}
