import React, { Component } from 'react';
import { Frame } from './Frame.js';
import { Shuffle } from './Shuffle.js';
import './App.css';
import { Layout, Menu } from 'antd';
import { MenuItems } from './Menu.js';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.state = { show: "The Office",
                    src: "https://www.youtube.com/embed/Vmb1tqYqyII",
                    title: "First Aid" };
    this.onClick = this.onClick.bind(this);
  }
  onClick(newShow, newSrc, newTitle){
    this.setState({show: newShow, src: newSrc, title:newTitle});
  }
  render() {
    return (
  //TODO move menu btns into new component that call shuffle
  <Layout className="layout">
    <MenuItems onClick={this.onClick}/>
    <Content style={{ padding: '0 100px', height:"100vh" }}>
      <div id="card">
        <Frame src={this.state.src} title={this.state.title}/>
        <Shuffle show={this.state.show} onClick={this.onClick}/>
      </div>
    </Content>
  </Layout>
    );
  }
}

export default App;
