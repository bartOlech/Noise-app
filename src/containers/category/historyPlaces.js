import React, { Component } from 'react';
import styled from 'styled-components';
import HistoryExample from '../../components/sounds/historyPlaces/hisExamp';

const Content = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
`

class HistoryPlaces extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        //const { isVisible } = this.state;
        return (
           <Content display={this.props.selectedCtg === 'historyPlaces' ? 'flex' : 'none'}>
               <HistoryExample></HistoryExample>
               <HistoryExample></HistoryExample>
               <HistoryExample></HistoryExample>
           </Content>
        )
    }
}
export default HistoryPlaces;