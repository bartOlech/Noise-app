import React, { Component } from 'react';
//import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import trees from '../../img/sounds_ico/trees.png';
import forest from '../../img/sounds_ico/forest.png';
import Content from './CategoryContentStyle';

class Other extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(2px)',
            clickedIco: '',
            clicked: false
        }
    }

    resaveViews = () => {
        this.setState({
            clickedBtn: ''
        })
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
            <Content display={this.props.selectedCtg === 'other' ? 'flex' : 'none'}>
                <SoundsTemplate playIco={clickedBtn !== 'other' || clickedIco === 'other' ? 'off' : 'on'} tittle='other' blur={clickedBtn !== 'other' || clickedIco === 'other' ? blurOff : blurOn} icoValue='other' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'off' : 'on'} tittle='trees' blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} icoValue='trees' clickIco={this.clickIco} ico={forest}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'other2' || clickedIco === 'other2' ? 'off' : 'on'} tittle='other2' blur={clickedBtn !== 'other2' || clickedIco === 'other2' ? blurOff : blurOn} icoValue='other2' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
            </Content>
        )
    }
}
export default Other;