import { useState, useEffect } from "react"

const useFetch = (url) => {

    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    //! fetch - nonAsync - nonDestructuring
    // function fetchData(url) {
    //     setLoading(true)
    //     setError(false)

    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data=> {
    //         console.log(data);
    //         setItems(data)
    //     })
    //     .catch(err=> {
    //         setError(err)
    //     })
    //     .finally(()=> setLoading(false))
    // }

    //! fetch - async - nonDestructuring
   async function fetchData(url) {

        setLoading(true)
        setError(false)

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            
        } catch (err) {
            console.error(err);
            setError(true)
            
        } finally {
            setLoading(false)
        }
    }



    useEffect(()=> {
        if (!url) {
            console.warn("Forgot the url?");
            return;
        }
        fetchData(url)
    }, [url])


    return {items, loading, error}

}

export default useFetch