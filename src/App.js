import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
import Sounds from './containers/sounds';
import LogInSignUp from './containers/logUser/logIn_SignUp';
import UserData from './components/userData';
import Cookies from 'js-cookie';
import * as backgroundColors from './components/backgroundColors';
import FavouriteIco from './img/user-ico/heart.png';
import SettingsIco from './img/menu_ico/settings.png';
import SoundSlider from './components/soundSlider';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.bcg};
  }
`
const UserCnt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
`
const TestDiv = styled.div`
  color: #F5F7EF;
  font-weight: 500;
  margin-right: 10px;
  margin-top: 5px;
`
const Favourite = styled.div`
  background-image: url(${FavouriteIco});
  top: 195px;
`
const Settings = styled.div`
  background-image: url(${SettingsIco});
  top: 260px;
`

const userIcoStyle = {
  width: '33px',
  height: '33px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
  position: 'absolute',
  right: '10px',
  zIndex: 2
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuIsClicked: !false,
      muteIsClicked: !false,
      clickLogIn: false,
      getToken: Cookies.get('auth'),
      isLogged: false,
      isAuthenticated: false,
      selectedColor: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null
    }
    // this.childMoreSounds = React.createRef();
    this.childUserData = React.createRef();
    this.childMainCnt = React.createRef();
  }

  clickLogo = ()=>{
    // this.childMoreSounds.current.hideCnt();
    // this.childMoreSounds.current.resaveView();
    this.childMainCnt.current.resaveView();
    this.setState({
      selectedColor: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null
    })
  }

  clickMenu = ()=>{
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
  })
  }

  clickMoreSounds = ()=>{
    this.childMoreSounds.current.clickMoreSounds();
    this.childMainCnt.current.resaveView();
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
  })
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
        selectedColor: backgroundColors.mainBck.green,
        selectedHeaderColor: backgroundColors.headerBck.green
      })
    }else if(val === 'chill'){
      this.setState({
        selectedColor: backgroundColors.mainBck.orange,
        selectedHeaderColor: backgroundColors.headerBck.orange
      })
    }else if(val === 'jobs'){
      this.setState({
        selectedColor: backgroundColors.mainBck.blue,
        selectedHeaderColor: backgroundColors.headerBck.blue
      })
    }
    else if(val === 'animals'){
      this.setState({
        
        selectedHeaderColor: backgroundColors.headerBck.blue
      })
    }
    else if(val === 'culture'){
      this.setState({
        selectedColor: backgroundColors.mainBck.orange,
        selectedHeaderColor: backgroundColors.headerBck.orange
      })
    }
    else if(val === 'historyPlaces'){
      this.setState({
        selectedColor: backgroundColors.mainBck.lightBrown,
        selectedHeaderColor: backgroundColors.headerBck.warmOrange
      })
    }
    else if(val === 'other'){
      this.setState({
        selectedColor: backgroundColors.mainBck.blue,
        selectedHeaderColor: backgroundColors.headerBck.blue
      })
    }
  }

  click = () => {
    console.log('click')
  }

  render() {
    const{selectedColor, selectedHeaderColor, clickedCategory} = this.state;
    return (
      <div>
      <Favicon url='./img/favicon.ico' />
      {this.logInPage()}
      <Header clickedCategory={clickedCategory} selectedHeaderColor={selectedHeaderColor} userIsLogOut={this.userIsLogOut} isAuth={this.state.isAuthenticated} isClickedLogIn={this.isClickedLogIn} clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} clickHeaderLogo={this.clickLogo}></Header>

      {/* user data */}
      <UserCnt>
        <UserData userLogOut={this.userLogOut} setAuthValue={this.setAuthValue} ref={this.childUserData}></UserData>
        <TestDiv>Example user</TestDiv>
        <Favourite style={userIcoStyle} ></Favourite>
        <Settings style={userIcoStyle} onClick={this.click}></Settings>
        <SoundSlider></SoundSlider>
      </UserCnt>
      
      
      {/* <Sounds ref={this.childMoreSounds}></Sounds> */}
      <MainContent selectCtg={this.selectCtg} clickCnt={this.clickCnt} ref={this.childMainCnt}></MainContent>
      <GlobalStyle bcg={selectedColor}></GlobalStyle>
      
      </div>
    )
  }
}

export default App;
