import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import '../App.css';
import Category from './category';
import { zoomIn } from 'react-animations';
import Nature from './category/nature';
import Chill from './category/chill';
import Jobs from './category/jobs';
import Animals from './category/animals';
import CulturePlaces from './category/culture';
import HistoryPlaces from './category/historyPlaces';
import Other from './category/other';
// import Sound from 'react-sound';
import SoundData from '../components/soundsData';


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
            currentSound: '',
            playSound: false,
        }
        this.child = React.createRef();
        this.nature = React.createRef();
        this.animals = React.createRef();
        this.chill = React.createRef();
        this.culture = React.createRef();
        this.historyPlaces = React.createRef();
        this.jobs = React.createRef();
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
        this.culture.current.resaveViews();
        this.historyPlaces.current.resaveViews();
        this.jobs.current.resaveViews();
        this.other.current.resaveViews();
    }

    setSounds = (val, clickedBtn, clicked) => {

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
        
       // select current sound
        const filtered = SoundData.filter(item => item.value === val)
        
        // set a current sound & send function values to soundSlider component
        this.setState({
                currentSound: filtered[0].path
            }, () => {
                const { playSound, currentSound } = this.state;
                this.props.setSoundValue(playSound, currentSound)
            })
    }    
    render() {
        const { mainCntIsVisible, selectedCtg } = this.state;
        return (
            <Container>
               

                <Category selectCtg={this.selectCtg} ref={this.child}></Category>

                <Content displayValue={mainCntIsVisible ? 'flex' : 'none'}>
                    <Nature isAuth={this.props.isAuth} setSounds={this.setSounds} ref={this.nature} selectedCtg={selectedCtg}>

                    </Nature>
                    <Chill ref={this.chill} selectedCtg={selectedCtg}>

                    </Chill>
                    <Jobs ref={this.jobs} selectedCtg={selectedCtg}>

                    </Jobs>
                    <Animals ref={this.animals} selectedCtg={selectedCtg}>

                    </Animals>
                    <CulturePlaces ref={this.culture} selectedCtg={selectedCtg}>

                    </CulturePlaces>
                    <HistoryPlaces ref={this.historyPlaces} selectedCtg={selectedCtg}>

                    </HistoryPlaces>
                    <Other ref={this.other} selectedCtg={selectedCtg}>

                    </Other>
                </Content>
            </Container>
        )
    }
}
export default MainContent;