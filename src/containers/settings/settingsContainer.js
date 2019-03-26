import React, {Component} from 'react';
import styled from 'styled-components';
import ReturnToMenu from '../../components/returnToMenu';
import '../../cssFonts/fonts.css';
import SettingsIco from '../../img/menu_ico/settings.png';
import ArrowIco from '../../img/user-ico/back-ico.png';
import SelectIcoGreen from '../../img/user-ico/checked.png';
import SelectIcoGrey from '../../img/user-ico/checked-false.png';
import UserBoxComponent from './UserBoxComponent';

    // Header
    const Content = styled.div`
        background-color: #2A3350;
        position: absolute;
        z-index: 5;
        width: 100vw;
        height: 100%;
        display: ${props => props.visibility};
        animation: anime .8s;
        @keyframes anime{
            0%{opacity: 0}
            100%{opacity: 1}
        }
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
        background: url(${SettingsIco});
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
    const NightMode = styled.div`
        width: 100%;
        height: 60px;
        background-color: #394166;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Timer = styled.div`
        width: 100%;
        height: 60px;
        background-color: #394166;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const Language = styled.div`
        width: 100%;
        height: 60px;
        background-color: #394166;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: ${props => props.rightRadious};
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const HrLine = styled.div`
        width: 100%;
        height: 2px;
        background-color: #2A3350;
    `
    // Main settings content
    const MainSectionSettingsText = styled.h3`
        font-family: 'Varela Round', sans-serif;
        font-weight: 600;
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
    // Select language
    const SelectLngCnt = styled.div`
        display: flex;
        flex-direction: row;
        position: absolute;
        right: 10px;
        cursor: pointer;
    `
    const SelectLng = styled.div`
        color: #E8ECEF;
        font-size: 1.2em;
    `
    const LanguageIco = styled.div`
        background: url(${ArrowIco});
        width: 25px;
        height: 25px;
        margin-top: 2px;
        background-repeat: no-repeat;
        background-size: cover;
        transform: rotate(180deg);
    `
    // Select language buttons
    const SelectLanguage = styled.div`
        display: ${props => props.displayLang};
        flex-direction: column;
        position: absolute;
        bottom: -102px;
        right: 0;
        cursor: pointer;
        animation: anime 1s;
        @keyframes anime {
            0%{opacity: 0;}
            100%{opacity: 1;}
        }
    `
    const SelectLanguageBox1 = styled.div`
        width: 140px;
        height: 50px;
        background-color: #394166;
        display: flex;
        align-items: center;
        animation: none;
    `
    const SelectLanguageBox2 = styled.div`
        width: 140px;
        height: 50px;
        background-color: #394166;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px; 
        display: flex;
        align-items: center;
        animation: none;
    `

    const SelectLanguageBoxText = styled.h3`
        font-family: 'Varela Round', sans-serif;
        font-size: 1.1em;
        color: #E8ECEF;
        padding-left: 5px;
    `
    const SelectLanguageIco = styled.div`
        background: url(${props => props.selectIco});
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        right: 10px;
    `

class Settings extends Component {
    constructor() {
        super();
        this.state = { 
            contentIsVisible: true,
            language: 'PL',
            languageIsVisible: false,
            timerState: true,
            nightModeState: false
        };
      }

    // functions

    // language functions
    selectLanguage = () => {
        this.setState({
            languageIsVisible: !this.state.languageIsVisible
        })
    }
    setPlLang = () => {
        this.setState({
            language: 'PL'
        })
    }
    setEnLang = () => {
        this.setState({
            language: 'EN'
        })
    }

    // timer functions
    handleTimer = () => {
        this.setState({
            timerState: !this.state.timerState
        })
    }

    // Night mode functions
    handleNightMode = () => {
        this.setState({
            nightModeState: !this.state.nightModeState
        })
    }

    // hide settings component
    hideSettings = () => {
        this.props.hideSettings()
    }
    // Hide main settings, show user settings
    goToUserSettings = () => {
        this.props.goToUserSettings()
    }



    render() {
        const {language, languageIsVisible, timerState, nightModeState} = this.state;
        return (
            <Content visibility={this.props.isVisible?'inline':'none'}>
            {/* header */}
                <ReturnToMenuCnt>
                    <SettingIcoTextCnt>
                        <ReturnToMenu hideSettings={this.hideSettings}></ReturnToMenu>
                        <ReturnToMenuText>Ustawienia</ReturnToMenuText>
                    </SettingIcoTextCnt>     
                    <SettingsIcoCnt></SettingsIcoCnt>
                </ReturnToMenuCnt>
                {/* User data settings */}
                <UserBoxComponent goToUserSettings={this.goToUserSettings}></UserBoxComponent>
                <MainSectionSettings>
                    {/* Night mode button */}
                    <NightMode>
                        <MainSectionSettingsText>Tryb Nocny</MainSectionSettingsText>
                        <MainSectionSettingsBtn defaultChecked={nightModeState} onChange={this.handleNightMode} type='checkbox' id="checkbox-1" />
                        <MainStgBtnLabel htmlFor='checkbox-1'>
                            <MainStgBtnSpanOn></MainStgBtnSpanOn>
                            <MainStgBtnSpanOff></MainStgBtnSpanOff>
                        </MainStgBtnLabel>
                        
                    </NightMode>
                    <HrLine></HrLine>
                    {/* Timer button */}
                    <Timer>
                    <MainSectionSettingsText>Timer</MainSectionSettingsText>
                        <MainSectionSettingsBtn defaultChecked={timerState} onChange={this.handleTimer} type='checkbox' id="checkbox-2" />
                            <MainStgBtnLabel htmlFor='checkbox-2'>
                                <MainStgBtnSpanOn></MainStgBtnSpanOn>
                                <MainStgBtnSpanOff></MainStgBtnSpanOff>
                            </MainStgBtnLabel>
                    </Timer>
                    <HrLine></HrLine>
                    {/* Language button */}
                    <Language rightRadious={languageIsVisible?'0':'15px'}> 
                    <MainSectionSettingsText>Język:</MainSectionSettingsText>
                    <SelectLngCnt onClick={this.selectLanguage}>
                        <SelectLng>
                            Polski
                        </SelectLng>
                        <LanguageIco></LanguageIco>
                    </SelectLngCnt>
                    </Language>
                    {/* Select language buttons */}
                    <HrLine></HrLine>
                    <SelectLanguage displayLang={languageIsVisible?'flex':'none'}>
                        <SelectLanguageBox1 onClick={this.setPlLang}>
                            <SelectLanguageBoxText>Polski</SelectLanguageBoxText>
                            <SelectLanguageIco selectIco={language === 'PL'?SelectIcoGreen:SelectIcoGrey}></SelectLanguageIco>
                        </SelectLanguageBox1>
                        <HrLine></HrLine>
                        <SelectLanguageBox2 onClick={this.setEnLang}>
                            <SelectLanguageBoxText>Angielski</SelectLanguageBoxText>
                            <SelectLanguageIco selectIco={language === 'EN'?SelectIcoGreen:SelectIcoGrey}></SelectLanguageIco>
                        </SelectLanguageBox2>
                    </SelectLanguage>
                </MainSectionSettings>
            </Content>
        )
    }
    
}
export default Settings;