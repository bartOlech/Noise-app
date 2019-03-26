import React from 'react';
import styled from 'styled-components';
import UserImg from '../../img/user-ico/user.png';
import '../../cssFonts/fonts.css';

function UserDataSettings(props) {

    const Content = styled.div`
        min-height: 186px;
        margin-top: 45px;
            @media (min-width: 543px){
                transform: translate(10vw, 0%);
            }
            @media (min-width: 943px){
                transform: translate(calc(8vw + 10px), 0%);
            }
    `
    const UserThumbnail = styled.div`
        width: 130px;
        height: 130px;
        background-color: #394166;
        margin-right: 200px;
        border-radius: 15px;
        transform: translate(33vw, 55%);
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        @media (max-width: 430px){
            transform: translate(31vw, 55%);
        }
        @media (max-width: 350px){
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