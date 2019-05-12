import React, {Component} from 'react';
import styled from 'styled-components';
import SettingsIco from '../../img/menu_ico/settings.png';

const Content = styled.div`
    background-image: url(${SettingsIco});
    top: 260px;
    width: 33px;
    height: 33px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    position: absolute;
    right: 9px;
    z-index: 2;
    `

class SettingsBtn extends Component {

    showSettings = () => {
        this.props.showSettings()
    }

    render(){
        return(
            <Content 
                onClick={this.showSettings}>
            </Content>
        )  
    }     
}

export default SettingsBtn;