import React, { Component } from "react";

export default class NoticeList extends Component {
    constructor(props){
        super(props)
        this.state = {
            noticeList: this.props.store.getState().noticeReduce
        }
    }
    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.state.noticeList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>序号：{item.id}</p>
                                    <p>标题：<a href={item.url}>{item.title}</a></p>
                                    <p>图片：<br/><img src={item.imgUrl} alt=""/></p>
                                </li>
                                
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}