import React, { Component } from "react";

export default class Home extends Component {
    render() {
        console.log("Home页面", this.props)
        return (
            <h2>Home页面</h2>
        )
    }
}