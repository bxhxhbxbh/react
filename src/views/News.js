import React, { Component } from "react";

export default class News extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
            
    //     }
    // }
    render() {
        console.log("News页面", this.props)
        return (
            <h2>News页面</h2>
        )
    }
}