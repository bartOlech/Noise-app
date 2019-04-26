import React, {Component} from 'react';
import styled from 'styled-components';
import ReturnToMenu from '../ReturnToMenu';
import '../../cssFonts/fonts.css';
import UserIco from '../../img/user-ico/avatar.png';
import UserBoxComponent from './UserBoxComponent';
import RemoveAccount from './removeAccount';
import ChangePassword from './changePasswordBtn';
import Cookies from 'js-cookie';
import AlertCircleIco from '../../img/user-ico/alert-circle.png'

// react notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Bounce } from 'react-toastify';
import { css } from 'glamor';

// confirm alert
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
    

    // toast template
    const toastTemplate = (notification) => {
        toast(notification, {
            className: css({
                background: '#1A497F'
            }),
            bodyClassName: css({
                textAlign: 'center',
                color: '#F1F1F2'
              }),
            progressClassName: css({
                background: 'rgba(2,2,2,0)'           
              }),
            position: toast.POSITION.TOP_CENTER
            });
    }

    // Header
    const Content = styled.div`
        background-color: #2A3350;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100vw;
        height: 100%;
        display: ${props => props.visibility};
    `
    const ReturnToMenuCnt = styled.div`
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: relative;
    `
    const ReturnToMenuText = styled.h2`
        font-family: 'Varela Round', sans-serif;
        color: #E8ECEF;
        margin: 17px 0 0 -158px;

    `
    const SettingsIcoCnt = styled.div`
        background: url(${UserIco});
        background-repeat: no-repeat;
        background-size: cover;
        width: 50px;
        height: 50px;
        margin-top: 5px;
        position: absolute;
        right: 25px;
        top: 10px;
    `
    const SettingIcoTextCnt = styled.div`
        position: absolute;
        left: 0;
        top: 10px;
        display: flex;
        justify-content: flex-start;
    `

    // Main settings
    const MainSectionSettings = styled.div`
        width: 70vw;
        max-width: 300px;
        min-height: 186px;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        margin-left: -63px;
        transform: translate(30vw, 55%);
        @media (min-width: 543px){
            transform: translate(40vw, 55%);
        }
    `
    const Newsletter = styled.div`
        width: 100%;
        height: 30px;
        max-width: 250px;
        margin-top: -35px;
        margin-bottom: 20px;
        background-color: #394166;
        border-radius: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    // Main settings content
    const MainSectionSettingsText = styled.h3`
        font-family: 'Varela Round', sans-serif;
        color: #E8ECEF;
        margin-left: 20px;
        position: absolute;
    `

    // checkbox
    const MainStgBtnLabel = styled.label`
        position: relative;
        display: inline-block;
        min-width: 112px;
        cursor: pointer;
        font-weight: 500;
        text-align: left;
        margin-left: 75%;
        padding: 16px 0 16px 44px;
        &:before {
            content: "";
            position: absolute;
            margin: 0;
            outline: 0;
            top: 50%;
            -ms-transform: translate(0, -50%);
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            left: 1px;
            width: 36px;
            height: 14px;
            background-color: #9E9E9E;
            border-radius: 8px;
        }
        &:after {
            content: "";
            position: absolute;
            margin: 0;
            outline: 0;
            top: 50%;
            -ms-transform: translate(0, -50%);
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
            left: 0;
            width: 20px;
            height: 20px;
            background-color: #FAFAFA;
            border-radius: 50%;
            box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.14), 0 2px 2px 0 rgba(0, 0, 0, 0.098), 0 1px 5px 0 rgba(0, 0, 0, 0.084);
        }
    `
    const MainStgBtnSpanOn = styled.span`
        display: none;
    `
    const MainStgBtnSpanOff = styled.span`
        display: inline-block;
    ` 
    const MainSectionSettingsBtn = styled.input`
        display: none;
        &:checked {
        + {
            ${MainStgBtnLabel} {
                ${MainStgBtnSpanOn} {
                    display: inline-block;
                }
                ${MainStgBtnSpanOff} {
                    display: none;
                }
                &:before {
                    background-color: #61C394;
                }
                &:after {
                    -ms-transform: translate(80%, -50%);
                    -webkit-transform: translate(80%, -50%);
                    transform: translate(90%, -50%);
                }
            }
        }
        }
    `
    // User form section
    const FormUser = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    
    `
    const InputForm = styled.input`
        width: 110%;
        height: 30px;
        background-color: #CCD5DC;
        border: none;
        border-radius: 7px;
        outline: 0;
        ::placeholder{
            padding-left: 10px;
        }
        
    `
    const LabelForm = styled.label`
         color: #E8ECEF;
         font-family: 'Varela Round', sans-serif;
         margin-bottom: 10px;
         margin-top: 13px;
    `

    // UI for confirm alert
    const ContentUI = styled.div`
        width: 70vw;
        max-width: 400px;
        height: 200px;
        background-color: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    `
    const ContentUIBtnBox = styled.div`
        display: flex;
    `
    const ContentUIBtn = styled.button`
        width: 70px;
        height: 30px;
        background-color: #F15E5E;
        margin: 0 20px 0 20px;
        border: none;
        border-radius: 6px;
        color: #fff;
        transition: .3s;
        cursor: pointer;
        outline: 0;
        &:hover{
            background-color: #FD4444;
        }
        &:first-child{
            background-color: #B7B1CB;
            &:hover{
                background-color: #9895A5;
            }
        }
    `
    const ContentUIAlertCircle = styled.div`
        background: url(${AlertCircleIco});
        background-repeat: no-repeat;
        background-size: cover;
        width: 40px;
        height: 40px;
    `
    const ContentUIText = styled.h3`
        color: #63637C;
        font-family: 'Varela Round', sans-serif;
        margin: 35px 0 35px 0;
        text-align: center;
    `

