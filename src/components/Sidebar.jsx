import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){
    const location = useLocation();
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        setShowMobileMenu(false);
    },[location.pathname])
    return(
        <div className={ "sidebar-container"}>
            <div className="flex items-center justify-between  ss:hidden py-2 px-4 bottom-border ">
            <span className="profile-photo-small"></span>
            {!showMobileMenu ? 
            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="icon-mid cursor-pointer icon-m-menu"></span> 
            : <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="icon-mid cursor-pointer icon-cross"></span>}
            
          {/* <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="flex items-center px-3 py-2 border rounded text-green border-green hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button> */}
        </div>
            <div className={(showMobileMenu ? "" : "hidden-m") + " sticky top-0"}>
                <div className={ "profile-section bottom-border"}>
                    <Link to="/">
                        <span className="profile-photo"></span>
                        <span className="name">Eric Hoffman</span>
                    </Link>
                </div>
                <ul className="bottom-border ">
                    {mainMenuItems.map((item) => (
                        <Link to={item.path} key={item.label}>
                            <li  className={(location.pathname == item.path ? "selected" : "") + " flex items-center"}>
                                <span className={((location.pathname == item.path) ? `icon-${item.icon}-s` : `icon-${item.icon}`) + ` icon-small`}></span>
                                <span className={(location.pathname == item.path ? "selected" : "") + " label"}>{item.label}</span>
                            </li>
                        </Link>
                    ))}
                </ul>

                <ul className="bottom-border">
                    <li>
                        <span className="icon-small icon-watchlater"></span>
                        <span className="label">Watch Later</span>
                    </li>
                    <li>
                        <span className="icon-small icon-recommended"></span>
                        <span className="label">Recommended</span>
                    </li>
                </ul>

                <ul>
                    <li>
                        <span className="icon-small icon-settings"></span>
                        <span className="label">Settings</span>
                    </li>
                    <li>
                        <span className="icon-small icon-logout"></span>
                        <span className="label">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mainMenuItems = [
    {
        label : "Discover",
        icon : "search",
        path : "/"
    },
    {
        label : "Playlist",
        icon : "playlist",
        path : "/playlist"
    },
    {
        label : "Movie",
        icon : "movie",
        path : "/movies"
    },
    {
        label : "TV Shows",
        icon : "tv-shows",
        path : "/tv-shows"
    },
    {
        label : "My list",
        icon : "my-list",
        path : "/my-list"
    }
]
