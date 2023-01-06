import { useState } from "react";


export default function SearchBar({setSearchText}){
    const [showSearchBar, setShowSearchBar] = useState(false);
    return(
        <>
            <div className={(showSearchBar ? "hidden-d" : "")+" hidden-m relative p-4 top-2"}>
                <span onClick={() => setShowSearchBar(true)} className="icon-mid cursor-pointer icon-search"></span>
            </div>
            <div className={(showSearchBar ? "" : "hidden-d") + "  search-bar bg-secondary sticky top-1 ss:relative w-full ss:w-max mb-2 rounded-lg p-4 flex justify-between items-center "}>
                <span className="icon-mid icon-search"></span>
                <input type={"text"} placeholder="Title, Movies, Keyword" className=" search-bar-animate bg-transparent md:w-[500px] text-lg outline-none" onChange={(e) => setSearchText(e.target.value)} />
                <span onClick={() => {setShowSearchBar(false); }} className="icon-small cursor-pointer icon-cross"></span>

            </div>
        
        </>
    )
}