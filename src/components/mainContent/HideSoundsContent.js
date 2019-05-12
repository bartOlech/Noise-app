import React from 'react';
import styled from 'styled-components';
import BackIco from '../../img/user-ico/back-ico.png';
import '../../cssFonts/fonts.css'

const HideSoundsContent = (props) => {

    const Content = styled.div`
        display: ${props => props.display};
        width: 200px;
        height: 200px;
        position: absolute;
        left: 2px;
        top: 100px; 
    `
    const Button = styled.button`
        width: 40px;
        height: 40px;
        background: url(${BackIco});
        background-repeat: no-repeat;
        background-size: cover;
        border: none;
        margin-top: 10px;
        cursor: pointer;
        outline:0;
    `
    const ButtonText = styled.h2`
        font-family: 'Varela Round', sans-serif;
        color: #E8ECEF;
        position: absolute;
        left: 36px;
        top: 16px;
        cursor: pointer;
        @media (max-width: 470px) {
            display: none;
        }
    `

    const hideSoundsContent = () => {
        props.hideSoundsContent()
    }
    return (
        <Content display={props.display}>
            <Button onClick={hideSoundsContent}>
                
            </Button>
            <ButtonText onClick={hideSoundsContent}>Menu</ButtonText>
        </Content>
    )
}
export default HideSoundsContent;