import { useState, useCallback } from "react";


const useRequest = (req) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    
    const request = useCallback(async (...params) => {
        setLoading(true);
        try {
            const response = await req(...params);
            setData(response);
        } catch (err) {
            setError(err.message);
        }
        setLoading(false);
    }, [setLoading, setData, setError, req])
    
    return (
        [
            {data, loading, error}, request
        ]
    )
}

export default useRequest;