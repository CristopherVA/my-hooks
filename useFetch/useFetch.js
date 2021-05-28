import { useState, useEffect, useRef } from 'react';


export const useFetch = (url) => {
    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: false})


    useEffect(() => {
        return() => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        })

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                setTimeout(() => {

                    if(isMounted){
                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }
                }, 3000);
            })
    }, [url])

    return state;

}
