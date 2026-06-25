import { useState } from "react";

import { Location, LocationDetail } from "../models/locations";
import { apiService } from "../services/apiService";

export function useLocationsVM() {

    const [locations, setLocations] = useState<Location[]>([]);
    const [location, setLocation] = useState<LocationDetail>();
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext] = useState<string | null>(null)
    
    const [filtered, setFiltered] = useState<Location[]>([]);
    const [query, setQuery] = useState<string>('')



    const loadLocations = async () => {
        if (isLoading) {
            return;
        }

        setIsLoading(true);

        try {
            const result = await apiService.getLocations(next);
            const items = result.results

            locations.some(c => c.id)

            setLocations(prev => {
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

    const loadLocationDetails = async (id: string) => {
        if (isLoading || location) {
            return;
        }
        setIsLoading(true)
        try {

            const result = await apiService.getLocationDetail(id);

            setLocation(result)
            filter()

        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }


    }

    const filter = () => {

        const f = locations.filter(item => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        setFiltered(f)

    }








    return {
        locations,
        page,
        isLoading,
        location,
        filtered, 
        query,
        loadLocations,
        loadLocationDetails,
        filter,
        setQuery
    }
}