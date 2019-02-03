import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import BabySleep from './components/babySleep';
import Sounds from './containers/sounds';
import muteIco from './img/mute-ico.png';
import soundIco from './img/sound-ico.png';
import LogInSignUp from './containers/logUser/logIn_SignUp';
import UserData from './components/userData';
import Cookies from 'js-cookie';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.bcg};
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
      selectedBabyComponent: false, //is true if you'r in baby component then hide side el
      clickLogIn: false,
      getToken: Cookies.get('auth'),
      isLogged: false,
      isAuthenticated: false

    }
    this.childMainCnt = React.createRef();
    this.childBabyBtn = React.createRef();
    this.childMoreSounds = React.createRef();
    this.childUserData = React.createRef();
  }

  clickLogo = ()=>{
    this.childMainCnt.current.resaveView();
    this.childBabyBtn.current.hideCnt();
    this.childMoreSounds.current.hideCnt();
    this.childMoreSounds.current.resaveView();
    this.setState({
      babyCntIsClicked: false,
      selectedBabyComponent: false,
    })
  }
  
  showBabySleepCnt = ()=>{
      this.childBabyBtn.current.showBabyCnt();
      this.childBabyBtn.current.fadeView();
      this.childMainCnt.current.hideCnt(); 
      this.childMoreSounds.current.hideCnt();
      this.childMoreSounds.current.fadeView();
      this.setState({
        menuIsClicked: !this.state.menuIsClicked,
        selectedBabyComponent: true,
        babyCntIsClicked: true
    })
  }

  clickMenu = ()=>{
    this.childMainCnt.current.clickMenu();
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
    this.childMainCnt.current.hideCnt();
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
      this.childMainCnt.current.reduceVolume(0)
      this.childMoreSounds.current.reduceVolume(0);
      this.setState({
        muteIsClicked: false
      })
    }else{
      this.childMainCnt.current.increaseVolume(100)
      this.childMoreSounds.current.increaseVolume(100);
      this.setState({
        muteIsClicked: true
      })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.showWaveImg.bind(this));
    if(this.state.getToken){
    }
  }

  showWaveImg() {
    const{babyCntIsClicked} = this.state
    if(window.innerWidth > 600){
        return(
          <div style={babyCntIsClicked?hideEl:null} className='waves-cnt'>
          <section className='wave'></section>
        </div>
        )
     }
  }

  //authorization function
    isAuth = (isAuthenticated, user) =>{
      this.setState({
        isAuthenticated
      })
      this.childUserData.current.isAuth(isAuthenticated, user);
    }

  //log-in page

  logInPage(){
    if(this.state.clickLogIn){
      return(
        <LogInSignUp isAuth={this.isAuth} closeLogIn={this.closeLogIn}></LogInSignUp>
      )
    }
  }

  closeLogIn = (val)=>{
    this.setState({
      clickLogIn: val
    })
  }

  isClickedLogIn = (val)=>{
    this.setState({
      clickLogIn: val
    })
  }

  setAuthValue = (val) => {
    this.setState({
      isAuthenticated: val
    })
  }

  userIsLogOut = (val) =>{
    this.setState({
      isAuthenticated: val
    })
    this.childUserData.current.userIsLogOut(false);
  }

  render() {
    console.log(this.state.isAuthenticated)
    const{menuIsClicked, muteIsClicked, babyCntIsClicked} = this.state;
    return (
      <div>
      <Favicon url='./img/favicon.ico' />
      {this.logInPage()}
      <Header userIsLogOut={this.userIsLogOut} isAuth={this.state.isAuthenticated} isClickedLogIn={this.isClickedLogIn} clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
      {/* sound / mute ico */}
      <img style={babyCntIsClicked?hideEl:null} onClick={this.clickSoundMuteIco} className='sound-mute-ico' src={muteIsClicked?soundIco:muteIco} alt='sound ico'></img>

      {this.showWaveImg()}

      {/* user data */}
      <UserData userLogOut={this.userLogOut} setAuthValue={this.setAuthValue} ref={this.childUserData}></UserData>
      
      
      <BabySleep ref={this.childBabyBtn}></BabySleep>
      <Sounds ref={this.childMoreSounds}></Sounds>
      <MainContent clickCnt={this.clickCnt} ref={this.childMainCnt}></MainContent>
      <GlobalStyle bcg={menuIsClicked? 'rgb(14, 129, 116)' : '#1D5A68'}></GlobalStyle>
      
      </div>
    )
  }
}

export default App;
