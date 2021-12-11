
import { MovieCard } from "./MovieCard"
import{GenreResponseProps}from "../App"
import{MovieProps} from "../App"



type Prop ={
  movies: Array<MovieProps>;
  selectedGenre:GenreResponseProps;
}

export function Content(props: Prop) {
  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )

}