import React from 'react';
import styled from 'styled-components';
import UserImg from '../../img/user-ico/user.png';
import '../../cssFonts/fonts.css';

function UserDataSettings(props) {

    const Content = styled.div`
        min-height: 186px;
        margin-top: 45px;
        @media (min-width: 543px){
            -webkit-transform: translate(10vw, 0%);
            -ms-transform: translate(10vw, 0%);
            transform: translate(10vw, 0%);
        }
        @media (min-width: 943px){
            -webkit-transform: translate(calc(8vw + 10px), 0%);
            -ms-transform: translate(calc(8vw + 10px), 0%);
            transform: translate(calc(8vw + 10px), 0%);
        }
    `
    const UserThumbnail = styled.div`
        width: 130px;
        height: 130px;
        background-color: #394166;
        margin-right: 200px;
        border-radius: 15px;
        -webkit-transform: translate(33vw, 55%);
        -ms-transform: translate(33vw, 55%);
                transform: translate(33vw, 55%);
        position: absolute;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        cursor: pointer;
        @media (max-width: 430px){
            -webkit-transform: translate(31vw, 55%);
            -ms-transform: translate(31vw, 55%);
            transform: translate(31vw, 55%);
        }
        @media (max-width: 350px){
            -webkit-transform: translate(31vw, 55%);
            -ms-transform: translate(31vw, 55%);
            transform: translate(31vw, 55%);
        }
    `
    const UserIco = styled.div`
        width: 50px;
        height: 50px;
        background: url(${UserImg});
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 17px;
    `
    const UserText = styled.h4` 
        color: #fff;
        font-family: 'Varela Round', sans-serif;
    `
    // Hide main settings, show user settings
    const goToUserSettings = () => {
        props.goToUserSettings()
    }

    return(
        <Content>
            <UserThumbnail onClick={goToUserSettings}><UserIco></UserIco><UserText>Konto</UserText></UserThumbnail>
        </Content>
    )
}
export default UserDataSettings;