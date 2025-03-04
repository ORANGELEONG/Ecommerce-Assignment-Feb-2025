
import { useState } from "react";

export default function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);

    const showNavBarOrNot = () => {
        if (showNavBar) {
            return "show"

        } else {
            return "";
        }
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">OrangE-Shop</a>
                <button  
                
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"

                    onClick={() => {
                        if (showNavBar) {
                            setShowNavBar(false)
                        } else {
                            setShowNavBar(true)
                        }
                    }}

                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* The Nav Menu */}
                <div className={`collapse navbar-collapse ${showNavBarOrNot()}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}