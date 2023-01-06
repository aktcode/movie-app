import React from "react";
import TitleInfo from "./TitleInfo";

export default function TitlesRow({moviesInBlock, setSelectedMovie, selectedMovie}){
    const selectedMovieData = moviesInBlock.filter(x => x.Title == selectedMovie);
    // console.log(selectedMovieData.length);
    return(
        <>

                {(selectedMovieData.length != 0 ? 
                (<TitleInfo movieItem={selectedMovieData[0]} setSelectedMovie={setSelectedMovie} /> )
                : "")}
            <div className="movie-row flex flex-wrap ss:flex-nowrap  justify-center ss:justify-start">
               
                {moviesInBlock.map((movie, n) => (
                    <React.Fragment key={movie.Title}>
                        <span onClick={() => setSelectedMovie(movie.Title)} className={(movie.Title == selectedMovie ? "selected" : "")+" movie-block flex m-1 sm:m-4 flex-col p-2 bg-mblock rounded-lg cursor-pointer"}>
                            <span className="m-image mb-2">
                                <img className="rounded-lg" src={movie.Poster} />
                            </span>
                            <span className="m-title mb-2">{movie.Title}</span>
                            <span className="buttons ">
                                <span className="icon-mid icon-play"></span>
                                <span className="icon-mid icon-add"></span>
                            </span>
                        </span>
                    </React.Fragment>

                ))}
            </div>
        </>
    )
}
