import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';
import Favicon from 'react-favicon';
import MainContent from './containers/mainContent';
// npm i rc-tooltip
import LogInSignUp from './containers/logUser/logIn_SignUp';
import UserData from './components/userData';
import Cookies from 'js-cookie';
import * as backgroundColors from './components/backgroundColors';
import FavouriteIco from './img/user-ico/heart.png';
import SettingsIco from './img/menu_ico/settings.png';
import SoundSlider from './components/soundSlider';
import Settings from './containers/settings/settingsContainer';
import UserSettings from './containers/settings/userSettings';
import ChangePassword from './containers/settings/changePassCnt';
import Favourites from './containers/favourites/favourites';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => props.bcg};
    height: 100%;
    position: relative;
  }
`
  const UserCnt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
  `
  const Favourite = styled.div`
    background-image: url(${FavouriteIco});
    top: 195px;
  `
  const SettingsSection = styled.div`
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
      fullName: '',
      userEmail: '',
      selectedColor: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null,

      // favourites component
      showFavourites: false,
      loadedFavEl: false,
      favouriteSounds: [],

      // settings states
      SettingsCntVisibility: false,
      SettingsUserVisibility: false,
      SettingsChangePassVisibility: false,

      // dispatch to sounSLider
      playSound: false,
      currentSound: ''
    }
    // this.childMoreSounds = React.createRef();
    this.childUserData = React.createRef();
    this.childMainCnt = React.createRef();
    this.childUserSettings = React.createRef();
  }

  clickLogo = ()=>{
    // this.childMoreSounds.current.hideCnt();
    // this.childMoreSounds.current.resaveView();
    this.childMainCnt.current.resaveView();
    this.setState({
      selectedColor: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null,
      playSound: false
    })
  }

  clickMenu = ()=>{
    this.setState({
      menuIsClicked: !this.state.menuIsClicked,
  })
  }

  //authorization function
    isAuth = (isAuthenticated, user, email) =>{
      this.setState({
        isAuthenticated,
        fullName: user,
        userEmail: email
      })
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

  setAuthValue = (isAuth, fullName, email) => {
    this.setState({
      isAuthenticated: isAuth,
      fullName,
      userEmail: email
    })
  }

  userIsLogOut = (val) =>{
    this.setState({
      isAuthenticated: val
    })
  }
   // Change the isAuthenticated state to false if user has been removed
   authAfterDeleteUser = (val) => {
    this.setState({
      isAuthenticated: val
    })
  }

  // Select category section
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

  // 
  // Setting section
  settingsHandle = () => {
    this.setState({
      SettingsCntVisibility: true
    })
  }
  setSoundValue = (playSound, currentSound) => {
    this.setState({
      playSound,
      currentSound
    })
  }
  // Hide settings Component
  hideIcoCnt = () => {
    this.setState({
      SettingsCntVisibility: false,
      SettingsUserVisibility: false,
      SettingsChangePassVisibility: false,
      showFavourites: false,
    })
  }
  // Go to user settings
  showUserSettings = () => {
    this.setState({
      SettingsCntVisibility: false,
      SettingsUserVisibility: true,
    })
  }
  // show ChangePassword component
  showChangePassSection = () => {
    this.setState({
      SettingsChangePassVisibility: true,
    })
  }

  // Show the favourite content
  favouriteHandle = () => {
    this.setState({
      loadedFavEl: false
  })
    fetch('/api/getFavouritesSounds')
        .then(res => res.json())
        .then(json => {
            this.setState({
                favouriteSounds: json.favouriteSounds,
                loadedFavEl: true
            })
        })

    this.setState({
      showFavourites: true
    })
  }

  // remove a favourite element
  removeFavEl = (index, el) => {
    this.state.favouriteSounds.splice(index, 1)
    this.setState({
     sampleText: 'b',
     playSound: false
 })
}

  // Play a sound from the favourite component
  playSoundFromFavourite = (index, playSound) => {
    const { favouriteSounds } = this.state;
    this.setState({
      currentSound: `http://localhost:8080/api/sounds:${favouriteSounds[index]}`,
      playSound
    }, () => {
      console.log(this.state.currentSound)
    })
  }
 

  render() {
    
    const{selectedColor, selectedHeaderColor, clickedCategory, playSound, currentSound, SettingsCntVisibility, SettingsUserVisibility, SettingsChangePassVisibility, isAuthenticated, fullName, userEmail, showFavourites, favouriteSounds, loadedFavEl} = this.state;
    return (
      <div>
        {/* settings component */}
        <Settings showUserSettings={this.showUserSettings} isVisible={SettingsCntVisibility} hideIcoCnt={this.hideIcoCnt}></Settings>
        {/* user settings component */}
        <UserSettings authAfterDeleteUser={this.authAfterDeleteUser} isAuth={isAuthenticated} showChangePassSection={this.showChangePassSection} ref={this.childUserSettings} hideIcoCnt={this.hideIcoCnt} SettingsUserVisibility={SettingsUserVisibility } fullName={fullName} userEmail={userEmail}></UserSettings>
        {/* Change password component */}
        <ChangePassword userIsLogOut={this.userIsLogOut} email={userEmail} SettingsChangePassVisibility={SettingsChangePassVisibility} hideIcoCnt={this.hideIcoCnt}></ChangePassword>
        {/* Favourites */}
        <Favourites playSoundFromFavourite={this.playSoundFromFavourite} loadedFavEl={loadedFavEl} removeFavEl={this.removeFavEl} favouriteSounds={favouriteSounds} isAuth={isAuthenticated} hideFavourite={this.hideIcoCnt} showFavourites={showFavourites}></Favourites>

        <Favicon url='./img/favicon.ico' />
        {this.logInPage()}
        {/* header section */}
        <Header menuSettingsBtn={this.settingsHandle} menuUserBtn={this.showUserSettings} clickedCategory={clickedCategory} selectedHeaderColor={selectedHeaderColor} userIsLogOut={this.userIsLogOut} isAuth={isAuthenticated} isClickedLogIn={this.isClickedLogIn} clickMoreSounds={this.clickMoreSounds} clickHamburgerMenu={this.clickMenu} clickHeaderLogo={this.clickLogo}></Header>

        {/* user data */}
        <UserCnt>
          <UserData fullName={fullName} isAuth={isAuthenticated} userLogOut={this.userLogOut} setAuthValue={this.setAuthValue} ref={this.childUserData}></UserData>
          <Favourite onClick={this.favouriteHandle} style={userIcoStyle} ></Favourite>
          <SettingsSection style={userIcoStyle} onClick={this.settingsHandle}></SettingsSection>
          <SoundSlider playSound={playSound} currentSound={currentSound}></SoundSlider>
        </UserCnt>
        {/* <Sounds ref={this.childMoreSounds}></Sounds> */}
        <MainContent isAuth={isAuthenticated} setSoundValue={this.setSoundValue} selectCtg={this.selectCtg} clickCnt={this.clickCnt} ref={this.childMainCnt}></MainContent>
        <GlobalStyle bcg={selectedColor}></GlobalStyle>
      </div>
    )
  }
}

export default App;
