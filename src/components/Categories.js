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
                    key: "Abundance",
                    name: "Abundance"
                },
                {
                    key: "Bronze",
                    name: "Bronze"
                },
                {
                    key: "Remedy",
                    name: "Remedy"
                },
                {
                    key: "Shape",
                    name: "Shape"
                },
            ]
        };
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories;