import React, { Component } from 'react';
import styled from 'styled-components';
import OtherExample from '../../components/sounds/other/otherExamp';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class Other extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        //const { isVisible } = this.state;
        return (
           <Content display={this.props.selectedCtg === 'other' ? 'flex' : 'none'}>
               <OtherExample></OtherExample>
               <OtherExample></OtherExample>
               <OtherExample></OtherExample>
           </Content>
        )
    }
}
export default Other;