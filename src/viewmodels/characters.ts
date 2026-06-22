// src/models/Character.ts

const IMAGE_BASE = 'https://tu-imagen-base-url.com/'; // reemplaza con tu IMAGE_BASE

export interface CharactersResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Character[];
}

export interface Character {
    id: number;
    age: number | null;
    birthdate: string | null;
    gender: string;
    name: string;
    occupation: string;
    portrait_path: string;
    phrases: string[];
    status: string;
}

// Equivalente al método imageURL() de Kotlin
export const getCharacterImageURL = (character: Character): string => {
    return IMAGE_BASE + character.portrait_path;
};

export interface CharacterDetail {
    id: number;
    age: number;
    birthdate: string;
    description: string;
    first_appearance_ep_id: number;
    first_appearance_sh_id: number;
    gender: string;
    name: string;
    occupation: string;
    phrases: string[];
    portrait_path: string;
    status: string;
    first_appearance_ep: FirstAppearanceEp;
    first_appearance_sh: FirstAppearanceSh;
}

export interface FirstAppearanceEp {
    id: number;
    airdate: string;
    description: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
}

export interface FirstAppearanceSh {
    id: number;
    airdate: string;
    description: string;
    episode_number: number;
    image_path: string;
    name: string;
    season: number;
    synopsis: string;
}
