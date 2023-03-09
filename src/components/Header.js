import React, {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import Order from "./Order";
import logo from "../img/nomeda-icon.png";
import {Link} from "react-router-dom";

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price))
    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el}/>
            ))}
            <p className="summa">Viso suma: {Intl.NumberFormat("lt-LT", {
                style: "currency",
                currency: "EUR"
            }).format(summa)}</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Prekių nėra</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
                <div>
                    <span className="logo">
                        <img src={logo} width="41" height="25" href="/" alt="logo"/>
                        Nomeda Hair Boutique
                    </span>
                    <ul className="nav">
                        <li>
                            <Link to="/"> Home </Link>
                        </li>
                        <li>
                            <Link to="/shop"> Shop </Link>
                        </li>
                        <li>
                            <Link to="/about"> About us </Link>
                        </li>
                        <li>
                            <Link to="/contacts"> Contacts </Link>
                        </li>
                    </ul>
                    <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                    className={`shop-cart-button ${cartOpen && "active"}`}/>

                    {cartOpen && (
                        <div className="shop-cart">
                            {props.orders.length > 0 ?
                                showOrders(props) : showNothing()
                            }
                        </div>
                    )}
                </div>
            <div className="presentation"></div>
        </header>
    )
}