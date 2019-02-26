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
    background: ${props => props.bcg};
    /* background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%); */
    /* background: #00A896; */
    /* background: #EBD178; */
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
      isAuthenticated: false,
      selectedColor: '#00A896',
      selectedHeaderColor: 'linear-gradient(to right, #0a7f99 0%, #0a7f99 0%, #0a7f99 0%, #257e92 33%, #0697b8 66%, #0697b8 100%)',
      clickedCategory: null
    }
    this.childBabyBtn = React.createRef();
    this.childMoreSounds = React.createRef();
    this.childUserData = React.createRef();
    this.childMainCnt = React.createRef();
  }

  clickLogo = ()=>{
    this.childBabyBtn.current.hideCnt();
    this.childMoreSounds.current.hideCnt();
    this.childMoreSounds.current.resaveView();
    this.childMainCnt.current.resaveView();
    this.setState({
      babyCntIsClicked: false,
      selectedBabyComponent: false,
      selectedColor: '#00A896',
      selectedHeaderColor: 'linear-gradient(to right, #0a7f99 0%, #0a7f99 0%, #0a7f99 0%, #257e92 33%, #0697b8 66%, #0697b8 100%)',
      clickedCategory: null
    })
  }
  
  showBabySleepCnt = ()=>{
      this.childBabyBtn.current.showBabyCnt();
      this.childMoreSounds.current.hideCnt();
      this.childMainCnt.current.resaveView();
      this.setState({
        menuIsClicked: !this.state.menuIsClicked,
        selectedBabyComponent: true,
        babyCntIsClicked: true
    })
  }

  clickMenu = ()=>{
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
      babyCntIsClicked: !this.state.babyCntIsClicked
  })
  if(this.state.selectedBabyComponent){
    this.setState({
      babyCntIsClicked: true //hide side elements
  })
  }
  }

  clickMoreSounds = ()=>{
    this.childMoreSounds.current.clickMoreSounds();
    this.childBabyBtn.current.hideCnt();
    this.childMainCnt.current.resaveView();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
      babyCntIsClicked: false,
      selectedBabyComponent: false,
  })
  }

  clickSoundMuteIco = ()=>{
    if(this.state.muteIsClicked){
      this.childMoreSounds.current.reduceVolume(0);
      this.setState({
        muteIsClicked: false
      })
    }else{
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

  selectCtg = (val) => {
    this.setState({
      clickedCategory: val
    })
    if(val === 'nature'){
      this.setState({
        selectedColor: `linear-gradient(to right, #0ba360 0%, #05B57B 100%)`,
        selectedHeaderColor: ' linear-gradient(to right, rgb(45, 163, 96) 0%, rgb(45, 163, 96) 0%, rgb(45, 163, 96) 0%, rgb(45, 163, 96) 33%, rgb(50, 192, 109) 66%, rgb(50, 192, 109) 100%)'
      })
    }else if(val === 'entertainment'){
      this.setState({
        selectedColor: `linear-gradient(to right, rgb(224, 195, 66) 0%, rgb(224, 195, 66) 0%, rgb(224, 195, 66) 0%, rgb(230, 202, 77) 33%,rgb(230, 202, 77) 66%, rgb(230, 202, 77) 100%)`,
        selectedHeaderColor: 'linear-gradient(to right, #dbaa3f 0%, #f1cf5d 100%);'
      })
    }
  }

  render() {
    const{muteIsClicked, selectedColor, selectedHeaderColor, clickedCategory} = this.state;
    return (
      <div>
      <Favicon url='./img/favicon.ico' />
      {this.logInPage()}
      <Header clickedCategory={clickedCategory} selectedHeaderColor={selectedHeaderColor} userIsLogOut={this.userIsLogOut} isAuth={this.state.isAuthenticated} isClickedLogIn={this.isClickedLogIn} clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} babySleepBtn={this.showBabySleepCnt} clickHeaderLogo={this.clickLogo}></Header>
      {/* sound / mute ico */}
      <img  onClick={this.clickSoundMuteIco} className='sound-mute-ico' src={muteIsClicked?soundIco:muteIco} alt='sound ico'></img>

      {this.showWaveImg()}

      {/* user data */}
      <UserData userLogOut={this.userLogOut} setAuthValue={this.setAuthValue} ref={this.childUserData}></UserData>
      
      
      <BabySleep ref={this.childBabyBtn}></BabySleep>
      <Sounds ref={this.childMoreSounds}></Sounds>
      <MainContent selectCtg={this.selectCtg} clickCnt={this.clickCnt} ref={this.childMainCnt}></MainContent>
      <GlobalStyle bcg={selectedColor}></GlobalStyle>
      
      </div>
    )
  }
}

export default App;
