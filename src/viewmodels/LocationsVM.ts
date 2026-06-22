import { useState } from "react";

import { apiService } from "../services/apiService";
import { Location } from "../models/locations";

export function useLocationsVM() {

    const [locations, setLocations] = useState<Location[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [next, setNext]= useState<string | null>(null)



    const loadLocations = async () => {
        if (isLoading) { 
            return;
        }


        setIsLoading(true);
        try {
            const result = await apiService.getLocations(next);
           
            const items = result.results

            console.log(items)
            locations.some (c => c.id )
        
            setLocations(prev => { 
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
        locations,
        page,
        isLoading,
        loadLocations
    }
}