import { useState } from "react";


export default function SearchBar({searchText, setSearchText}){
    const [showSearchBar, setShowSearchBar] = useState(false);
    return(
        <div className="flex justify-between items-center min-h-[68px]">
            <div className={(showSearchBar ? "hidden-d" : "")+" hidden-m relative p-4 top-[3px]"}>
                <span onClick={() => setShowSearchBar(true)} className="icon-mid cursor-pointer icon-search"></span>
            </div>
            <div className={(showSearchBar ? "" : "hidden-d") + "  search-bar  "}>
                <span className="icon-mid icon-search"></span>
                <input type={"text"} value={searchText} placeholder="Title, Movies, Keyword" className=" search-bar-animate bg-transparent md:w-[500px] text-lg outline-none" onChange={(e) => setSearchText(e.target.value)} />
                <span onClick={() => {setShowSearchBar(false); setSearchText(""); }} className=" icon-small  cursor-pointer icon-cross"></span>

            </div>
            <span className="hidden md:inline">
                <span className="icon-mid icon-light cursor-pointer" />
                <span className="icon-mid icon-vertical-dots cursor-pointer" />
            </span>
        
        </div>
    )
}