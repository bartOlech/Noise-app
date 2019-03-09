import React, { Component } from 'react';
import styled from 'styled-components';
import mainLogo from '../img/logoo.png';
import orangeLogo from '../img/logo-orange.png';
import '../App.css';
import LogInBtn from '../containers/logUser/logInBtn';

const Content = styled.div`
    width: 100vw;
    height: 130px;
    background: ${props => props.bck};
    box-shadow: 2px 2px 15px rgba(0,0,0,.2);
    @media (min-width:600px){
        display:flex;
        flex-direction:row;
    } 
`;
const Img = styled.img`
    width: 150px;
    height: 150px;
    margin-left:4px;
    margin-top:-10px;
    cursor: pointer;

    @media (max-width:700px){
        margin-left: 150px;
    }
    @media (min-width:1000px){
        margin-left: 130px;
    }
     @media (max-width:550px){
        margin-left: 140px;
    }
    @media (max-width:395px){
        margin-left: 70px;
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

    clickHamMenu = () => {
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.clickHamburgerMenu()
    }


    onChange = () => {

    }

    clickMoreSounds = () => {
        this.props.clickMoreSounds();
        this.setState({
            isChecked: false
        })
    }

    isClickedLogIn = (val) => {
        this.props.isClickedLogIn(val)
    }

    userIsLogOut = (val) => {
        this.props.userIsLogOut(val)
    }


    render() {
        const {clickedCategory, selectedHeaderColor} = this.props;
        return (
            <Content bck={selectedHeaderColor}>
                <LogInBtn clickedCategory={clickedCategory}  userIsLogOut={this.userIsLogOut} isAuth={this.props.isAuth} isClickedLogIn={this.isClickedLogIn}></LogInBtn>
                <Img onClick={this.clickHeaderLogo} src={clickedCategory === 'chill' || clickedCategory === 'culture' || clickedCategory === 'historyPlaces'?orangeLogo:mainLogo} alt='logo'></Img>
                <nav className='nav-phone'>
                    <div className="menu-toggle">
                        <input checked={this.state.isChecked} onClick={this.clickHamMenu} type="checkbox" onChange={this.onChange} />
                        <span className='span-1'></span>
                        <span className='span-2'></span>
                        <span className='span-3'></span>
                        <ul className="menu">
                            <li className="menu-menu"><div>Menu</div></li>
                            <li className="menu-profile"><div>Profil</div></li>
                            <li className="menu-best-rated"><div onClick={this.clickMoreSounds}>Najlepiej oceniane</div></li>
                            <li className="menu-mobile-v"><div onClick={this.clickMoreSounds}>Wersja mobilna</div></li>
                            <li className="menu-settings"><div onClick={this.clickMoreSounds}>Ustawienia</div></li>
                        </ul>
                    </div>
                </nav>
                <nav className='nav-desktop'>
                    <ul>
                        <li><div>Uśpij dziecko</div></li>
                        <li><div>Sklep</div></li>
                        <li><div onClick={this.clickMoreSounds}>Więcej odgłosów</div></li>
                    </ul>
                </nav>
            </Content>
        )
    }
}
export default Header;