import React, { Component } from 'react';
import styled from 'styled-components';
import closeIco from '../../img/close-ico.png';

const CloseBtn = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    opacity: .8;
    &:hover{
        opacity: .9;
    }
`

class CloseLogIn extends Component{
    state = {
            closeBtnIsClicked: false
        }

    closeLogIn = () => {
        this.props.closeLogIn(this.state.closeBtnIsClicked);
    }

    // hide login page if the esc key has been clicked
    escFunction = (event) => {
        if(event.keyCode === 27) {
            this.props.closeLogIn(false);
        }
      }

    componentDidMount(){
        document.addEventListener("keydown", this.escFunction, false);
      }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    render(){
        return(
            <div>
                <CloseBtn onClick={this.closeLogIn} src={closeIco}></CloseBtn>
            </div>
        )
    }
}
export default CloseLogIn;