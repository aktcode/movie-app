import React, { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import { getAllTitleRows, getTypeBasedTitles } from "../utils/basic";
import SearchBar from "./SearchBar";
import TitlesRow from "./TitlesRow";

export default function Discover({type}){
    const { pathname } = useLocation();
    const [selectedMovie, setSelectedMovie] = useState({});
    const [searchText, setSearchText] = useState("");
    // Search logic
    let baseFilterTitles = getTypeBasedTitles(type);
    const filteredMovieData = baseFilterTitles.filter(x => x.Title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

    const allMoviesRows = getAllTitleRows(filteredMovieData);

    
    useEffect(() => {
        //
        setSearchText("");
      }, [pathname]);
    
    if(type == "not-configured"){
        return(
            <div className="discover-container">This route <b>{location.pathname}</b> is not configured</div>
        )
    }
    return(
        <React.Fragment>
            <div className="discover-container">
            <SearchBar searchText={searchText} setSearchText={setSearchText} />

                <div className="mx-auto mt-10">

                {allMoviesRows.length ? 
                    (
                    allMoviesRows.map((moviesRow,n) => (
                        <TitlesRow key={n} moviesInBlock={moviesRow} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} />
                    ))
                    )    
                
                : <span className="text-2xl pl-1">No results found for your search</span>}

                </div>

            </div>
        </React.Fragment>
    )
}
