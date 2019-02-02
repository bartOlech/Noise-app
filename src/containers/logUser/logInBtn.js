import React, {Component} from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    width: 100px;
    height: 36px;
    position: absolute;
    right: 11px;
    top: 10px;
    border: 2px solid #eee7e7;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0);
    color: #eee7e7;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: .9em;
    cursor: pointer;
`

class LogInBtn extends Component{

    constructor(props){
        super(props)
        this.state = {
            isClicked: !false
        }
    }

    logInBtn = ()=>{
        this.props.isClickedLogIn(this.state.isClicked);
    }
    logOut = () => {
        console.log('log out')
    }

    render(){
        return(
            <div>
                {this.props.isAuth?<Btn onClick={this.logOut}>Wyloguj</Btn>:<Btn onClick={this.logInBtn}>Zaloguj się</Btn>}
            </div>
        )
    }
}
export default LogInBtn;