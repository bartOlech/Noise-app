import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import MainContent from './mainContent';
import Category from './category'
import { fadeIn } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeIn}`;


const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    animation: 700ms forwards ${fadeInLeftAnimation};
    `
const CategoryContent = styled.div`
    display: ${props => props.display};
    `
const HeaderText = styled.h2`
    display: ${props => props.display};
    text-align: center;
    font-family: 'Amatic SC', sans-serif;
    font-weight: 500;
    color: #E8ECEF;
    font-size: 2.7em;
    margin-bottom: -10px;
    margin-top: 5px;
    position: relative;
    `
const HrLine = styled.div`
    width: 83%;
    height: 2px;
    background-color: #E8ECEF;
    position: absolute;
    bottom: 0;
    left: 10%;
    border-radius: 100px;
`
class MainContentContainer extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            selectedCtg: '',
            mainCntIsVisible: false,
            categoryIsVisible: true,
            categoryName: ''
        }
        this.childMainContnt = React.createRef();
    }

    selectCtg = (selectedCtg, categoryName) => {
        this.setState({
            selectedCtg,
            mainCntIsVisible: true,
            categoryIsVisible: false,
            categoryName
        })
        this.props.setBackground(selectedCtg)
    }

    // set and play a sound
    setSoundValue = (playSound, currentSound) => {
        this.props.setSoundValue(playSound, currentSound)
    }

    // hide the main content
    resaveView() {
        this.setState({
            mainCntIsVisible: false,
            categoryIsVisible: true
        })
        this.props.setSoundValue(false, '')
        
        this.childMainContnt.current.resaveView()
    }

    render() {
        const { mainCntIsVisible, categoryIsVisible, selectedCtg } = this.state;
        return (
            <Content>
                <HeaderText display={categoryIsVisible?'none':'inline'}>
                    {this.state.categoryName}
                    <HrLine></HrLine>
                </HeaderText>
                <CategoryContent display={categoryIsVisible?'inline':'none'}>
                    <Category 
                        selectCtg={this.selectCtg} 
                    ></Category>
                </CategoryContent>
                
            <MainContent
                mainCntIsVisible={mainCntIsVisible}
                setSoundValue={this.setSoundValue}
                isAuth={this.props.isAuth}
                selectedCtg={selectedCtg}
                ref={this.childMainContnt}
            ></MainContent>
            </Content>
        )
    }
}
export default MainContentContainer;