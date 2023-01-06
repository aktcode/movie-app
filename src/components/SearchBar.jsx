import { useState } from "react";


export default function SearchBar({searchText, setSearchText}){
    const [showSearchBar, setShowSearchBar] = useState(false);
    return(
        <div className="search-bar-container">
            
            <div className={(showSearchBar ? "hidden-d" : "")+" search-click"}>
                <span onClick={() => setShowSearchBar(true)} className="icon-mid cursor-pointer icon-search"></span>
            </div>
           
            <div className={(showSearchBar ? "" : "hidden-d") + "  search-bar  "}>
                
                <span className="icon-mid icon-search"></span>
                
                <input type={"text"} value={searchText} placeholder="Title, Movies, Keyword" className="search-input search-bar-animate" 
                onChange={(e) => setSearchText(e.target.value)} />
                
                <span onClick={() => {setShowSearchBar(false); setSearchText(""); }} 
                className="icon-small cursor-pointer icon-cross"></span>

            </div>
            
            <span className="hidden md:inline">
                <span className="icon-mid icon-light cursor-pointer" />
                <span className="icon-mid icon-vertical-dots cursor-pointer" />
            </span>
        
        </div>
    )
}