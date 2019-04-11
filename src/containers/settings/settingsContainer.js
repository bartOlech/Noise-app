import React, {Component} from 'react';
import styled from 'styled-components';
import SettingsBtn from './SettingsBtn';
import Settings from './Settings';
import UserSettings from './userSettings';
import ChangePassword from './changePassCnt';


const Content = styled.div`
    
    `

class SettingsContainer extends Component {
    state = {
        mainSettingsIsVisible: false,
        userSettingsIsVisible: false,
        ChangePassSettingsIsVisible: false,
    }

    // show settings component
    showSettings = () => {
        this.setState({
            mainSettingsIsVisible: true,
        })
        this.props.setBackground('settings')
    }

    // hide settings component
    hideIcoCnt = () => {
        this.setState({
            mainSettingsIsVisible: false,
            userSettingsIsVisible: false,
            ChangePassSettingsIsVisible: false,
        })
        this.props.setBackground('menu')
        this.props.resaveView()
    }

    showUserSettings = () => {
        this.setState({
            mainSettingsIsVisible: false,
            ChangePassSettingsIsVisible: false,
            userSettingsIsVisible: true,
        })
    }

    showChangePassSection = () => {
        this.setState({
            ChangePassSettingsIsVisible: true,
            mainSettingsIsVisible: false,
            userSettingsIsVisible: false,
        })
    }

    userIsLogOut = () => {
        this.props.userIsLogOut()
    }

    authAfterDeleteUser = () => {
        this.props.userIsLogOut()
    }

    // Show the user settings (menu button)
    showUserSettnigs() {
        this.setState({
            userSettingsIsVisible: true,
        })
    }

    // Show the main settings (menu button)
    showMainSettnigs() {
        this.setState({
            mainSettingsIsVisible: true,
        })
    }

    render(){
        const { 
            mainSettingsIsVisible, 
            userSettingsIsVisible, 
            ChangePassSettingsIsVisible
         } = this.state;
        return(
            <Content>
                {/* settings ico button */}
                <SettingsBtn
                    showSettings={this.showSettings}
                ></SettingsBtn>

                {/* settings component */}
                <Settings
                    isVisible={mainSettingsIsVisible}
                    hideIcoCnt={this.hideIcoCnt}
                    showUserSettings={this.showUserSettings}
                    >
                </Settings>

                {/* user settings component */}
                <UserSettings 
                    SettingsUserVisibility={userSettingsIsVisible}
                    authAfterDeleteUser={this.authAfterDeleteUser} 
                    isAuth={this.props.isAuth} 
                    showChangePassSection={this.showChangePassSection} 
                    hideIcoCnt={this.hideIcoCnt} 
                    fullName={this.props.fullName} 
                    userEmail={this.props.userEmail}>
                </UserSettings>

                {/* Change password component */}
                <ChangePassword 
                    userIsLogOut={this.userIsLogOut} 
                    email={this.props.userEmail} 
                    SettingsChangePassVisibility={ChangePassSettingsIsVisible} 
                    hideIcoCnt={this.hideIcoCnt}
                >
                </ChangePassword>
            </Content>
        )  
    }     
}

export default SettingsContainer;