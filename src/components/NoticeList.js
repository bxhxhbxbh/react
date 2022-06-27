import React, { Component } from "react";
import { connect } from "react-redux"

import { hideNotice } from "../redux/action/cartAction";

// react-redux 第一种用法
const mapStateToProps = (state) => {
    return {
        noticeList: state.noticeReduce
    }
}

@connect(mapStateToProps, {hideNotice})
class NoticeList extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    // redux 第一种用法
    // componentWillMount() {
    //     this.unsubscribe = this.props.store.subscribe(() => {
    //         this.setState({
    //             noticeList: this.props.store.getState().noticeReduce
    //         })
    //     })
    // }
    // componentWillUnmount() {
    //     this.unsubscribe()
    // }
    render() {
        return (
            <div className="App">
                <ul>
                    {
                        this.props.noticeList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p><button onClick={this.props.hideNotice.bind(this, item.id)}>&times;</button></p>
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
// react-redux 第二种用法
// const mapStateToProps = (state) => {
//     return {
//         noticeList: state.noticeReduce
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         hideNoticeFn: (id) => {
//             dispatch(hideNotice(id))
//         }
//     }
// }

export default NoticeList