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

    getLocations: async (next: string | null): Promise<LocationsApiResponse> => {
        const url = next == null ? 'locations' : next
        const response = await api.get(url);
        return response.data
    },

    getLocationDetail: async (id: String): Promise<LocationDetail> => {
        
        const response = await api.get('locations/'+id);
        return response.data
    },

    getEpisodes: async (next: string | null): Promise<EpisodesApiResponse> => {
        const url = next == null ? 'episodes' : next
        const response = await api.get(url);
        return response.data
    },

    getEpisodeDetail: async (id: String): Promise<EpisodeDetail> => {
        const response = await api.get('characters/${id}');
        return response.data
    }



    
}