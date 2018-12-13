import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import BabySleep from './components/babySleep';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bcg}
  }
`
//background-color:#259E91;
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuIsClicked: !false
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

  clickMenu = ()=>{
    this.child.current.clickMenu();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked
  })
  }

  render() {
    const{menuIsClicked} = this.state;
    return (
      <div>
        <Favicon url='./img/favicon.ico' />
        <Header clickHamburgerMenu={this.clickMenu} babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
        <BabySleep ref={this.childBabyBtn}></BabySleep>
        <MainContent ref={this.child}></MainContent>
        <GlobalStyle bcg={menuIsClicked? '#259E91' : '#1D5A68'}></GlobalStyle>
      </div>
    )
  }
}

export default App;
