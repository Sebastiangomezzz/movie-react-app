//import some configs from config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "./Button";

//hook
import { useHomeFetch } from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && state.results[0] ? ( //no tenemos un searchTerm y sí que tenemos un elemento en el array de películas.
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}{" "}
      {/* comprueba que estamos cargando y si es así enseñamos el spinner */}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={()=> setIsLoadingMore(true)}/> /* comprueba que la página en la que estamos es menor que el total de páginas y que no estamos cargando, si se cumple enseñamos el botón */
      )}
    </>
  );
};

export default Home;
