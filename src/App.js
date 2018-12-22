import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import BabySleep from './components/babySleep';
import Sounds from './containers/sounds';
import muteIco from './img/mute-ico.png';
import soundIco from './img/sound-ico.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bcg}
  }
`
const hideEl = {
  display: 'none'
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuIsClicked: !false,
      muteIsClicked: !false,
      babyCntIsClicked: false, //if is true, hide side elements
      selectedBabyComponent: false //is true if you'r in baby component then hide side el
    }
    this.child = React.createRef();
    this.childBabyBtn = React.createRef();
    this.childMoreSounds = React.createRef();
  }

  clickLogo = ()=>{
    this.child.current.resaveView();
    this.childBabyBtn.current.hideCnt();
    this.childMoreSounds.current.hideCnt();
    this.setState({
      babyCntIsClicked: false,
      selectedBabyComponent: false,
    })
  }
  
  showBabySleepCnt = ()=>{
      this.childBabyBtn.current.showBabyCnt();
      this.childBabyBtn.current.fadeView();
      this.child.current.hideCnt(); 
      this.childMoreSounds.current.hideCnt();
      this.childMoreSounds.current.fadeView();
      this.setState({
        menuIsClicked: !this.state.menuIsClicked,
        selectedBabyComponent: true,
        babyCntIsClicked: true
    })
  }

  clickMenu = ()=>{
    this.child.current.clickMenu();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
      babyCntIsClicked: !this.state.babyCntIsClicked
  })
  if(this.state.selectedBabyComponent){
    this.setState({
      babyCntIsClicked: true //hide side elements
  })
  }
  this.childBabyBtn.current.fadeView();
  this.childMoreSounds.current.fadeView();
  }

  clickMoreSounds = ()=>{
    this.childMoreSounds.current.clickMoreSounds();
    this.childMoreSounds.current.fadeView();
    this.child.current.hideCnt();
    this.childBabyBtn.current.hideCnt();
    this.childBabyBtn.current.fadeView();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
      babyCntIsClicked: false,
      selectedBabyComponent: false,
  })
  }

  clickSoundMuteIco = ()=>{
    if(this.state.muteIsClicked){
      this.child.current.reduceVolume(0)
      this.setState({
        muteIsClicked: false
      })
    }else{
      this.child.current.increaseVolume(100)
      this.setState({
        muteIsClicked: true
      })
    }
  }

  render() {
    const{menuIsClicked, muteIsClicked, babyCntIsClicked} = this.state;
    return (
      <div>
        <Favicon url='./img/favicon.ico' />
        <Header clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
        {/* sound / mute ico */}
        <img style={babyCntIsClicked?hideEl:null} onClick={this.clickSoundMuteIco} className='sound-mute-ico' src={muteIsClicked?soundIco:muteIco} alt='sound ico'></img>

        <div style={babyCntIsClicked?hideEl:null} className='waves-cnt'>
          <section className='wave'></section>
        </div>
        <BabySleep ref={this.childBabyBtn}></BabySleep>
        <Sounds ref={this.childMoreSounds}></Sounds>
        <MainContent clickCnt={this.clickCnt} ref={this.child}></MainContent>
        <GlobalStyle bcg={menuIsClicked? 'rgb(14, 129, 116)' : '#1D5A68'}></GlobalStyle>
        
      </div>
    )
  }
}

export default App;
