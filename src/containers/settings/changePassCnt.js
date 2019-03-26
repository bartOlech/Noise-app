import React, {Component} from 'react';
import styled from 'styled-components';
import ReturnToMenu from '../../components/returnToMenu';
import '../../cssFonts/fonts.css';
import LockIco from '../../img/user-ico/lock.png';

    // Header
    const Content = styled.div`
        background-color: #2A3350;
        position: absolute;
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
        &:hover{
            background-color: #CA231A;
        }
    `

class ChangePassword extends Component {
    constructor() {
        super();
        this.state = { 
           
        };
      }

    // functions

    // hide settings component
    hideSettings = () => {
        this.props.hideSettings()
    }


    render() {
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
                        <LabelForm htmlFor='current-pass'>Obecne hasło:</LabelForm>
                        <InputForm placeholder='...' id='current-pass' type='password'></InputForm>
                        
                        <LabelForm htmlFor='new-pass'>Nowe hasło:</LabelForm>
                        <InputForm placeholder='...' id='new-pass' type='pasword'></InputForm>   
                        <Button>Zmień hasło</Button>   
                    </FormUser>
            </Content>
        )
    }
    
}
export default ChangePassword;