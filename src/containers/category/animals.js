import React, { Component } from 'react';
import styled from 'styled-components';
import Wolf from '../../components/sounds/animals/wolf';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class Animals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        //const { isVisible } = this.state;
        return (
           <Content display={this.props.selectedCtg === 'animals' ? 'flex' : 'none'}>
               <Wolf></Wolf>
               <Wolf></Wolf>
               <Wolf></Wolf>
           </Content>
        )
    }
}
export default Animals;