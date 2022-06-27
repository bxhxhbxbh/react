import React, { Component } from "react";

// import {
// 	HashRouter as withRouter
// } from "react-router-dom";

export default class Members extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        console.log('Members', this.props)
        return (
            <div>
                <h2> &copy; copyright; XX公司 Members</h2>
                <button onClick={() => {
                    this.props.history.push("/home")
                }}>显示主页</button>
            </div>
        )
    }
}