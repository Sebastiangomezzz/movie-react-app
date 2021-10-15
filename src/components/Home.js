import react , { useState, useEffect } from "react";

//API 
import API from '../API';

//import some configs from config 
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//components

//hooks

//Image
import NoImage from "../images/no_image.jpg"


const Home = () =>{
    const [state, setState]= useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = '')=>{
        
    }
    return(
        <div>Home Page</div>
    )
}

export default Home;