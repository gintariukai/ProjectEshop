import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            This page doesn't exist. Go pleas <Link to="/"> Home </Link>
        </div>
    );
}

export default NotFound;