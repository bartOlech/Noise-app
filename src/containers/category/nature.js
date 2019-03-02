import React, { Component } from 'react';
//import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import trees from '../../img/sounds_ico/trees.png';
import forest from '../../img/sounds_ico/forest.png';
import Content from './CategoryContentStyle';

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(2px)',
            rotateOff: 'animation: none',
            rotateOn: `rotate .5s cubic-bezier(0.66, 0, 0, 1);`,
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
        const { blurOff, blurOn, clickedBtn, clickedIco, rotateOff, rotateOn } = this.state;
        return (
            <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                <SoundsTemplate playIco={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'off' : 'on'} rotate={clickedBtn !== 'forest' || clickedIco === 'forest' ? rotateOff : rotateOn} tittle='forest' blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} icoValue='forest' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'off' : 'on'} rotate={clickedBtn !== 'trees' || clickedIco === 'trees' ? rotateOff : rotateOn} tittle='trees' blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} icoValue='trees' clickIco={this.clickIco} ico={forest}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'off' : 'on'} rotate={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? rotateOff : rotateOn} tittle='forest2' blur={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? blurOff : blurOn} icoValue='forest2' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
            </Content>
        )
    }
}
export default MainContent;