import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <span className="logo">Nomeda Hair Boutique</span>
                <ul className="nav">
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="presentation"></div>
        </header>
    )
}