class UserSettings extends Component {
    constructor() {
        super();
        this.state = { 
            SettingsUserVisibility: false,
            newsletterState: false,
            social: Cookies.get('social'),
            getToken: Cookies.get('auth'),
            loaded: false,
        };
      }

    // functions

    // Newsletter functions
    handleNewsletter = () => {
        this.setState({
            newsletterState: !this.state.newsletterState
        })
    }

    // hide settings component
    hideSettings = () => {
        this.props.hideIcoCnt()
    }

    goToUserSettings = () => {
      console.log('here implement sign in')
    }


    // show ChangePassword component
    showChangePassSection = () => {
        const { social } = this.state;
        if(!this.props.isAuth){
            toastTemplate('Nie jesteś zalogowany!')
        }else if(social === 'facebook' || social === 'google') {
            toastTemplate('Ten rodzaj konta nie posiada hasła!')
        }else {
            this.props.showChangePassSection()
        } 
    }

    // fetch remove user
    removeFromDB = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.props.userEmail
            }),
            mode: 'cors',
            credentials: 'include',
            cache: 'default'
        };
        fetch('/api/removeUser', options).then(res => res.json()).then(json => {
            this.props.authAfterDeleteUser(json.isAuth)
        }).catch(err => console.log(err))
    }

    // remove account function
    removeAccount = () => {
        this.removeFromDB()
        toastTemplate('Konto zostało usunięte')
    }

    // Remove account 
    removeAccountHandle = () => {
        if(!this.props.isAuth){
            toastTemplate('Nie jesteś zalogowany!')
        }else {
            confirmAlert({
                customUI: ({ onClose }) => 
                <ContentUI>
                    <ContentUIAlertCircle></ContentUIAlertCircle>
                    <ContentUIText>Czy na pewno chcesz usunąć konto?</ContentUIText>
                    <ContentUIBtnBox>
                        <ContentUIBtn onClick={() => {
                            onClose();
                            }}>Nie
                        </ContentUIBtn>
                        <ContentUIBtn onClick={() => {
                            onClose();
                            this.removeAccount() 
                        }}>Tak</ContentUIBtn>
                    </ContentUIBtnBox>
                </ContentUI>
              });
        }
    }

    render() {
        const { newsletterState } = this.state;
        return (
            <Content visibility={this.props.SettingsUserVisibility?'inline':'none'}>
            {/* header */}
                <ReturnToMenuCnt>
                    <SettingIcoTextCnt>
                        <ReturnToMenu hideSettings={this.hideSettings}></ReturnToMenu>
                        <ReturnToMenuText>{!this.props.isAuth?'Konto':`${this.props.fullName.substring(0,15)}...`}</ReturnToMenuText>
                    </SettingIcoTextCnt>     
                    <SettingsIcoCnt></SettingsIcoCnt>
                </ReturnToMenuCnt>
                {/* User data settings */}
                <UserBoxComponent goToUserSettings={this.goToUserSettings}></UserBoxComponent>
                <MainSectionSettings>
                    {/* Night mode button */}
                    <Newsletter>
                        <MainSectionSettingsText>Newsletter</MainSectionSettingsText>
                        <MainSectionSettingsBtn defaultChecked={newsletterState} onChange={this.handleNewsletter} type='checkbox' id="checkbox-3" />
                        <MainStgBtnLabel htmlFor='checkbox-3'>
                            <MainStgBtnSpanOn></MainStgBtnSpanOn>
                            <MainStgBtnSpanOff></MainStgBtnSpanOff>
                        </MainStgBtnLabel>
                    </Newsletter>
                    <FormUser>
                        <LabelForm htmlFor='user-email'>Email</LabelForm>
                        <InputForm placeholder={this.props.isAuth?this.props.userEmail:''} id='user-email' type='text'></InputForm>
                        
                        <LabelForm htmlFor='user-pass'>Hasło</LabelForm>
                        <InputForm id='user-pass' type='pasword'></InputForm> 
                        {/* Change password */}
                    <ChangePassword showChangePassSection={this.showChangePassSection}></ChangePassword>      
                    </FormUser>    
                </MainSectionSettings>
                {/* Remove account */}
                <RemoveAccount removeAccountHandle={this.removeAccountHandle}></RemoveAccount>
                <ToastContainer transition={Bounce}/>
            </Content>
        )
    }
    
}
export default UserSettings;