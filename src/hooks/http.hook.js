import { useCallback, useState } from 'react';

export const useHttp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const request = useCallback( async (url, method='GET', body=null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);

        try {
            const response = await fetch(url, {
                body,
                method,
                headers
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            return data;

        }
        catch (e) {
            setError(e.message);
            throw e;
        }
        finally {
            setLoading(false);
        }

    }, []);

    const clearError = useCallback( () => setError(null), []);

    return { loading, error, request, clearError };

}

