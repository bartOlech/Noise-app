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

const FormCnt = styled.form`
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

const LogInCnt = styled.div`
    display: ${props => props.displayLogin};
`
const SingUpCnt = styled.div`
    display: ${props => props.displaySingup};
`
const ErrorInfoCnt = styled.div`
    display: flex; 
    justify-content: center;
    display: ${props => props.error};
`

const ErrorInfo = styled.div`
    width: 280px;
    min-height: 32px;
    background-color: #d9534f;
    text-align: center;
    color: #fff;
    padding-top: 3px;
    margin-top: 10px;
    border-radius: 5px;
`

const SuccessInfoCnt = styled.div`
    display: flex; 
    justify-content: center;
    display: ${props => props.success};
`

const SuccessInfo = styled.div`
    width: 280px;
    min-height: 32px;
    background-color: #5cb85c;
    text-align: center;
    color: #fff;
    padding-top: 3px;
    margin-top: 10px;
    border-radius: 5px;
`

class LogInSingUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            //loginPage: !true,
            loginPage: true,
            valEmailSingUp: '',
            valPassSingUp: '',
            valPass2SingUp: '',
            correctSingUp: true,
            inputError: false,
            inputSucces: false,
            inputErrorEmailText: '',
            inputErrorPassText: '',
        }
    }

    closeLogIn = (val)=>{
        this.props.closeLogIn(val)
    }
    logOrReg = ()=>{

    }
    logRegBtn = ()=>{
        const {loginPage} = this.state;
        this.setState({
            loginPage: !loginPage,
        })
    }

    formValid = ()=>{
        const {valEmailSingUp, valPassSingUp, valPass2SingUp, inputSucces} = this.state;

        const emailTest = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = emailTest.test(String(valEmailSingUp).toLowerCase());

        if(!emailValidation){
            if(valPassSingUp !== valPass2SingUp){
                this.setState({
                    inputErrorText: 'Podany email jest niepoprawny. Hasła różnią się',
                })
            }else{
                this.setState({
                    inputErrorText: 'Podany email jest niepoprawny',

                })
            }
        }
        if(valPassSingUp !== valPass2SingUp || valPassSingUp === '' || valPass2SingUp === ''){
            if(!emailValidation){
                if(valPassSingUp === '' && valPass2SingUp === ''){
                    this.setState({
                        inputErrorText: 'Podany email jest niepoprawny. Wprowadź hasło'
                    })
                }else{
                    this.setState({
                        inputErrorText: 'Podany email jest niepoprawny. Hasła różnią się'
                    })
                }
            }else{
                if(valPassSingUp === '' && valPass2SingUp === ''){
                    this.setState({
                        inputErrorText: 'Wpisz hasło'
                    })
                }else{
                    this.setState({
                        inputErrorText: 'Hasła różnią się'
                    })
                }
            }
        }
        if(valEmailSingUp !== '' && valPassSingUp !== '' && valPass2SingUp !== '' && emailValidation && valPassSingUp === valPass2SingUp){
            this.setState({
                correctSingUp: true,
                inputError: false,
                inputSucces: true
            })
        }else{
            this.setState({
                correctSingUp: false,
                inputError: true,
                inputSucces: false
            }) 
        }
        
    }

    handleSubmitSingUp = (event)=>{
        event.preventDefault();
        const {correctSingUp, valEmailSingUp, valPassSingUp, valPass2SingUp} = this.state;

        
        
        console.log(correctSingUp)
    if(correctSingUp){
        fetch('/api/log', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                valEmailSingUp,
                valPassSingUp,
                valPass2SingUp
            })
        }).then(res => res.json())
            .then(json => {
            console.log('json', json);
            }).catch(err => {
                
        }) 
    }  
}


    inputEmailSingUp = (event)=>{
        event.preventDefault()
        this.setState({
            valEmailSingUp: event.currentTarget.value
        })
    }
    inputPassSingUp = (event)=>{
        event.preventDefault()
        this.setState({
            valPassSingUp: event.currentTarget.value
        })
    }
    inputPass2SingUp = (event)=>{
        event.preventDefault()
        this.setState({
            valPass2SingUp: event.currentTarget.value
        })
    }

render(){
    const {loginPage, inputError, inputErrorText, valEmailSingUp, inputSucces} = this.state;
    this.logOrReg()
    return( 
        <Content>
            <GlobalStyle></GlobalStyle>
            <LogInCnt displayLogin={loginPage?'none':'inline'}>
                <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
                <Tittle>Zaloguj się przez</Tittle>
                <Buttons>
                    <FacebookBtn><Ico src={facebookIco}></Ico><BtnTxt>Facebook</BtnTxt></FacebookBtn>
                    <GoogleBtn><Ico src={googleIco}></Ico><BtnTxt>Google</BtnTxt></GoogleBtn>
                </Buttons>
                
                <FormCnt method='POST'>
                    <FormText htmlFor='emailLogin'>Email</FormText>
                    <FormInput type='text' id='emailLogin' name='emailLogin'></FormInput>
                    <FormText htmlFor='passwordLogin'>Hasło</FormText>
                    <FormInput type='password' id='passwordLogin' name='passwordLogin'></FormInput>
                    <ForgotPass>Nie pamiętasz hasła?</ForgotPass>
                    <SubmitBtn>Zaloguj się</SubmitBtn>
                </FormCnt>
                <SingUp>Nie posiadasz konta?<CreateAccount onClick={this.logRegBtn}>Zarejestruj się</CreateAccount></SingUp>
            </LogInCnt>
            <SingUpCnt displaySingup={loginPage?'inline':'none'}>
                <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
                <Tittle>Zarejestruj się</Tittle>
                <Buttons>
                    <FacebookBtn><Ico src={facebookIco}></Ico><BtnTxt>Facebook</BtnTxt></FacebookBtn>
                    <GoogleBtn><Ico src={googleIco}></Ico><BtnTxt>Google</BtnTxt></GoogleBtn>
                </Buttons>
                {/* input alerts */}
                <ErrorInfoCnt error={inputError?'flex':'none'}><ErrorInfo>{inputErrorText}</ErrorInfo></ErrorInfoCnt>
                <SuccessInfoCnt success={inputSucces?'flex':'none'}><SuccessInfo>Zarejestrowano pomyślnie</SuccessInfo></SuccessInfoCnt>

                <FormCnt onSubmit={this.handleSubmitSingUp} method='POST'>
                    <FormText htmlFor='emailSingup'>Email</FormText>
                    <FormInput onChange={this.inputEmailSingUp} value={valEmailSingUp} type='text' id='emailSingup' name='emailSingup'></FormInput>
                    <FormText htmlFor='passwordSingup'>Hasło</FormText>
                    <FormInput onChange={this.inputPassSingUp} type='password' id='passwordSingup' name='passwordSingup'></FormInput>
                    <FormText htmlFor='passwordSingup2'>Powtórz hasło</FormText>
                    <FormInput onChange={this.inputPass2SingUp} type='password' id='passwordSingup2' name='passwordSingup2'></FormInput>
                    <SubmitBtn onClick={this.formValid}>Zarejestruj się</SubmitBtn>
                </FormCnt>
                <SingUp>Posiadasz konto?<CreateAccount onClick={this.logRegBtn}>Zaloguj się</CreateAccount></SingUp>
            </SingUpCnt>
        </Content>  
    )
}
}
export default LogInSingUp;