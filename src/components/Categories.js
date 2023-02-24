import React, { Component } from "react";

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Visi"
                },
                {
                    key: "abudance",
                    name: "Abudance"
                },
                {
                    key: "bronze",
                    name: "Bronze"
                },
                {
                    key: "remedy",
                    name: "Remedy"
                },
                {
                    key: "shape",
                    name: "Shape"
                },
            ]
        };
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;