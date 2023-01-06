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
        <div className="movie-info-container h-max ss:h-[450px] overflow-auto ss:overflow-hidden ss:m-2 rounded-lg relative" ref={scrollingRef}>
            <div className="movie-info-wrapper bg-mblock rounded-lg ">
                <div className="movie-info-content flex flex-col ss:flex-row">
                    <span className="m-info-image">
                        <img className="w-full ss:w-[380px] ss:rounded-l-lg" src={movieItem.Poster} />
                    </span>
                    <div className="m-info-desc py-5 px-5 ss:px-10 max-w-2xl">
                        <div className="text-3xl text-textGrey my-5 font-bold">{movieItem.Title}</div>

                        <div className="flex items-center">
                            <div className="w-[150px] bg-[#283746] rounded-full h-2.5 my-5 mr-2">
                                <div className="rating-bar bg-btnColor h-2.5 rounded-full" style={{width: ratingWidth}}></div>
                            </div>
                            <span>{movieItem.imdbRating}/10</span>
                        </div>
                        <div className="grid grid-cols-2 gap-y-2 max-w-md">
                            <div>Year:</div>
                            <div>{movieItem.Year}</div>
                            <div>Running Time:</div>
                            <div>{movieItem.Runtime}</div>
                            <div>Directed By:</div>
                            <div>{movieItem.Director}</div>
                            <div>Language:</div>
                            <div>{movieItem.Language}</div>
                        </div>
                        <div className="my-2">
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
            <span className="ss:hidden absolute top-1 right-2 px-4 py-2 rounded-full text-center bg-black text-white cursor-pointer" onClick={() => setSelectedMovie("")}>X</span>
        </div>
    )
}