import React, { Component } from 'react';
//import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import trees from '../../img/sounds_ico/trees.png';
import forest from '../../img/sounds_ico/forest.png';
import Content from './CategoryContentStyle';
import Sound from 'react-sound';
import fire from '../../sounds/fire.mp3'

class MainContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(2px)',
            clickedIco: '',
            clicked: false,
            playSound: false
        }
    }

    resaveViews = () => {
        this.setState({
            clickedBtn: ''
        })
    }

    clickIco = (val) => {

        // Set blur ico
        const { clickedBtn, clicked } = this.state;

        if (val === clickedBtn && !clicked) {
            this.setState({
                clickedIco: val,
                clicked: true,
                playSound: false
            })
        } else {
            this.setState({
                clickedIco: '',
                clicked: false,
                clickedBtn: '',
                playSound: true
            })
        }

        //get a value from clicked button
        this.setState({
            clickedBtn: val
        })
    }

    playSound() {
        const {playSound} = this.state;
        return (
            <Sound
                url={fire}
                playStatus={!playSound ? Sound.status.STOPPED:Sound.status.PLAYING}
                loop={true}
            //volume={volumeVal}
            />
        )
    }

    render() {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        return (
            <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                {/* function that turn on the sound */}
                {this.playSound()}


                <SoundsTemplate playIco={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'off' : 'on'} tittle='forest' blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} icoValue='forest' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'off' : 'on'} tittle='trees' blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} icoValue='trees' clickIco={this.clickIco} ico={forest}></SoundsTemplate>
                <SoundsTemplate playIco={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'off' : 'on'} tittle='forest2' blur={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? blurOff : blurOn} icoValue='forest2' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
            </Content>
        )
    }
}
export default MainContent;