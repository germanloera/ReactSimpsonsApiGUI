import { useState } from "react";

import { apiService } from "../services/apiService";
import { Episode } from "../models/episode";

export function useEpisodesVM() {

    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext]= useState<string | null>(null)



    const loadEpisodes = async () => {
        if (isLoading) { 
            return;
        }


        setIsLoading(true);
        try {
            const result = await apiService.getEpisodes(next);
           
            const items = result.results

            episodes.some (c => c.id )
        
            setEpisodes(prev => { 
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
        episodes,
        page,
        isLoading,
        loadEpisodes
    }
}