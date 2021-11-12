import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);// este componente va a empezar haciendo un fetch así que loading va a ser true.
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                //get directors Only
                const directors = credits.crew.filter(//crew es lo que recibimos y solo queremos los directores.
                    member => member.job === 'Director'
                );

                setState({//creamos un objeto que tiene movie y su información, actors y directors t lo metemos en el estado.
                    ...movie,
                    actors: credits.cast, //aquí estamos metiendo los actores, que también están en el fetch de fetchCredits, que hemos asignado a la variable credits.
                    directors: directors //le incluimos también los directores.
                })
                setLoading(false);
            } catch (error) {
                setError(true)
            };
        };
        
        fetchMovie()
    }, [ movieId ])
    return { state, loading, error };
};