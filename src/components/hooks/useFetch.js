import axios from "axios";
import { useState, useEffect } from "react"

function useFetch(url) {


const [items, setItems] = useState(null)    
const [loading, setLoading] = useState(true)
const [error, setError] = useState(false)



// const fetchData = async () => {
//     setLoading(true)
//     setError(false)
//     try {
//         const {data} = await axios(url)     // const response = await axios(url) const data = data.response
//         // const response = await fetch(url)
//         // const data = await response.json()

//         setItems(data)
//     } catch (error) {
//         setError(true)
//         console.error(error)
//     } finally {
//         setLoading(false)
//     }
// }

//    function fetchDataTwo (url) {

//        setLoading(true)
//        setError(false)

//        axios(url)
//        .then(({data})=> setItems(data))
//        .catch(err=> {
//         setError(true)
//         console.log(err)
//        })
//        .finally(()=> setLoading(false))
//     }


    function fetchDataThree (url) {
        setLoading(true)
        setError(false)

        axios(url)
        .then(res => {
            console.log(res.data);
            setItems(res.data)
        })
        .catch(err=> {
            console.error(err)
            setError(true)
        })
        .finally(()=> setLoading(false))
    }
 




useEffect(()=> {
    if (!url){
        console.warn("Fetch aborted: URL not provided")
        return;
    }
    fetchDataThree(url)
}, [url])


    return {items, loading, error}

}



export default useFetch

/* component file
import useFetch from "...destination"

const url = "...api"
const {items, loading, error} = useFetch(url)
*/