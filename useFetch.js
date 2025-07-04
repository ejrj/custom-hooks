import { useEffect, useState } from "react"


const localCache = {}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    const getFetch = async () => {

        if (localCache[url]) {
            // console.log('Desde cache', url);
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();

        const response = await fetch(url);
        const data = await response.json();

        // await new Promise(resolve => setTimeout(resolve, 2000)); // Sleep

        if (!response.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    message: data.message || 'Error fetching data',
                    status: response.status
                }
            });
            return;
        }
        
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        });

        // Manejo del cahe
        localCache[url] = data;

    }

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}
