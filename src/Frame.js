import React, { Component } from 'react';
import './Frame.css';

export class Frame extends Component{
	render(){
		return <iframe title="First Aid" width="560" height="315" src="https://www.youtube.com/embed/Vmb1tqYqyII" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>;
	}
}