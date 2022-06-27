import React, { Component } from "react";
import {add, sub, asyncAdd} from "../redux/action/cartAction"

import { connect } from "react-redux"
const mapStateToProps = (state) => {
    return {
        cartList: state.cartReduce
    }
}
@connect(mapStateToProps, {add, sub, asyncAdd})
class CartList extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    // componentWillMount() {
    //     this.unsubscibe = this.props.store.subscribe(() => {
    //         this.setState({
    //             cartList: this.props.cartList
    //         })
    //     })
    // }

    // componentWillUnmount() {
    //     this.unsubscibe()
    // }
    render() {
        return (
            <div>
                <h2> &copy; copyright; 购物公司 购物车应用</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>名称</th>
                            <th>价格</th>
                            <th>数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cartList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={ this.props.sub.bind(this, item.id) }>-</button>
                                            {item.amount}
                                            <button onClick={ this.props.add.bind(this, item.id) }>+</button>
                                        </td>
                                        <td>
                                            <button onClick={ this.props.asyncAdd.bind(this, item.id) }>异步增加</button>
                                        </td>
                                        <td><button>移除</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cartList: state.cartReduce
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addFn: (id) => {
//             dispatch(add(id))
//         },
//         subFn: (id) => {
//             dispatch(sub(id))
//         }
//     }
// }

export default CartList