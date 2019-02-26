import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import Category from './category';
import { zoomIn } from 'react-animations';
import Nature from './category/nature';
import Chill from './category/chill';
import Jobs from './category/jobs';


const fadeInLeftAnimation = keyframes`${zoomIn}`;

const Container = styled.div`
    
`

const Content = styled.div`
       display: ${props => props.displayValue};
       flex-direction: column;
       align-items: center; 
       animation: 700ms forwards ${fadeInLeftAnimation};
    `;
class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCtg: '',
            mainCntIsVisible: false,
        }
        this.child = React.createRef();
    }

    selectCtg = (val) => {
        this.setState({
            selectedCtg: val,
            mainCntIsVisible: true
        })
        this.props.selectCtg(val)
    }

    resaveView = () => {
        this.setState({
            mainCntIsVisible: false,
        })
        this.child.current.resaveViews();
    }

    render() {
        const { mainCntIsVisible, selectedCtg } = this.state;

        return (
            <Container>
                <Category selectCtg={this.selectCtg} ref={this.child}></Category>
                
                <Content displayValue={mainCntIsVisible ? 'flex' : 'none'}>
                    <Nature selectedCtg={selectedCtg}>

                    </Nature>
                    <Chill selectedCtg={selectedCtg}>

                    </Chill>
                    <Jobs selectedCtg={selectedCtg}>

                    </Jobs>
                </Content>
            </Container>
        )
    }
}
export default MainContent;