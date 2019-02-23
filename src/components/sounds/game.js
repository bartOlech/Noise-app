import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    padding-bottom: 30px;
`
const Button = styled.button`
    width: 100px;
    height: 100px;
    background-color: blue;
`

class Game extends Component {
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
                   sdffs
               </Button>
           </Content>
        )
    }
}
export default Game;