import axios from "axios";
import { useState, useEffect} from "react";

const useFetchTwo = (url) => {

    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    async function useAxios(url) {
        
        setLoading(true)
        setError(false)
        try{
            const {data} = await axios(url)
            setItems(data)
        } catch (err) {
            console.error(err);
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=> {
        if(!url) {
            console.warn("Gde ti je bre url?")
            return;
        }
        useAxios(url)
    }, [url])



    return {items, loading, error}
}

export default useFetchTwo