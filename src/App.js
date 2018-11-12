import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';

const GlobalStyle = createGlobalStyle`
  body {
    background:#104C69;
  }
`
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Favicon url='./img/favicon.ico' />
        <Header></Header>
        <GlobalStyle></GlobalStyle>
      </div>
    )
  }
}

export default App;
