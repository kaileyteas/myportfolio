import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

function App() {
  const { SubMenu } = Menu;

    const menu = (
      <Menu>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><a href="https://kaileytea.myportfolio.com/about">About</a></Menu.Item>
        <SubMenu title="Projects">
          <Menu.Item><a href="https://kaileytea.myportfolio.com/auxilia">Auxilia</a></Menu.Item>
          <Menu.Item><a href="https://kaileytea.myportfolio.com/interactions-in-dog-parks">UX Dog Parks</a></Menu.Item>
          <Menu.Item><a href="https://kaileytea.myportfolio.com/untitled">Untitled, the Game</a></Menu.Item>
        </SubMenu>
      </Menu>
    );
    
  return <BrowserRouter>

    <div className="App">
      <header className="App-header">
          <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          Kailey Terracciano <DownOutlined />
        </a>
        </Dropdown>
        {/** 
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
         */}
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />

    </div>
    
  </BrowserRouter>
}


export default App;
