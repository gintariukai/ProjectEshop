import React, { Component } from "react";
import { FaTrash } from "react-icons/fa";

export class Order extends Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img} alt="" />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}€</b>

                {/*<button className="button-cart" onClick={() => addItemInCart(id)}>+</button>*/}
                {/*<span className="cart-item-count">{count}</span>*/}
                {/*<button className="button-cart" onClick={() => removeItemInCart(id)}>-</button>*/}

                <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        )
    }
}

export default Order;