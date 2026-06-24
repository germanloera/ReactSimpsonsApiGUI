import { useState } from "react";

import { Episode, EpisodeDetail } from "../models/episode";
import { apiService } from "../services/apiService";

export function useEpisodesVM() {

    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [episode, setEpisode] = useState<EpisodeDetail>()
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState<string | null>(null)
    const [filtered, setFiltered] = useState<Episode[]>([]);
    const [query, setQuery] = useState<string>('')



    const loadEpisodes = async () => {
        if (isLoading) {
            return;
        }


        setIsLoading(true);
        try {
            const result = await apiService.getEpisodes(next);

            const items = result.results

            episodes.some(c => c.id)

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

    const loadEpisode = async (id: string) => {
        setIsLoading(true);
        if (isLoading || episode) {
            return;
        }

        setIsLoading(true);

        try {

            const result = await apiService.getEpisodeDetail(id);
            setEpisode(result)
            filter()
            
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }


  

    const filter = () => {

        const f = episodes.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setFiltered(f)

    }





    return {
        episodes,
        page,
        isLoading,
        episode,
        filtered, 
        query,
        loadEpisodes,
        loadEpisode,
        filter,
        setQuery
    }
}