import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import BabySleep from './components/babySleep';
import Sounds from './containers/sounds';
import muteIco from './img/mute-ico.png';
import soundIco from './img/sound-ico.png';
import {mutePage, playPage} from './components/muteToggle';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bcg}
  }
`
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuIsClicked: !false,
      muteIsClicked: !false
    }
    this.child = React.createRef();
    this.childBabyBtn = React.createRef();
    this.childMoreSounds = React.createRef();
  }

  clickLogo = ()=>{
    this.child.current.resaveView();
    this.childBabyBtn.current.hideCnt();
    this.childMoreSounds.current.hideCnt();
  }
  
  showBabySleepCnt = ()=>{
      this.childBabyBtn.current.showBabyCnt();
      this.childBabyBtn.current.fadeView();
      this.child.current.hideCnt(); 
      this.childMoreSounds.current.hideCnt();
      this.childMoreSounds.current.fadeView();
      this.setState({
        menuIsClicked: !this.state.menuIsClicked
    })
  }

  clickMenu = ()=>{
    this.child.current.clickMenu();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked
  })
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
      menuIsClicked: !this.state.menuIsClicked
  })
  }

  

  clickSoundMuteIco = ()=>{
    if(this.state.muteIsClicked){
      mutePage();
      this.setState({
        muteIsClicked: false
      })
    }else{
      playPage();
      this.setState({
        muteIsClicked: true
      })
    }
  }

  render() {
    const{menuIsClicked, muteIsClicked} = this.state;
    return (
      <div>
        <Favicon url='./img/favicon.ico' />
        <Header clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
        {/* sound / mute ico */}
        <img onClick={this.clickSoundMuteIco} className='sound-mute-ico' src={muteIsClicked?soundIco:muteIco} alt='sound ico'></img>

        <div className='waves-cnt'>
          <section className='wave'></section>
        </div>
        <BabySleep ref={this.childBabyBtn}></BabySleep>
        <Sounds ref={this.childMoreSounds}></Sounds>
        <MainContent clickCnt={this.clickCnt} ref={this.child}></MainContent>
        <GlobalStyle bcg={menuIsClicked? '#259E91' : '#1D5A68'}></GlobalStyle>
        
      </div>
    )
  }
}

export default App;
