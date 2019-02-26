import React, {Component} from 'react';
import styled from 'styled-components';

const Btn = styled.button`
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
    width: 100px;
    height: 40px;
    position: absolute;
    right: 11px;
    top: 10px;
    border: none;
    border-radius: 50px;
    /* background-color: #045170; */
    color: #eee7e7;
    font-family: 'Varela Round', sans-serif;
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
        this.props.userIsLogOut(false)

        const options = {
            method: 'POST',
            body: JSON.stringify({
                userName: this.state.isClicked
            }),
            mode: 'cors',
            credentials: 'include',
            cache: 'default'
        };
        fetch('/api/socialLogOut', options).then(res => res.json()).catch(err => console.log(err))
    }

    render(){
        const {clickedCategory} = this.props;

        return(
            <div className={clickedCategory === 'entertainment'?'buttonCnt-orange button':'buttonCnt-dark button'}>
                {this.props.isAuth?<Btn onClick={this.logOut}>Wyloguj</Btn>:<Btn  onClick={this.logInBtn}>Zaloguj się</Btn>}
            </div>
        )
    }
}
export default LogInBtn;