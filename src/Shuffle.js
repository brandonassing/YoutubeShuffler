import React, { Component } from 'react';
import { Button } from 'antd';
import './Shuffle.css'

export class Shuffle extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		var newSrc = "https://www.youtube.com/embed/9tt6QPhii88";
		var newTitle = "Rowboat";
		this.props.onClick(newSrc, newTitle);
	}
	render(){
		return <Button id="shuffle-btn" size="large" type="primary" onClick={this.handleClick}>Shuffle</Button>;
	}
}