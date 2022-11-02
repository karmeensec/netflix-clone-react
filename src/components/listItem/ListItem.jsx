import "./listItem.scss";
import { PlayArrow, Add, ThumbUpAltOutlined, ThumbDownAltOutlined } from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({index}) {

    const [isHovered, setIsHovered] = useState(false);
    const trailer = "https://www.imdb.com/title/tt4154796/?ref_=ext_shr_lnk";

    return (
        <div className = "listItem" 
        style = {{left: isHovered && index * 225 - 50 + index * 8 }}
        onMouseEnter = {()=> setIsHovered(true)} onMouseLeave = {()=> setIsHovered(false)} >
            <img src="assets/avengers.jpg" alt="" />

            {isHovered && (

            <>
            <video src={trailer} autoPlay = {true} loop />
               
            <div className="itemInfo">

                    <div className="icons">
                        <PlayArrow className ="icon"/>
                        <Add className ="icon"/>
                        <ThumbUpAltOutlined className ="icon"/>
                        <ThumbDownAltOutlined className ="icon"/>
                    </div>

                    <div className="itemInfoTop">
                        <span>2 hour 23 min</span>
                        <span className = "limit">12+</span>
                        <span>2012</span>
                    </div>

                    <div className="desc">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Labore odio voluptatibus asperiores pariatur libero neque corrupti
                         architecto.
                    </div>

                    <div className="genre">Action, Superhero, Fantasy</div>

            </div> 
            </>
             )}

        </div>
    )
}
