import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#259E91;
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
        <MainContent></MainContent>
        <GlobalStyle></GlobalStyle>
      </div>
    )
  }
}

export default App;
