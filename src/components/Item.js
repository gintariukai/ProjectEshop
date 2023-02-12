/* eslint-disable jsx-a11y/alt-text */
import React, { Componet }from "react";

export class Item extends Componet {
    render() {
        return (
            <div className="item">
                <img src={" "} />
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.desc}</p>
                <b>{this.props.item.price}</b>
                <div className="add-to-cart">+</div>
            </div>
        )
    }
}

export default Item;