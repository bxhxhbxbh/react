import { Component } from "react";
import {
	HashRouter as Router,	
	HashRouter as Redirect,
	Routes,
	Route,
	Link,
	HashRouter as withRouter
} from "react-router-dom";

import ReactHeader from "./views/Header";
import Home from "./views/Home";
import News from "./views/News";
import Members from "./views/Members";

import "./App.css";

const NewMembers = withRouter(Members)
console.log(NewMembers)

class App extends Component {
	render() {
		return (
			<div>
				<ReactHeader />
				<Router>
					<NewMembers />
					<div>
						<Link exact="true" to="/home">
							主页
						</Link>
						<Link to="/news">新闻</Link>
					</div>
					<Routes>
						<Route exact="true" path="/home" element={<Home />}></Route>
						<Route path="/news" element={<News />}></Route>
					</Routes>
				</Router>
				<Redirect from="/" to="/home"></Redirect>
			</div>
		);	
	}
}

export default App;
