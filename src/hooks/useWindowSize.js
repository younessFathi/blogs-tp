import { useEffect, useState } from "react"

const useWindowSize = ()=>{
    const [windowSize , setWindowSize]=useState({
        width: undefined,
        height: undefined
    });

    useEffect(
        ()=>{
            const handelResize = ()=>{
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            } 
            handelResize(); // call it one at loead time
            window.addEventListener('resize' ,handelResize);
            const cleanUp = ()=>{
                console.log('runs if useEffect dependendies changes');
                window.removeEventListener('resize' , handelResize);
            }
            return cleanUp;
        }
    , []);

    return windowSize;
}

export default useWindowSize;