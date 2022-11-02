import { ArrowDropDown, Search, NotificationsActive } from "@material-ui/icons";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    
    window.onscroll = () =>{
        setIsScrolled (window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }


    return (
        <div className = {isScrolled ? "navbar scrolled" : "navbar" }>
            <div className="container">

                <div className="left">
                    <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/netflix-icon.png" alt="" />

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>

                </div>

                <div className="right">
                    <Search className = "icon" />
                    <span>KID</span>
                    <NotificationsActive className = "icon" />
                    <img src="assets/profile.svg" alt="" />

                    <div className="profile">
                        <ArrowDropDown className = "icon" />

                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
