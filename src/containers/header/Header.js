import React, { Component } from 'react';
import styled from 'styled-components';
import '../../App.css';
import LogInBtn from '../logUser/logInBtn';
import Logo from './Logo';
import Menu from './Menu';
import '../../cssFonts/fonts.css'

const Content = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    width: 100vw;
    height: 95px;
    background: ${props => props.background};
    -webkit-box-shadow: 2px 2px 15px rgba(0,0,0,.2);
    box-shadow: 2px 2px 15px rgba(0,0,0,.2);
    @media (min-width:600px){
        display:-webkit-box;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-orient:horizontal;
        -webkit-box-direction:normal;
        -ms-flex-direction:row;
        flex-direction:row;
    } 
    `
const HeaderText = styled.h2`
    text-align: center;
    font-family: 'Amatic SC', sans-serif;
    font-weight: 500;
    color: #E8ECEF;
    font-size: 2.7em;
    position: absolute;  
    top: 14px;
    @media (max-width:700px){
        display: none;
    }
`
class Header extends Component {
    state = {
        menuIsClicked: !false,
        isChecked: false,
        isClickedLogIn: null,
        isAuthenticated: null
    }

    clickHeaderLogo = () => {
        this.props.clickHeaderLogo()
    }

    clickHamburgerMenu = () => {
        
        // this.props.clickHamburgerMenu()
    }

    // favourites section menu
    favouritesSection = () => {
        this.props.favouritesSection();
    }

    isClickedLogIn = (val) => {
        this.props.isClickedLogIn(val)
    }

    userIsLogOut = (val) => {
        this.props.userIsLogOut(val)
    }

     // user section menu
    menuUserBtn = () => {
        this.props.menuUserBtn()
        this.props.setBackground('settings')
    }

    // settings section menu
    menuSettingsBtn = () => {
        this.props.menuSettingsBtn()
        this.props.setBackground('settings')
    }
    render() {
        const { clickedCategory, selectedHeaderColor } = this.props;
        return (
            <Content background={selectedHeaderColor}>
                <LogInBtn 
                    clickedCategory={clickedCategory}  
                    userIsLogOut={this.userIsLogOut} 
                    isAuth={this.props.isAuth} 
                    isClickedLogIn={this.isClickedLogIn}>
                </LogInBtn>
                <Logo
                    clickedCategory={this.props.clickedCategory}
                    clickHeaderLogo={this.clickHeaderLogo}
                    menuUserBtn={this.menuUserBtn}
                ></Logo>
                <HeaderText>
                    Posłuchaj...
                </HeaderText>
                <Menu
                    clickHamburgerMenu={this.clickHamburgerMenu}
                    menuUserBtn={this.menuUserBtn}
                    menuSettingsBtn={this.menuSettingsBtn}
                    favouritesSection={this.favouritesSection}
                ></Menu>
            </Content>
        )
    }
}
export default Header;