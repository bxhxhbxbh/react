import React, { Component } from "react";
import {
	HashRouter as Router,	
	HashRouter as Redirect,
	HashRouter as Withrouter,
	Routes,
	Route,
	Link,
} from "react-router-dom";

import "./App.css";

import ReactHeader from "./views/Header";
import Home from "./views/Home";
import News from "./views/News";
import Members from "./views/Members";

import CartList from "./components/CartList";
import NoticeList from "./components/NoticeList";

class App extends Component {
	render() {
		return (
			<div>
				{/* <ReactHeader /> */}
				<Router>
					<div>
						<Link exact="true" to="/home">
							主页
						</Link>
						<Link to="/news">新闻</Link>
						<Link to="/members">会员</Link>
					</div>
					<Routes>
						<Route exact="true" path="/home" element={<Home />}></Route>
						<Route path="/news" element={<News />}></Route>
						<Route path="/members" element={<Members />}></Route>
					</Routes>
				</Router>
				{/* <Redirect from="/" to="/home"></Redirect> */}
				<CartList store={this.props.store}/>
				<NoticeList store={this.props.store}/>
			</div>
		);	
	}
}

export default App;
