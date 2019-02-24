import React, { Component } from 'react';
import styled from 'styled-components';
import Game from '../../components/sounds/game';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class Entertainment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        //const { isVisible } = this.state;
        return (
           <Content display={this.props.selectedCtg === 'entertainment' ? 'flex' : 'none'}>
               <Game></Game>
               <Game></Game>
               <Game></Game>
           </Content>
        )
    }
}
export default Entertainment;