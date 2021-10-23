import { useState, useEffect, useRef } from 'react'
//API 
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export const useHomeFetch = ()=>{
    const [state, setState]= useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = '')=>{
        try {
          setError(false);
          setLoading(true);

          const movies = await API.fetchMovies(searchTerm, page);
          //console.log(movies);

          setState((previousState) => ({
            ...movies,
            results:
              page > 1
                ? [...previousState.results, ...movies.results]
                : [...movies.results],
          }));
        } catch (error) {
          setError(true);
        }
        setLoading(false);

        
    };

    //render inicial
    useEffect(() => {
        fetchMovies(1)//el "1" es porque solo queremos la primera pagina
    }, [])//indicamos la dependencias cuando se disparará el useEffect, en éste caso en el primer render y solo una vez.

    return { state, loading, error}
}