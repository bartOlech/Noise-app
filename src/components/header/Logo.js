import React from 'react'
import styled from 'styled-components';
import mainLogo from '../../img/logoo.png';
import orangeLogo from '../../img/logo-orange.png';

const Content = styled.div`

    `

const LogoBtn = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 4px;
    margin-top: -6px;
    margin-left: 85px;
    cursor: pointer;

    @media (min-width: 700px){
        margin-left: -360px;
    }
     @media (max-width: 700px){
        margin-left: 0;
    }
    `

const Logo = (props) => {
    
    // The header logo button
    const clickHeaderLogo = () => {
        props.clickHeaderLogo()
    }

    return(
        <Content>
            <LogoBtn
                src={props.clickedCategory === 'chill' || props.clickedCategory === 'places'?orangeLogo:mainLogo} 
                alt='logo'
                onClick={clickHeaderLogo} 
            ></LogoBtn>
        </Content>
    )
}
export default Logo