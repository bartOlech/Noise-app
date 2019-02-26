import React, { Component } from 'react';
import styled from 'styled-components';
import Forest from '../../components/sounds/forest';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {

        return (
            <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                <Forest></Forest>
                <Forest></Forest>
                <Forest></Forest>
            </Content>
        )
    }
}
export default MainContent;