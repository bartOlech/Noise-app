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
            clickedIco: '',
            clicked: false,
        }
    }

    resaveViews = () => {
        this.setState({
            clickedBtn: '',
        })
    }

    clickIco = (val) => {

        // Set blur ico
        const { clickedBtn, clicked } = this.state;

        if (val === clickedBtn && !clicked) {
            this.setState({
                clickedIco: val,
                clicked: true,
            })
        } else {
            this.setState({
                clickedIco: '',
                clicked: false,
            })
        }

        //get a value from clicked button
        this.setState({
            clickedBtn: val
        })

        this.props.setSounds(val, clickedBtn, clicked)

    }



    render() {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        return (
            <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                <SoundsTemplate isAuth={this.props.isAuth} displayRate={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'none' : 'inline'} playIco={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'off' : 'on'} tittle='forest' blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} icoValue='forest' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
                <SoundsTemplate isAuth={this.props.isAuth} displayRate={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'none' : 'inline'} playIco={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'off' : 'on'} tittle='trees' blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} icoValue='trees' clickIco={this.clickIco} ico={forest}></SoundsTemplate>
                <SoundsTemplate isAuth={this.props.isAuth} displayRate={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'none' : 'inline'} playIco={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'off' : 'on'} tittle='forest2' blur={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? blurOff : blurOn} icoValue='forest2' clickIco={this.clickIco} ico={trees}></SoundsTemplate>
            </Content>
        )
    }
}
export default MainContent;