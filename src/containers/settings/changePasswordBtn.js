import React from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

function ChangePassword (props) {
    const social = Cookies.get('social');

    const Content = styled.div`
        width: 100%;
        position: absolute;
        bottom: -18px;
        left: 110px;
    `
    const Text = styled.h6`
        color: grey;
        cursor: pointer;
    `

    // change password function
    const changePass = () => {
        if(social === 'facebook' || social === 'google'){
          //here a notification about type of account
        }else{
            props.showChangePassSection()
        }
    }
    return(
        <div>
        <Content>
            <Text onClick={changePass}>Zmień hasło</Text>
        </Content>
        </div>
        
    )
}

export default ChangePassword;