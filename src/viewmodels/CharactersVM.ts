import { useState } from "react";
import { Character } from "../models/characters";
import { apiService } from "../services/apiService";

export function useCharactersVM() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext]= useState<string | null>(null)



    const loadCharacters = async () => {
        if (isLoading) { 
            return;
        }


        setIsLoading(true);
        try {
            const result = await apiService.getCharacters(next);
           
            const items = result.results

            characters.some (c => c.id )
        
            setCharacters(prev => { 
                const existingIds = new Set(prev.map(c => c.id));
                const newItems = items.filter(c => !existingIds.has(c.id));
                return [...prev, ...newItems];
            });

             setNext(result.next)
            

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