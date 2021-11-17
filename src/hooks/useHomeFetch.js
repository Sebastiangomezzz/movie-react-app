import { useState, useEffect } from 'react'
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
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoadingMore, setIsLoadingMore] = useState(false);

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

    //render inicial y para la búsqueda
    useEffect(() => {
        setState(initialState);
        fetchMovies(1, searchTerm);//el "1" es porque solo queremos la primera pagina
    }, [searchTerm])//indicamos que, cuando cambie el estado de searchterm, se disparará el useEffect.

    //Load More Movies
    useEffect(() => {
      if(!isLoadingMore) return {/*si no está cargando más retorna*/}
      
      fetchMovies(state.page + 1, searchTerm);
      setIsLoadingMore(false);
      
    }, [isLoadingMore, state.page, searchTerm])
    return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore };
}