import React from 'react';
import styled from 'styled-components';
import ReturnToMenu from '../../components/returnToMenu';
import '../../cssFonts/fonts.css';
import SettingsIco from '../../img/menu_ico/settings.png';
import ArrowIco from '../../img/user-ico/back-ico.png';
import SelectIcoGreen from '../../img/user-ico/checked.png';
import SelectIcoGrey from '../../img/user-ico/checked-false.png';

function Settings(props) {

    // Header
    const Content = styled.div`
        background-color: #2A3350;
        position: absolute;
        z-index: 5;
        width: 100vw;
        height: 100%;
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
        position: relative;
        top: 0;
        left: 0;
        transform: translate(15%, 55%);
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
    `
    const SelectLanguageBox1 = styled.div`
         width: 140px;
        height: 50px;
        background-color: #394166;
        display: flex;
        align-items: center;
    `
    const SelectLanguageBox2 = styled.div`
        width: 140px;
        height: 50px;
        background-color: #394166;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px; 
        display: flex;
        align-items: center;
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

    const selectLanguage = () => {
        console.log('click')
    }

    return (
        <Content>
            <ReturnToMenuCnt>
                <SettingIcoTextCnt>
                    <ReturnToMenu></ReturnToMenu>
                    <ReturnToMenuText>Ustawienia</ReturnToMenuText>
                </SettingIcoTextCnt>     
                <SettingsIcoCnt></SettingsIcoCnt>
            </ReturnToMenuCnt>
            <MainSectionSettings>
                {/* Night mode button */}
                <NightMode>
                    <MainSectionSettingsText>Tryb Nocny</MainSectionSettingsText>
                    <MainSectionSettingsBtn type='checkbox' id="checkbox-1" />
                        <MainStgBtnLabel htmlFor='checkbox-1'>
                            <MainStgBtnSpanOn></MainStgBtnSpanOn>
                            <MainStgBtnSpanOff></MainStgBtnSpanOff>
                        </MainStgBtnLabel>
                    
                </NightMode>
                <HrLine></HrLine>
                {/* Timer button */}
                <Timer>
                <MainSectionSettingsText>Timer</MainSectionSettingsText>
                    <MainSectionSettingsBtn type='checkbox' id="checkbox-2" />
                        <MainStgBtnLabel htmlFor='checkbox-2'>
                            <MainStgBtnSpanOn></MainStgBtnSpanOn>
                            <MainStgBtnSpanOff></MainStgBtnSpanOff>
                        </MainStgBtnLabel>
                </Timer>
                <HrLine></HrLine>
                {/* Language button */}
                <Language rightRadious='0'> 
                <MainSectionSettingsText>Język:</MainSectionSettingsText>
                <SelectLngCnt onClick={selectLanguage}>
                    <SelectLng>
                        Polski
                    </SelectLng>
                    <LanguageIco></LanguageIco>
                </SelectLngCnt>
                </Language>
                {/* Select language buttons */}
                <HrLine></HrLine>
                <SelectLanguage displayLang='flex'>
                    <SelectLanguageBox1>
                        <SelectLanguageBoxText>Polski</SelectLanguageBoxText>
                        <SelectLanguageIco selectIco={SelectIcoGreen}></SelectLanguageIco>
                    </SelectLanguageBox1>
                    <HrLine></HrLine>
                    <SelectLanguageBox2>
                        <SelectLanguageBoxText>Angielski</SelectLanguageBoxText>
                        <SelectLanguageIco selectIco={SelectIcoGrey}></SelectLanguageIco>
                    </SelectLanguageBox2>
                </SelectLanguage>
            </MainSectionSettings>
            
        </Content>
    )
}
export default Settings;