import React, {Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CloseLogIn from './closeLogIn';
import Loader from 'react-loader-spinner';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FaFacebookSquare } from 'react-icons/fa';
import {config} from '../../config/config';
import Cookies from 'js-cookie';

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
    position: relative;
    @media(max-width: 410px){
        flex-direction: column;
        align-items: center;
    }
`

//form

const FormCnt = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
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

const SignUp = styled.div`
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
const SignUpCnt = styled.div`
    display: ${props => props.displaySignup};
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

const AlertInfo = styled.div`
    width: 280px;
    min-height: 32px;
    background-color: #ffc107;
    text-align: center;
    color: #fff;
    padding-top: 3px;
    margin-top: 10px;
    border-radius: 5px;
`

const EmailExist = styled.div`
    display: flex; 
    justify-content: center;
    display: ${props => props.alert};
`

const MsgCnt = styled.div`
    display: ${props => props.visible};
`
const LoaderCnt = styled.div`
    display: ${props => props.loader};
    justify-content: center;
`


const Testt = styled.div`
    display: ${props => props.visibility};
`

class LogInSignUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginPage: true,
            valEmailSignUp: '',
            valPassSignUp: '',
            valPass2SignUp: '',
            correctSignUp: true,
            inputError: false,
            inputSucces: false,
            inputErrorEmailText: '',
            inputErrorPassText: '',
            emailExist: '',
            loading: false,
            SuccessSignUp: '',
            //Fb Google login
            isAuthenticated: false,
            user: null,
            token: '',
            getToken: Cookies.get('auth')
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
        const {valEmailSignUp, valPassSignUp, valPass2SignUp} = this.state;

        const emailTest = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = emailTest.test(String(valEmailSignUp).toLowerCase());
            if(!emailValidation){
                if(valPassSignUp !== valPass2SignUp ){
                    this.setState({
                        inputErrorText: 'Podany email jest niepoprawny. Hasła różnią się',
                    })
                }else{
                    this.setState({
                        inputErrorText: 'Podany email jest niepoprawny',
    
                    })
                }
            }
            if(valPassSignUp !== valPass2SignUp || valPassSignUp === '' || valPass2SignUp === ''){
                if(!emailValidation){
                    if(valPassSignUp === '' && valPass2SignUp === ''){
                        this.setState({
                            inputErrorText: 'Podany email jest niepoprawny. Wprowadź hasło'
                        })
                    }else{
                        this.setState({
                            inputErrorText: 'Podany email jest niepoprawny. Hasła różnią się'
                        })
                    }
                }else{
                    if(valPassSignUp === '' && valPass2SignUp === ''){
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
            if(valEmailSignUp !== '' && valPassSignUp !== '' && valPass2SignUp !== '' && emailValidation && valPassSignUp === valPass2SignUp){
                this.setState({
                    correctSignUp: true,
                    inputError: false,
                    inputSucces: true,
                })
            }else{
                this.setState({
                    correctSignUp: false,
                    inputError: true,
                    inputSucces: false
                }) 
            } 
    }

    handleSubmitSignUp = (event)=>{
        event.preventDefault();
        this.setState({
            loading: true
        })
        const {correctSignUp, valEmailSignUp, valPassSignUp, valPass2SignUp} = this.state;
    if(correctSignUp){
        fetch('/api/signUp', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                valEmailSignUp,
                valPassSignUp,
                valPass2SignUp
            })
        })
        .then(res =>res.json())
            .then(json => {
            //console.log('json', json);
            this.setState({
                emailExist: json.mailExist,
                SuccessSignUp: json.SuccessSignUp,
                loading: false
            })
            }).catch(err => {

                //????????? here the function is performed if the email has been send

                this.setState({
                    loading: false
                })
        }) 
    }  
}


    inputEmailSignUp = (event)=>{
        event.preventDefault()
        this.setState({
            valEmailSignUp: event.currentTarget.value
        })
    }
    inputPassSignUp = (event)=>{
        event.preventDefault()
        this.setState({
            valPassSignUp: event.currentTarget.value
        })
    }
    inputPass2SignUp = (event)=>{
        event.preventDefault()
        this.setState({
            valPass2SignUp: event.currentTarget.value
        })
    }
    //facebook login
    logout = () => {
        this.setState({isAuthenticated: false, token: '', user: null})
    };

    onFailure = (error) => {
        alert(error);
    };

    auth(){
        this.props.isAuth(this.state.isAuthenticated, this.state.user)
    }

    responseFacebook = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('/api/facebook', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user: user.fullName, token})
                    this.auth();
                }
            });
        }).catch(err =>{console.log(err)})
      }
  
    responseGoogle = (response) => {
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('/api/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user: user.fullName, token})
                    this.auth();
                }
            });
        }).catch(err =>{console.log(err)})
      }

    fbSignUp = () =>{
        //console.log('clicked')
    }

   

render(){
    const {loginPage, inputError, inputErrorText, valEmailSignUp, inputSucces, emailExist, loading, isAuthenticated} = this.state;
    this.logOrReg()
    return( 
        <Content>
        <Testt visibility={isAuthenticated?'inline':'none'}>teessssssssssss</Testt>

            <GlobalStyle></GlobalStyle>
            <LogInCnt displayLogin={loginPage?'none':'inline'}>

                <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
                <Tittle>Zaloguj się przez</Tittle>
                {/* Buttons */}
                
                <FormCnt method='POST'>
                    <FormText htmlFor='emailLogin'>Email</FormText>
                    <FormInput type='text' id='emailLogin' name='emailLogin'></FormInput>
                    <FormText htmlFor='passwordLogin'>Hasło</FormText>
                    <FormInput type='password' id='passwordLogin' name='passwordLogin'></FormInput>
                    <ForgotPass>Nie pamiętasz hasła?</ForgotPass>
                    <SubmitBtn>Zaloguj się</SubmitBtn>
                </FormCnt>
                <SignUp>Nie posiadasz konta?<CreateAccount onClick={this.logRegBtn}>Zarejestruj się</CreateAccount></SignUp>
            </LogInCnt>
            <SignUpCnt displaySignup={loginPage?'inline':'none'}>
                <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
                <Tittle>Zarejestruj się</Tittle>
                <Buttons>
                    <FacebookLogin
                        appId= {config.FACEBOOK_APP_ID} //APP ID NOT CREATED YET
                        onClick={this.fbSignUp}
                        fields= "name, email, picture"
                        callback= {this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        textButton='Facebook'
                        icon={<FaFacebookSquare className='fb-ico' size={30}/>}
                    />
                    <GoogleLogin
                        clientId={config.GOOGLE_CLIENT_ID}
                        buttonText="Google"
                        className="my-google-button-class"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                </Buttons>
                
                {/* input alerts */}
                <MsgCnt visible={loading?'none':'inline'}>
                    <ErrorInfoCnt error={inputError?'flex':'none'}><ErrorInfo>{inputErrorText}</ErrorInfo></ErrorInfoCnt>
                    <SuccessInfoCnt success={inputSucces && emailExist === ''?'flex':'none'}><SuccessInfo>Zarejestrowano pomyślnie</SuccessInfo></SuccessInfoCnt>

                    <EmailExist alert={emailExist !== ''?'flex':'none'}><AlertInfo>{emailExist}</AlertInfo></EmailExist>
                </MsgCnt>
                <LoaderCnt loader={loading?'flex':'none'}>
                <Loader 
                    type="ThreeDots"
                    color="#555555"
                    height="70"	
                    width="100"
                />   
                </LoaderCnt>


                <FormCnt onSubmit={this.handleSubmitSignUp} method='POST'>
                    <FormText htmlFor='emailSignup'>Email</FormText>
                    <FormInput onChange={this.inputEmailSignUp} value={valEmailSignUp} type='text' id='emailSignup' name='emailSignup'></FormInput>
                    <FormText htmlFor='passwordSignup'>Hasło</FormText>
                    <FormInput onChange={this.inputPassSignUp} type='password' id='passwordSignup' name='passwordSignup'></FormInput>
                    <FormText htmlFor='passwordSignup2'>Powtórz hasło</FormText>
                    <FormInput onChange={this.inputPass2SignUp} type='password' id='passwordSignup2' name='passwordSignup2'></FormInput>
                    <SubmitBtn onClick={this.formValid}>Zarejestruj się</SubmitBtn>
                </FormCnt>
                <SignUp>Posiadasz konto?<CreateAccount onClick={this.logRegBtn}>Zaloguj się</CreateAccount></SignUp>
            </SignUpCnt>
        </Content>  
    )
}
}
export default LogInSignUp;