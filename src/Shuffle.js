import React, { Component } from 'react';
import { Button } from 'antd';
import './Shuffle.css'

export class Shuffle extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.props.onClick("https://www.youtube.com/embed/9tt6QPhii88", "Rowboat");
	}
	render(){
		return <Button type="primary" onClick={this.handleClick}>Shuffle</Button>;
	}
}