import React, { useEffect, useRef, useState } from "react"
import { getAllTitleRows, getTypeBasedTitles } from "../utils/basic";
import SearchBar from "./SearchBar";
import TitlesRow from "./TitlesRow";

export default function Discover({type}){
    const [selectedMovie, setSelectedMovie] = useState({});
    const [searchText, setSearchText] = useState("");
    // Search logic
    let baseFilterTitles = getTypeBasedTitles(type);
    const filteredMovieData = baseFilterTitles.filter(x => x.Title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));

    const allMoviesRows = getAllTitleRows(filteredMovieData);

    useEffect(() => {
        //
      }, []);
    

    return(
        <React.Fragment>
            <div className="discover-container w-full py-10 ss:px-10 px-2">
            <SearchBar setSearchText={setSearchText} />

                <div className="mx-auto mt-10">

                {allMoviesRows.length ? 
                    (
                    allMoviesRows.map((moviesRow,n) => (
                        <TitlesRow key={n} moviesInBlock={moviesRow} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie} />
                    ))
                    )    
                
                : "No results found for your search"}

                </div>

            </div>
        </React.Fragment>
    )
}
