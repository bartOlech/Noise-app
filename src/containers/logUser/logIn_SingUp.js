import React, {Component} from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import CloseLogIn from './closeLogIn';
import Loader from 'react-loader-spinner';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { FaFacebookSquare } from 'react-icons/fa';

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


class LogInSingUp extends Component{
    constructor(props){
        super(props)
        this.state = {
            loginPage: true,
            valEmailSingUp: '',
            valPassSingUp: '',
            valPass2SingUp: '',
            correctSingUp: true,
            inputError: false,
            inputSucces: false,
            inputErrorEmailText: '',
            inputErrorPassText: '',
            emailExist: '',
            loading: false,
            SuccessSingUp: ''
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
        const {valEmailSingUp, valPassSingUp, valPass2SingUp} = this.state;

        const emailTest = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailValidation = emailTest.test(String(valEmailSingUp).toLowerCase());
            if(!emailValidation){
                if(valPassSingUp !== valPass2SingUp ){
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
                    inputSucces: true,
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
        this.setState({
            loading: true
        })
        const {correctSingUp, valEmailSingUp, valPassSingUp, valPass2SingUp} = this.state;
    if(correctSingUp){
        fetch('/api/singUp', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                valEmailSingUp,
                valPassSingUp,
                valPass2SingUp
            })
        })
        .then(res =>res.json())
            .then(json => {
            //console.log('json', json);
            this.setState({
                emailExist: json.mailExist,
                SuccessSingUp: json.SuccessSingUp,
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

    responseFacebook = (response) => {
        console.log(response);
      }
  
    // responseGoogle = (response) => {
    //     console.log(response);
    //   }

    singFb = () =>{
        return(
            <>
                <FacebookLogin
                    appId="2112647545458936" //APP ID NOT CREATED YET
                    fields="name, email, picture"
                    
                    callback={this.responseFacebook}
                />
            </>
        )
    }

    fbSingUp = () =>{
        console.log('clicked')
    }

render(){
    const {loginPage, inputError, inputErrorText, valEmailSingUp, inputSucces, emailExist, loading} = this.state;
    console.log(emailExist)
    this.logOrReg()
    return( 
        <Content>
            <GlobalStyle></GlobalStyle>
            <LogInCnt displayLogin={loginPage?'none':'inline'}>

                <CloseLogIn closeLogIn={this.closeLogIn}></CloseLogIn>
                <Tittle>Zaloguj się przez</Tittle>
                {/* <Buttons>
                    <FacebookBtn><Ico src={facebookIco}></Ico><BtnTxt>Facebook</BtnTxt></FacebookBtn>
                    <GoogleBtn><Ico src={googleIco}></Ico><BtnTxt>Google</BtnTxt></GoogleBtn>
                </Buttons> */}
                
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
                    <FacebookLogin
                        appId= "2112647545458936" //APP ID NOT CREATED YET
                        onClick={this.fbSingUp}
                        fields= "name, email, picture"
                        callback= {this.responseFacebook}
                        cssClass="my-facebook-button-class"
                        textButton='Facebook'
                        icon={<FaFacebookSquare className='fb-ico' size={30}/>}
                    />
                {/* <GoogleBtn>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                    />
                </GoogleBtn> */}
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