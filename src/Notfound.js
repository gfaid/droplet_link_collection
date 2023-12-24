import { Link } from "react-router-dom";

const Notfound = () => {
    return(
        <div>
            404 notfound<hr />
            <Link
                to="/"
            >
                <button>return to main</button>
            </Link>
        </div>
    )
}

export default Notfound;