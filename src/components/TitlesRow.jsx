import React from "react";
import TitleInfo from "./TitleInfo";

export default function TitlesRow({moviesInBlock, setSelectedMovie, selectedMovie}){
    const selectedMovieData = moviesInBlock.filter(x => x.Title == selectedMovie);
    
    const propsToPass = {
        setSelectedMovie,
        selectedMovie
    }
    return(
        <React.Fragment>
            {(selectedMovieData.length != 0 ? 
            (<TitleInfo movieItem={selectedMovieData[0]} setSelectedMovie={setSelectedMovie} /> )
            : "")}
            <div className="movie-row">
               
                {moviesInBlock.map((movie, n) => (
                    <React.Fragment key={movie.Title}>
                        <MovieBlock movie={movie} {...propsToPass} />
                    </React.Fragment>

                ))}
            </div>
        </React.Fragment>
    )
}


// This is the component for single block of movie
function MovieBlock({movie, setSelectedMovie, selectedMovie}){
    return(
        <span onClick={() => setSelectedMovie(movie.Title)} className={(movie.Title == selectedMovie ? "selected" : "")+" movie-block"}>
            <span className="m-image mb-2">
                <img className="rounded-lg" src={movie.Poster} />
            </span>
            <span className="m-title mb-2 sp:text-xs">{movie.Title}</span>
            <span className="buttons sp:hidden">
                <span className="icon-mid icon-play"></span>
                <span className="icon-mid icon-add"></span>
            </span>
        </span>
    )
}