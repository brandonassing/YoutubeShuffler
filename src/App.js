import React, { Component } from 'react';
import { Frame } from './Frame.js';
import { Shuffle } from './Shuffle.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { src: "https://www.youtube.com/embed/Vmb1tqYqyII",
                    title: "First Aid" };
    this.onClick = this.onClick.bind(this);
  }
  onClick(newSrc, newTitle){
    this.setState({src: newSrc, title:newTitle});
  }
  render() {
    return (
    <div>
      <Frame src={this.state.src} title={this.state.title}/>
      <br/>
      <Shuffle onClick={this.onClick}/>
    </div>
    );
  }
}

export default App;
