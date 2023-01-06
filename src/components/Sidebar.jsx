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
            <div className="photo-container ">
                <span className="profile-photo-small"></span>
                {!showMobileMenu ? 
                <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="icon-mid cursor-pointer icon-m-menu"></span> 
                : <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="icon-mid cursor-pointer icon-cross"></span>}
                
            </div>
            <div className={(showMobileMenu ? "" : "hidden-m") + " sticky top-0"}>
                <div className={ "profile-section bottom-border"}>
                    <Link to="/">
                        <span className="profile-photo"></span>
                    </Link>
                        <span className="name">Eric Hoffman</span>
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
                    <li className=" flex items-center">
                        <span className="icon-small icon-watchlater"></span>
                        <span className="label">Watch Later</span>
                    </li>
                    <li className=" flex items-center">
                        <span className="icon-small icon-recommended"></span>
                        <span className="label">Recommended</span>
                    </li>
                </ul>

                <ul>
                    <li className=" flex items-center">
                        <span className="icon-small icon-settings"></span>
                        <span className="label">Settings</span>
                    </li>
                    <li className=" flex items-center">
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
