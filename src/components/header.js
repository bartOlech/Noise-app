import React, {Component} from 'react';
import styled from 'styled-components';
import mainLogo from '../img/logoo.png';
import '../App.css';
import LogInBtn from '../containers/logUser/logInBtn';

const Content = styled.div`
        width: 100vw;
        height: 180px;
        background-image: linear-gradient(to right, #0a7f99 0%, #0a7f99 0%, #0a7f99 0%, #257e92 33%, #0697b8 66%, #0697b8 100%);
        box-shadow: 2px 2px 15px rgba(0,0,0,.2);
        @media (min-width:600px){
            display:flex;
            flex-direction:row;
        } 
    `;
const Img = styled.img`
    width: 200px;
    height: 200px;
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
class Header extends Component{
    state = {
        menuIsClicked: !false,
        isChecked: false,
        isClickedLogIn: null,
        isAuthenticated: null
    }

    clickHeaderLogo = ()=>{
      this.props.clickHeaderLogo()
    }

    babySleepBtn = ()=>{
        this.props.babySleepBtn()
        this.setState({
            isChecked: false
        })
    }

    clickHamMenu = ()=>{
        this.setState({
            isChecked: !this.state.isChecked
        })
        this.props.clickHamburgerMenu()
    }
    

    onChange = ()=>{
        
    }

    clickMoreSounds = ()=>{
        this.props.clickMoreSounds();
        this.setState({
            isChecked: false
        })
    }

    isClickedLogIn = (val)=>{
        this.props.isClickedLogIn(val)
    }

    userIsLogOut = (val) => {
        this.props.userIsLogOut(val)
    }
    
    
    render(){
        return(
            <Content>
                <LogInBtn userIsLogOut={this.userIsLogOut} isAuth={this.props.isAuth} isClickedLogIn={this.isClickedLogIn}></LogInBtn>
                <Img onClick={this.clickHeaderLogo} src={mainLogo} alt='logo'></Img>
                <nav className='nav-phone'>
                    <div className="menu-toggle">
                        <input checked={this.state.isChecked} onClick={this.clickHamMenu} type="checkbox" onChange={this.onChange}/>
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu">
                            <li className=""><div onClick={this.babySleepBtn}>Uśpij dziecko</div></li>
                            <li className=""><div>Sklep</div></li>
                            <li className=""><div onClick={this.clickMoreSounds}>Więcej odgłosów</div></li>
                        </ul>
                    </div>
                </nav>
                <nav className='nav-desktop'>
                    <ul>
                        <li><div onClick={this.babySleepBtn}>Uśpij dziecko</div></li>
                        <li><div>Sklep</div></li>
                        <li><div onClick={this.clickMoreSounds}>Więcej odgłosów</div></li>
                    </ul>
                </nav>
            </Content>
        )
    }
}
export default Header;