import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";


export default function Featured({type}) {
    return (
        <div className = "featured">
                
                {type && (
                    <div className="category">
                        <span> {type === "movie" ? "Movies" : "Series"} </span>
                        <select name="genre" id="genre">
                            <option >Genre</option>
                            <option value="adventure">Adventure</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="sci-fi">Sci-fi</option>
                            <option value="thriller">Thriller</option>
                            <option value="western">Western</option>
                            <option value="animation">Animation</option>
                            <option value="drama">Drama</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )}

           <img src="assets/profile.svg" alt="" />

            <div className="info">

                <img src="assets/movie1.svg" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nesciunt eaque porro consequatur quos autem dolorum.</span>

                <div className="buttons">
                <button className="play">
                    <PlayArrow />
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined />
                    <span>More</span>
                </button>
            </div>

            </div>

        </div>
    )
}
