import React, {Component} from 'react';
import styled from 'styled-components';
import mainLogo from '../img/logo.png';

const Content = styled.div`
        width: 100vw;
        height: 180px;
        background-color: #166678;
    `;
const Img = styled.img`
    margin-left:60px;
`

class Header extends Component{
    state = {

    }

    
    render(){
        return(
            <Content>
                <Img src={mainLogo} alt='logo'></Img>
            </Content>
        )
    }
}
export default Header;