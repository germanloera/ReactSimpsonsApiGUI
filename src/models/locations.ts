// src/models/Location.ts

import { IMAGE_BASE } from "../constants/urls";


export interface LocationsApiResponse {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
    results: Location[];
}

export interface Location {
    id: number;
    name: string;
    image_path: string;
    town: string;
    use: string;
}

export const getLocationImageURL = (location: Location): string => {
    return IMAGE_BASE + location.image_path;
};

// Equivalente a la propiedad "city" de Kotlin
export const getLocationCity = (location: Location): string => {
    return location.town.trim() === '' ? 'Unknown' : location.town;
};

export interface LocationDetail {
    id: number;
    description: string;
    first_appearance_ep_id: number | null;
    first_appearance_sh_id: number | null;
    image_path: string;
    name: string;
    town: string;
    use: string;
    first_appearance_sh: number | null;
    first_appearance_ep: number | null;
}
