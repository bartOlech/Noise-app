import React, { Component, lazy, Suspense } from 'react';
import styled from 'styled-components';
// LogIn / SignUp component
const LogInSignUp = lazy(() => import('./logIn_SignUp'))

const Content = styled.div`
    `

class LogContainers extends Component {
    state = {
        clickLogIn: false
    }

    setClickLogInBtn(val) {
        this.setState({
            clickLogIn: val
        })
    }

    closeLogIn = (val) => {
        this.setState({
            clickLogIn: val
        })
    }

    // set the authorization
    isAuth = (isAuthenticated, user, emailFromDB) => {
        this.props.isAuth(isAuthenticated, user, emailFromDB)
    }

    logInPage(){
        if(this.state.clickLogIn){
        return(
            <Suspense fallback={<div></div>}>
            <LogInSignUp isAuth={this.isAuth} closeLogIn={this.closeLogIn}></LogInSignUp>
            </Suspense> 
        )
        }
    }

    render() {
        return(
            <Content>
                {this.logInPage()}
            </Content>
        )
    }
}
export default LogContainers