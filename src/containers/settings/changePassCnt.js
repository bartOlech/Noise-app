import React, {Component} from 'react';
import styled from 'styled-components';
import ReturnToMenu from '../ReturnToMenu';
import '../../cssFonts/fonts.css';
import LockIco from '../../img/user-ico/lock.png';
// react notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { css } from 'glamor';
import Cookies from 'js-cookie';

// toast template
const toastTemplate = (notification, delay) => {
    toast(notification, {
        className: css({
            background: '#1A497F'
        }),
        delay,
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
        background: url(${LockIco});
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
    // User form section
    const FormUser = styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-top: 150px;
    `
    const InputForm = styled.input`
        width: 70%;
        max-width: 220px;
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
         margin-bottom: 12px;
         margin-top: 30px;
    `
    const Button = styled.button`
        width: 85%;
        max-width: 220px;
        height: 35px;
        background-color: #E34E46;
        color: #E8ECEF;
        font-family: 'Varela Round', sans-serif;
        margin-top: 80px;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        transition: .4s;
        outline: 0;
        &:hover{
            background-color: #CA231A;
        }
    `
    // hr line
    const Hr = styled.div`
        display: ${props => props.displayHr};
        height: 2px;
        width: 63%;
        max-width: 205px;
        background-color: #F23026; 
        margin-top: -1px;
        opacity: .8;
    `
    // Alert section
    const Alert = styled.div`
        width: 70%;
        max-width: 220px;
        height: 40px;
        background-color: #E34E46;
        border-radius: 7px;
        display: ${props => props.displayAlert}; 
        justify-content: center;
        align-items: center;
    `
    const AlertText = styled.h4`
        color: #DBDFE4;
        font-family: 'Varela Round', sans-serif;
    `

class ChangePassword extends Component {
    constructor() {
        super();
        this.state = { 
            pass1value: '',
            pass2value: '',
            differentPass: false,
            social: Cookies.get('social'),
        };
      }

    // functions

    // set password value 
    handlePass1 = (e) => {
        this.setState({
            pass1value: e.currentTarget.value
        })
    }
    handlePass2 = (e) => {
        this.setState({
            pass2value: e.currentTarget.value
        })
    }

    hideSettings = () => {
        this.props.hideIcoCnt()
    }

    // change password function
    changePass = (e) => {
        e.preventDefault()
        const { pass1value, pass2value, social } = this.state;
        if(social === undefined){
            if(pass1value === pass2value){
                this.setState({
                    differentPass: false
                })

                // log out user
                this.props.userIsLogOut()
                
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        password: pass1value,
                        email: this.props.email
                    }),
                    'mode': 'cors',
                    'cashe': 'default'
                };
                fetch('https://noizze.pl/noizzeserver/changePassword', options).then(res => res.json()).then(json => {
                    toastTemplate('Hasło zostało zmienione', 0)
                }).then(() => {
                    toastTemplate('zaloguj się ponownie', 1000)
                }).catch(err => {console.log(err)})
            }else{
                this.setState({
                    differentPass: true
                })
            }
        }
    }


    render() {
        const { differentPass } = this.state;
        return (
            <Content visibility={this.props.SettingsChangePassVisibility?'inline':'none'}>
            {/* header */}
                <ReturnToMenuCnt>
                    <SettingIcoTextCnt>
                        <ReturnToMenu hideSettings={this.hideSettings}></ReturnToMenu>
                        <ReturnToMenuText>Hasło</ReturnToMenuText>
                    </SettingIcoTextCnt>     
                    <SettingsIcoCnt></SettingsIcoCnt>
                </ReturnToMenuCnt>
                <FormUser>
                        <Alert displayAlert={differentPass?'flex':'none'}><AlertText>Hasła różnią się!</AlertText></Alert>
                        <LabelForm htmlFor='current-pass'>Nowe hasło:</LabelForm>
                        <InputForm onChange={this.handlePass1} placeholder='...' id='current-pass' type='password'></InputForm>
                        <Hr displayHr={differentPass?'inline':'none'}></Hr>
                        <LabelForm htmlFor='new-pass'>Powtórz hasło:</LabelForm>
                        <InputForm onChange={this.handlePass2} placeholder='...' id='new-pass' type='password'></InputForm> 
                        <Hr displayHr={differentPass?'inline':'none'}></Hr>
                        <Button onClick={this.changePass}>Zmień hasło</Button> 
                        <ToastContainer></ToastContainer>
                    </FormUser>
            </Content>
        )
    }
    
}
export default ChangePassword;