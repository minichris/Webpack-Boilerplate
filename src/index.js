import $ from 'jquery';
import React from "react";
import ReactDOM from "react-dom";
import './style.css';


class App extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<h1>Hey, it works!</h1>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("AppContainer"));