import axios from "axios";
import { useState, useEffect } from "react"

function useFetch(url) {


const [items, setItems] = useState(null)    
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)

const fetchData = async () => {
    setLoading(true)
    setError(false)
    try {
        const {data} = await axios(url)
        setItems(data)
    } catch (error) {
        setError(true)
        console.error(error)
    } finally {
        setLoading(false)
    }
}

useEffect(()=> {
    fetchData()
}, [url])


    return {items, loading, error}

}

export default useFetch