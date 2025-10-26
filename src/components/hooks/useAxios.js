import axios from "axios";
import { useState, useEffect} from "react";

const useAxios = (url) => {

    const [items, setItems] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    //! axios - async - destructuring
    // async function useAxios(url) {
        
    //     setLoading(true)
    //     setError(false)
    //     try{
    //         const {data} = await axios(url)
    //         setItems(data)
    //     } catch (err) {
    //         console.error(err);
    //         setError(true)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    //! axios - async - nonDestructuring
    // async function useAxios (url) {

    //     setLoading(true)
    //     setError(false)
    //     try {
    //         const reponse = await axios(url)
    //         setItems(reponse.data)
    //     } catch (err) {
    //         console.error(err);
    //         setError(true)
    //     } finally {
    //         setLoading(false)
    //     }    
    // }

    //! axios - nonAsync - destructuring
    // function useAxios (url) {

    //     setLoading(true)
    //     setError(false)

    //     axios(url)
    //     .then(({data})=> {
    //         console.log(data);
    //         setItems(data)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         setError(true)
    //     })
    //     .finally(()=> {
    //         setLoading(false)
    //     })
    // }

   
    //! axios - nonAsync - nonDestructuring
    // function useAxios(url) {

    //     setLoading(true)
    //     setError(false)

    //     axios(url)
    //     .then(res => {
    //         setItems(res.data)
    //         console.log(res.data)
    //     })
    //     .catch(err=> {
    //         console.error(err);
    //         setError(true)
    //     })
    //     .finally(()=> {
    //         setLoading(false)
    //     })
        
    // }

    // useEffect(()=> {
    //     if(!url) {
    //         console.warn("You shall not pass!")
    //         return;
    //     }
    //     useAxios(url)
    // }, [url])



    return {items, loading, error}
}

export default useAxios