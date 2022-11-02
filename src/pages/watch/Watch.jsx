import "./watch.scss";
import {ArrowBack} from "@material-ui/icons";

export default function Watch() {
    return (
        <div className = "watch">
            <div className="back">
                <ArrowBack className = "arrowBack" />
                Home
            </div>
            <video className = "video" autoPlay progress controls src = "https://youtu.be/fkfs8yhuMvQ" />
        </div>
    )
}
