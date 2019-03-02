import React, { Component } from 'react';
//import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import cityScape from '../../img/sounds_ico/cityscape.png';
import Content from './CategoryContentStyle';

class Jobs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    clickIco = (val) => {
        console.log(val)
    }

    render() {
        //const { isVisible } = this.state;
        return (
            <Content display={this.props.selectedCtg === 'jobs' ? 'flex' : 'none'}>
                <SoundsTemplate icoValue='job' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
                <SoundsTemplate icoValue='job' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
                <SoundsTemplate icoValue='job' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
            </Content>
        )
    }
}
export default Jobs;