import { CharacterDetail, CharactersResponse } from "../models/characters";
import { EpisodeDetail, EpisodesApiResponse } from "../models/episode";
import { LocationDetail, LocationsApiResponse } from "../models/locations";
import api from "./api";

export const apiService = { 

    getCharacters: async (next: string | null ): Promise<CharactersResponse> => {
        const url =  next == null ? 'characters' : next
        const response = await api.get(url);
        return response.data
    },

    getCharacterDetail: async (id: String): Promise<CharacterDetail> => {
        const response = await api.get('characters/${id}');
        return response.data
    },

    getLocations: async (next?: String): Promise<LocationsApiResponse> => {
        const response = await api.get('characters');
        return response.data
    },

    getLocationDetail: async (id: String): Promise<LocationDetail> => {
        const response = await api.get('characters/${id}');
        return response.data
    },

    getEpisodes: async (next?: String): Promise<EpisodesApiResponse> => {
        const response = await api.get('characters');
        return response.data
    },

    getEpisodeDetail: async (id: String): Promise<EpisodeDetail> => {
        const response = await api.get('characters/${id}');
        return response.data
    }



    
}