import { useState } from "react";


export default function SearchBar({searchText, setSearchText}){
    const [showSearchBar, setShowSearchBar] = useState(false);
    return(
        <>
            <div className={(showSearchBar ? "hidden-d" : "")+" hidden-m relative p-4 top-2"}>
                <span onClick={() => setShowSearchBar(true)} className="icon-mid cursor-pointer icon-search"></span>
            </div>
            <div className={(showSearchBar ? "" : "hidden-d") + "  search-bar  "}>
                <span className="icon-mid icon-search"></span>
                <input type={"text"} value={searchText} placeholder="Title, Movies, Keyword" className=" search-bar-animate bg-transparent md:w-[500px] text-lg outline-none" onChange={(e) => setSearchText(e.target.value)} />
                <span onClick={() => {setShowSearchBar(false); setSearchText(""); }} className=" icon-small  cursor-pointer icon-cross"></span>

            </div>
        
        </>
    )
}