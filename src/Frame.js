import React, { Component } from 'react';
import './Frame.css';

export class Frame extends Component{
	render(){
		return <iframe title={this.props.title} width="560" height="315" src={this.props.src} frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>;
	}
}