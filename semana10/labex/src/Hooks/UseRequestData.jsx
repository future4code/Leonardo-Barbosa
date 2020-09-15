import {useState,useEffect} from 'react'
import axios from 'axios'

function useGetData(url, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url).then(response => {
           setData(response.data) 
        })
    }, [url])

    return data
}
export default useGetData