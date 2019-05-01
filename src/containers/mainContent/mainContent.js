import React, { Component } from 'react';
import styled from 'styled-components';
import Nature from '../category/nature';
import Chill from '../category/chill';
import Animals from '../category/animals';
import Places from '../category/places';
import Other from '../category/other';
// import '../../cssFonts/fonts.css';

const Container = styled.div`
    
`

const Content = styled.div`
    display: ${props => props.displayValue};
    flex-direction: column;
    align-items: center; 
    `;


class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state ={
            selectedCtg: '',
            currentSound: null,
            playSound: false,
        }
        this.nature = React.createRef();
        this.animals = React.createRef();
        this.chill = React.createRef();
        this.places = React.createRef();
        this.other = React.createRef();
    }

    // unclick a clicked button
    resaveView() {
        this.nature.current.resaveViews();
        this.animals.current.resaveViews();
        this.chill.current.resaveViews();
        this.places.current.resaveViews();
        this.other.current.resaveViews();
    }

    setSounds = (val, clickedBtn, clicked) => {
        // set a current sound & send function values to soundSlider component
        this.setState({
            buttonValue: val
        }, () => {
            this.props.setSoundValue(this.state.playSound, `https://noizze.pl/noizzeserver/sounds:${val}`)
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
        return (
            <Container>
                <Content displayValue={this.props.mainCntIsVisible?'inline':'none'}>
                    <Nature 
                        isAuth={this.props.isAuth} 
                        setSounds={this.setSounds} 
                        ref={this.nature} 
                        selectedCtg={this.props.selectedCtg}>
                    </Nature>
                    <Chill 
                        isAuth={this.props.isAuth} 
                        setSounds={this.setSounds} 
                        ref={this.chill} 
                        selectedCtg={this.props.selectedCtg}>
                    </Chill>
                    <Animals 
                        isAuth={this.props.isAuth} 
                        setSounds={this.setSounds} 
                        ref={this.animals} 
                        selectedCtg={this.props.selectedCtg}>
                    </Animals>
                    <Places 
                        isAuth={this.props.isAuth} 
                        setSounds={this.setSounds} 
                        ref={this.places} 
                        selectedCtg={this.props.selectedCtg}>
                    </Places>
                    <Other 
                        isAuth={this.props.isAuth} 
                        setSounds={this.setSounds} 
                        ref={this.other} 
                        selectedCtg={this.props.selectedCtg}>
                    </Other>
                </Content>
            </Container>
        )
    }
}
export default MainContent;