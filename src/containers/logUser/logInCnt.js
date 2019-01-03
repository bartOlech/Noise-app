import React, {Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import facebookIco from '../../img/facebook-ico.png';
import googleIco from '../../img/google-ico.png';
import CloseLogIn from './closeLogIn';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Varela+Round');
`

const Content = styled.div`
    width: 340px;
    min-height: 600px;
    background-color: #f1f6fc;
    position: absolute;
    z-index: 7;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    @media(max-width: 410px){
        width: 310px;
        top: 330px;
    }
`

const Tittle = styled.h2`
    color: #555555;
    font-size: 1.7em;
    font-family: 'Varela Round', sans-serif;
    text-align: center;
    margin-top: 40px;

`
//log in Facebook/Google
const Buttons = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 30px;
    @media(max-width: 410px){
        flex-direction: column;
        align-items: center;
    }
`

const FacebookBtn = styled.button`
    width: 140px;
    height: 50px;
    background-color: #3B5998;
    border: none;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    font-family: 'Trebuchet MS';
    &:hover{
        background-color: rgb(49, 77, 138);
    }
    @media(max-width: 410px){
        flex-direction: column;
        align-items: center;
        margin-right: 0;
        margin-bottom: 15px;
    }
`
const GoogleBtn = styled.button`
    width: 140px;
    height: 50px;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: 'Varela Round', sans-serif;
    &:hover{
        background-color: rgb(242, 244, 247);
    }
`
const BtnTxt = styled.h4`
    font-weight: 700;
`

const Ico = styled.img`
    margin-left: -10px;
    margin-right: 10px;
`
//form

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
const FormText = styled.label`
    font-family: 'Varela Round', sans-serif;
    font-size: 1.1em;
    margin-bottom: 15px;
`
const FormInput = styled.input`
    width: 300px;
    height: 40px;
    background-color: #F7F7F7;
    border-radius: 8px;
    border: none;
    box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
    @media(max-width: 410px){
        width: 200px;
    }
`

const ForgotPass = styled.a`
    color: #555555;
    cursor: pointer;
    text-decoration: underline;
    margin-top: -10px;
`

const SubmitBtn = styled.button`
    width: 300px;
    height: 40px;
    background-color: #333333;
    margin-top: 30px;
    border: none;
    border-radius: 8px;
    color: #fff;
    font-family: 'Varela Round', sans-serif;
    font-size: 1.04em;
    cursor: pointer;
    &:hover{
        background-color: #272727;
    }
    @media(max-width: 410px){
        width: 200px;
    }
`

const SingUp = styled.div`
    color: #555555;
    text-align: center;
    margin-top: 40px;
    @media(max-width: 410px){
        margin-top: 20px;
        margin-bottom: 25px;
    }
`

const CreateAccount = styled.a`
    cursor: pointer;
    text-decoration: underline;
    padding-left: 5px;
`

class LogInCnt extends Component{
    constructor(props){
        super(props)
        this.state = {
            mainText: 'Zaloguj się przez',
            logRegBtn: 'Zaloguj',
            accountInfoText: 'Nie posiadasz konta?',
            accountInfoBtn: 'Załóż teraz',
            forgotPass: 'Nie pamiętasz hasła?',
            logPage: !true
        }
    }

    closeLogIn = (val)=>{
        this.props.closeLogIn(val)
    }
    logOrReg = ()=>{

    }
    logRegBtn = ()=>{
        const {logPage} = this.state;
        this.setState({
            logPage: !logPage
        })
        if(logPage){
            this.setState({
                mainText: 'Zaloguj się przez',
                logRegBtn: 'Zaloguj',
                accountInfoText: 'Nie posiadasz konta?',
                forgotPass: 'Nie pamiętasz hasła?',
                accountInfoBtn: 'Załóż teraz'
            })
        }else{
            this.setState({
                mainText: 'Zarejestruj się',
                logRegBtn: 'Zarejestruj',
                accountInfoText: 'Posiadasz konto?',
                forgotPass: null,
                accountInfoBtn: 'Zaloguj się'
            })
        }
    }

    repeatPass = ()=>{
        return(
            <React.Fragment>
                <FormText htmlFor='password2'>Powtórz hasło</FormText>
                <FormInput type='password' id='password2' name='password2'></FormInput>
            </React.Fragment>
        )
    }

render(){
    const {mainText, logRegBtn,accountInfoText, accountInfoBtn, forgotPass, logPage} = this.state;
    this.logOrReg()
    return( 
        <Content>
            <GlobalStyle></GlobalStyle>
            <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
            <Tittle>{mainText}</Tittle>
            <Buttons>
                <FacebookBtn><Ico src={facebookIco}></Ico><BtnTxt>Facebook</BtnTxt></FacebookBtn>
                <GoogleBtn><Ico src={googleIco}></Ico><BtnTxt>Google</BtnTxt></GoogleBtn>
            </Buttons>
            <Form>
                <FormText htmlFor='username'>Email</FormText>
                <FormInput type='text' id='username' name='username'></FormInput>
                <FormText htmlFor='password'>Hasło</FormText>
                <FormInput type='password' id='password' name='password'></FormInput>
                {logPage?this.repeatPass():null}
                <ForgotPass>{forgotPass}</ForgotPass>
                <SubmitBtn>{logRegBtn}</SubmitBtn>
            </Form>
            <SingUp>{accountInfoText}<CreateAccount onClick={this.logRegBtn}>{accountInfoBtn}</CreateAccount></SingUp>
        </Content>  
    )
}
}
export default LogInCnt;