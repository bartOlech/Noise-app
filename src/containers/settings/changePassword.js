import React from 'react';
import styled from 'styled-components';

function ChangePassword (props) {

    const Content = styled.div`
        width: 100%;
        position: absolute;
        bottom: -18px;
        left: 110px;
    `
    const Text = styled.h6`
        color: grey;
    `
    return(
        <Content>
            <Text>Zmień hasło</Text>
        </Content>
    )
}

export default ChangePassword;