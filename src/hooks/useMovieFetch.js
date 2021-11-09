import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = () => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);// este componente va a empezar haciendo un fetch así que loading va a ser true;
    const []
}