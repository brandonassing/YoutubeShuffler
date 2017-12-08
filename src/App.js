import React, { Component } from 'react';
import { Frame } from './Frame.js';
import { Shuffle } from './Shuffle.js';
import './App.css';
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

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

  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">The Office</Menu.Item>
        <Menu.Item key="2">Arrested Development</Menu.Item>
        <Menu.Item key="3">Parks and Recreation</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 100px', height:"100vh" }}>
      <div id="card">
        <Frame src={this.state.src} title={this.state.title}/>
        <Shuffle onClick={this.onClick}/>
      </div>
    </Content>
  </Layout>
    );
  }
}

export default App;
