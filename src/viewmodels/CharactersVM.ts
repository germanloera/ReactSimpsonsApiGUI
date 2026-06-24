import { useState } from "react";
import { Character, CharacterDetail } from "../models/characters";
import { apiService } from "../services/apiService";

export function useCharactersVM() {

    const [characters, setCharacters] = useState<Character[]>([]);
    const [character, setCharacter] = useState<CharacterDetail>()
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState<string | null>(null)
    
    const [filtered, setFiltered] = useState<Character[]>([]);
    const [query, setQuery] = useState<string>('')



    const loadCharacters = async () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        try {
            const result = await apiService.getCharacters(next);

            const items = result.results

            characters.some(c => c.id)


            setCharacters(prev => {
                const existingIds = new Set(prev.map(c => c.id));
                const newItems = items.filter(c => !existingIds.has(c.id));
                return [...prev, ...newItems];
            });

            filter()

            setNext(result.next)


        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }


    }

    const loadCharacterDetail = async (id: string) => {

        if (isLoading || character) {
            return;
        }
        setIsLoading(true);
        try {
            const result = await apiService.getCharacterDetail(id);
            setCharacter(result)

        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }

    const filter = () => {

        const f = characters.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setFiltered(f)

    }





    return {
        characters,
        page,
        isLoading,
        character,
        filtered,
        query,
        loadCharacters,
        loadCharacterDetail,
        filter,
        setQuery
    }
}