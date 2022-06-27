import React, { Component } from "react";
import {add, sub} from "../redux/action/cartAction"

export default class CartList extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartList: this.props.store.getState().cartReduce
        }
    }
    componentWillMount() {
        this.unsubscibe = this.props.store.subscribe(() => {
            this.setState({
                cartList: this.props.store.getState().cartReduce
            })
        })
    }

    componentWillUnmount() {
        this.unsubscibe()
    }
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
                            this.state.cartList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <button onClick={() => {
                                                this.props.store.dispatch(sub(item.id))
                                            }}>-</button>
                                            {item.amount}
                                            <button onClick={() => {
                                                this.props.store.dispatch(add(item.id))
                                            }}>+</button>
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