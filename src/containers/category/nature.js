import React, { Component } from 'react';
import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import trees from '../../img/sounds_ico/trees.png';
import forest from '../../img/sounds_ico/forest.png';


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
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(6px)',
            clickedIco: '',
            clicked: false
        }
    }

    clickIco = (val) => {

        // Set blur ico
        const {clickedBtn, clicked} = this.state;
        if (val === clickedBtn && !clicked) {
            this.setState({
                clickedIco: val,
                clicked: true
            })
        } else {
            this.setState({
                clickedIco: '',
                clicked: false
            })
        }

        //get a value from clicked button
        this.setState({
            clickedBtn: val
        })
    }

    render() {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        return (
            <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                <SoundsTemplate blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} icoValue='forest' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
                <SoundsTemplate blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} icoValue='trees' clickIco={this.clickIco} ico={forest}></SoundsTemplate>
                <SoundsTemplate blur={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? blurOff : blurOn} icoValue='forest2' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
            </Content>
        )
    }
}
export default MainContent;