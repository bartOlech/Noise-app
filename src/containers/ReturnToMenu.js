import React from 'react';
import styled from 'styled-components';
import BackIco from '../img/user-ico/back-ico.png';

function ReturnToMenu(props) {

    const Content = styled.div`
        width: 200px;
        height: 200px;
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

    const hideSettings = () => {
        props.hideSettings()
    }
    return (
        <Content>
            <Button onClick={hideSettings}>
                
            </Button>
        </Content>
    )
}
export default ReturnToMenu;