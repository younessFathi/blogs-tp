import axios from "axios";
import { useEffect, useState } from "react"

const useAxiosFetch = (dataUrl = 'http://localhost:3500/posts')=>{
    const [data , setData]=useState([]);
    const [fetchError , setFetchError]=useState(null);
    const [isLoading , setIsLoading]=useState(false);

    useEffect(()=>{
        let isMount = true;
        const source = axios.CancelToken.source();
        const fetchData = async(url)=>{
            setIsLoading(true);
            try{
                const response = await axios.get(url , {cancelToken:source.token});
                console.log(response)
                if(isMount){
                    setData(response.data);
                    setFetchError(null);
                }
            }catch(error){
                if(isMount){
                    setData([]);
                    setFetchError(error.message);
                }
            }finally{
                isMount && setTimeout(()=>setIsLoading(false) , 2000);
            }
        }
        fetchData(dataUrl);
        
    },[dataUrl]);

    return {data , fetchError , isLoading};
}

export default useAxiosFetch;