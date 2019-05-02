import React from 'react';
import styled from 'styled-components';
import '../../cssFonts/fonts.css';

function RemoveAccount (props) {

    const Content = styled.div`
        width: 100%;
        margin-top: 120px;
        margin-left: -30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        @media(min-height: 580px){
            margin-top: 130px;
        }
        @media(min-height: 600px){
            margin-top: 140px;
        }
        @media(min-height: 640px){
            margin-top: 170px;
        }
        @media(min-height: 660px){
            margin-top: 190px;
        }
    `
    const removeAccountHandle = () => {
        props.removeAccountHandle()
    }
    const Text = styled.h4`
        color: red;
        font-family: 'Varela Round', sans-serif;
        cursor: pointer;
    `
    return(
        <Content>
            <Text onClick={removeAccountHandle}>Usuń konto</Text>
        </Content>
    )
}

export default RemoveAccount;