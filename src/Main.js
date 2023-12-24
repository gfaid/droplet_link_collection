import { Link } from "react-router-dom";

const Main = () => {
    return(
        <div>
            <Link
                to="/mainlink"
            >
                <button>유나이트 관련 링크</button>
            </Link>
            <Link
                to="/anotherlink"
            >
                <button>타게임방 링크</button>
            </Link>
        </div>
    )
}

export default Main;