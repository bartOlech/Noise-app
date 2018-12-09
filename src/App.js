import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import BabySleep from './components/babySleep';

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
    this.child = React.createRef();
    this.childBabyBtn = React.createRef();
  }

  clickLogo = ()=>{
    this.child.current.resaveView();
    this.childBabyBtn.current.hideCnt();
  }
  
  showBabySleepCnt = ()=>{
    this.childBabyBtn.current.showBabyCnt();
    this.child.current.hideCnt();
  }

  render() {
    return (
      <div>
        <Favicon url='./img/favicon.ico' />
        <Header babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
        <BabySleep ref={this.childBabyBtn}></BabySleep>
        <MainContent ref={this.child}></MainContent>
        <GlobalStyle></GlobalStyle>
      </div>
    )
  }
}

export default App;
