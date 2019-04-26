import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './containers/header/Header';
import Favicon from 'react-favicon';
// import MainContent from './containers/mainContent/mainContent';
import UserData from './components/userData';
import * as backgroundColors from './components/backgroundColors';
import SoundSlider from './components/soundSlider';
import SettingsSection from './containers/settings/SettingsContainer';
import FavouritesSection from './containers/favourites/FavouritesContainer';
import LogContainer from './containers/logUser/LogContainer';
import MainContentContainer from './containers/mainContent/MainContentContainer';

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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clickLogIn: false,
      isAuthenticated: false,
      fullName: '',
      userEmail: '',
      backgroundColorApp: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null,
      sliderSoundActiveColor: '#227970',

      // dispatch to sounSLider
      playSound: false,
      currentSound: ''
    }
    this.childMainContent = React.createRef();
    this.childUserSettings = React.createRef();
    this.childFavourites = React.createRef();
    this.childSoundSlider = React.createRef();
    this.childLogUser = React.createRef();
  }

  clickHeaderLogo = () => {
    this.childMainContent.current.resaveView();
    this.setState({
      backgroundColorApp: '#00A896',
      selectedHeaderColor: backgroundColors.headerBck.blue,
      clickedCategory: null,
    })
  }

  //authorization function
    isAuth = (isAuthenticated, user, email) => {
      this.setState({
        isAuthenticated,
        fullName: user,
        userEmail: email
      })
    }

  isClickedLogIn = (val) => {
    this.childLogUser.current.setClickLogInBtn(val);
  }

  setAuthValue = (isAuth, fullName, email) => {
    this.setState({
      isAuthenticated: isAuth,
      fullName,
      userEmail: email
    })
  }

  userIsLogOut = (val) => {
    this.setState({
      isAuthenticated: false
    })
  }

  // Select category section
  setBackground = (val) => {
    this.setState({
      clickedCategory: val
    })
    if(val === 'nature'){
      this.setState({
        backgroundColorApp: backgroundColors.mainBck.green,
        selectedHeaderColor: backgroundColors.headerBck.green,
        sliderSoundActiveColor: '#227970'  
      })
    }else if(val === 'chill' || val === 'places'){
      this.setState({
        backgroundColorApp: backgroundColors.mainBck.orange,
        selectedHeaderColor: backgroundColors.headerBck.orange,
        sliderSoundActiveColor: '#E46139',
      })
    }
    else if(val === 'other' || val === 'animals'){
      this.setState({
        backgroundColorApp: backgroundColors.mainBck.blue,
        selectedHeaderColor: backgroundColors.headerBck.blue,
        sliderSoundActiveColor: '#227970',
      })
    }
    else if(val === 'favourites'){
      this.setState({
        backgroundColorApp: backgroundColors.mainBck.favouritesColor,
        selectedHeaderColor: backgroundColors.headerBck.blue,
      })
    }
    else if(val === 'settings'){
      this.setState({
        backgroundColorApp: backgroundColors.mainBck.settingsColor,
        selectedHeaderColor: backgroundColors.headerBck.blue,
      })
    }
  }

  setSoundValue = (playSound, currentSound) => {
    this.childSoundSlider.current.setSound(currentSound, playSound);
  }

  // Play a sound from the favourite component
  playSoundFromFavourite = (favouriteSounds, playSound) => {
    const currentSound = `http://localhost:8080/api/sounds:${favouriteSounds}`;
    this.childSoundSlider.current.setSound(currentSound, playSound);
  }

  // functions from the menu buttons
  // Show the user settings
  menuUserBtn = () => {
    this.childUserSettings.current.showUserSettnigs();
  }
  // Show the favourites sounds
  favouritesSection = () => {
    this.childFavourites.current.showFavouritesSounds();
  }
  // Show the main settings
  settingsHandle = () => {
    this.childUserSettings.current.showMainSettnigs();
  }

  render() {
    
    const{
      backgroundColorApp, 
      selectedHeaderColor, 
      clickedCategory, 
      playSound, 
      currentSound, 
      isAuthenticated, 
      fullName, 
      userEmail,
      sliderSoundActiveColor } = this.state;
    return (
      <div>
        

        <Favicon url='./img/favicon.ico' />

        {/* Login section */}
        <LogContainer
          ref={this.childLogUser}
          isAuth={this.isAuth}
         ></LogContainer>

        {/* header section */}
        <Header 
          clickedCategory={clickedCategory} 
          selectedHeaderColor={selectedHeaderColor} 
          userIsLogOut={this.userIsLogOut} 
          isAuth={isAuthenticated} 
          isClickedLogIn={this.isClickedLogIn} 
          clickHeaderLogo={this.clickHeaderLogo}
          menuUserBtn={this.menuUserBtn}
          favouritesSection={this.favouritesSection}
          menuSettingsBtn={this.settingsHandle} 
          setBackground={this.setBackground}
          >
        </Header>

        {/* user data */}
        <UserCnt>
          <UserData 
            fullName={fullName} 
            isAuth={isAuthenticated} 
            userLogOut={this.userLogOut} 
            setAuthValue={this.setAuthValue} 
            ref={this.childUserData}>
          </UserData>
          {/* Favourites */}
          <FavouritesSection 
            playSoundFromFavourite={this.playSoundFromFavourite}
            isAuth={isAuthenticated}
            ref={this.childFavourites}
            setBackground={this.setBackground}
            resaveView={this.clickHeaderLogo}
          >
          </FavouritesSection>
          {/* Settings */}
          <SettingsSection 
            isAuth={isAuthenticated}
            userEmail={userEmail}
            user={this.userIsLogOut}
            userIsLogOut={this.userIsLogOut}
            fullName={fullName}
            ref={this.childUserSettings}
            setBackground={this.setBackground}
            resaveView={this.clickHeaderLogo}
             >
          </SettingsSection>
          {/* Play sound */}
          <SoundSlider 
            playSound={playSound} 
            currentSound={currentSound}
            ref={this.childSoundSlider}
            sliderSoundActiveColor={sliderSoundActiveColor}
            >
          </SoundSlider>
        </UserCnt>
        <MainContentContainer
          isAuth={isAuthenticated} 
          setSoundValue={this.setSoundValue}
          ref={this.childMainContent}
          setBackground={this.setBackground}
        ></MainContentContainer>
        <GlobalStyle bcg={backgroundColorApp}></GlobalStyle>
      </div>
    )
  }
}

export default App;
