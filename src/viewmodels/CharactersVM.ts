import { useState } from "react";
import { Character } from "../models/characters";
import { apiService } from "../services/apiService";

export function useCharactersVM() {

    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const loadCharacters = async () => {
        setIsLoading(true);
        try {
            const result = await apiService.getCharacters();
            const items = result.results
        
            setCharacters(prev => [...prev,  ...items]);

        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }


    }



    return {
        characters,
        page,
        isLoading,
        loadCharacters
    }
}