import React, { Component } from 'react';
import styled from 'styled-components';
import CultureExample from '../../components/sounds/culture/cultExam';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class Culture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        //const { isVisible } = this.state;
        return (
           <Content display={this.props.selectedCtg === 'culture' ? 'flex' : 'none'}>
               <CultureExample></CultureExample>
               <CultureExample></CultureExample>
               <CultureExample></CultureExample>
           </Content>
        )
    }
}
export default Culture;