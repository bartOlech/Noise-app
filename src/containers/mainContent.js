import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import Category from './category';
import { zoomIn } from 'react-animations';
import Nature from './category/nature';
import Chill from './category/chill';
import Animals from './category/animals';
import Places from './category/places';
import Other from './category/other';

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
            currentSound: null,
            playSound: false,
        }
        this.child = React.createRef();
        this.nature = React.createRef();
        this.animals = React.createRef();
        this.chill = React.createRef();
        this.places = React.createRef();
        this.other = React.createRef();
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
            playSound: false
        })
        this.child.current.resaveViews();
        this.nature.current.resaveViews();
        this.animals.current.resaveViews();
        this.chill.current.resaveViews();
        this.places.current.resaveViews();
        this.other.current.resaveViews();
    }

    setSounds = (val, clickedBtn, clicked) => {
        // set a current sound & send function values to soundSlider component
        this.setState({
            currentSound: `http://localhost:8080/api/sounds:${val}`
        }, () => {
            const { playSound, currentSound } = this.state;
            this.props.setSoundValue(playSound, currentSound)
        })

        this.setState({
            buttonValue: val
        })
        if (val === clickedBtn && !clicked) {
            this.setState({
                playSound: false
            })
        } else {
            this.setState({
                playSound: true
            })
        }
             
        
    }    
    render() {
        const { mainCntIsVisible, selectedCtg } = this.state;
        return (
            <Container>
               

                <Category selectCtg={this.selectCtg} ref={this.child}></Category>

                <Content displayValue={mainCntIsVisible ? 'flex' : 'none'}>
                    <Nature isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.nature} selectedCtg={selectedCtg}>

                    </Nature>
                    <Chill isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.chill} selectedCtg={selectedCtg}>

                    </Chill>
                    <Animals isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.animals} selectedCtg={selectedCtg}>

                    </Animals>
                    <Places isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.places} selectedCtg={selectedCtg}>

                    </Places>
                    <Other isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.other} selectedCtg={selectedCtg}>

                    </Other>
                </Content>
            </Container>
        )
    }
}
export default MainContent;