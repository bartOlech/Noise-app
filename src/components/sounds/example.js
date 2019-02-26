import React, { Component } from 'react';
import styled from 'styled-components';
import cityscape from '../../img/sounds_ico/cityscape.png';

const Content = styled.div`
    padding-bottom: 30px;
    margin-bottom: 25px;
    width: 102px;
    height: 102px;
    background-color: #fff;
    border: none;
    border-radius: 50%;
    position: relative;

`
const Button = styled.button`
    width: 100px;
    height: 100px;
    background-image: url(${cityscape});
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    bottom: 1px;
    right: 1px;
`

class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        //const { } = this.state;
        return (
           <Content>
               <Button>
                 
               </Button>
           </Content>
        )
    }
}
export default Example;