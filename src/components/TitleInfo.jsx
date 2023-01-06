import { useEffect, useRef } from "react";

export default function TitleInfo({movieItem, setSelectedMovie}){
    const scrollingRef= useRef();
    if(!movieItem.Title){
        return(<></>)
    }
    useEffect(() => {
        // scrollingRef.current.scrollIntoView({ behavior: "smooth"  });
    }, []);
    const ratingWidth = (movieItem.imdbRating*10)+"%";
    return(
        <div className="movie-info-container" ref={scrollingRef}>
            <div className="movie-info-wrapper ">
                <div className="movie-info-content">
                    <span className="m-info-image ">
                        <img src={movieItem.Poster} />
                    </span>
                    <div className="m-info-desc">
                        <div className="m-info-title">{movieItem.Title}</div>

                        <div className="flex items-center">
                            <div className="rating-bar-container">
                                <div className="rating-bar" style={{width: ratingWidth}}></div>
                            </div>
                            <span>{movieItem.imdbRating}/10</span>
                        </div>
                        <div className="m-attr-grid">
                            <div>Year:</div>
                            <div>{movieItem.Year}</div>
                            <div>Running Time:</div>
                            <div>{movieItem.Runtime}</div>
                            <div>Directed By:</div>
                            <div>{movieItem.Director}</div>
                            <div>Language:</div>
                            <div>{movieItem.Language}</div>
                        </div>
                        <div className="my-4">
                        {movieItem.Plot}
                        </div>

                        <div>
                        <button className="btn btn-blue">
                            Play Movie
                        </button>
                        <button className="btn btn-blue-t">
                            Watch Trailer
                        </button>
                        </div>
                    </div>
                </div>

            </div>
            <span className="close-info" onClick={() => setSelectedMovie("")}>X</span>
        </div>
    )
}