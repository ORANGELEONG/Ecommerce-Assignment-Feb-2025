
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {

    const [showNavBar, setShowNavBar] = useState(false);

    const showNavBarOrNot = () => {
        if (showNavBar) {
            return "show"

        } else {
            return "";
        }
    }

    const showActive = (url) => {
        if (location === url) {
            return "active";
        }
        return "";
        }
    


    const [location] = useLocation();

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
                            <Link className={`nav-link ${location === '/' ? 'active' : ''}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${showActive("/products")}`} href="/Products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location === "/register" ? "active" :""}`} href="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}