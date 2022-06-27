import React, { Component } from "react";

function Content(Header){
	return class ReactContent extends Component {
		render() {
			return (
				<div className="App">
					<Header />
					<div>shisdjfsdhfsidfhsdh</div>
				</div>
			);
		}
	}
}

export default Content