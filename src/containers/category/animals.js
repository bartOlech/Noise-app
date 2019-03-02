import React, { Component } from 'react';
//import styled from 'styled-components';
import SoundsTemplate from '../../components/sounds/soundsTemplate';
import cityScape from '../../img/sounds_ico/cityscape.png';
import Content from './CategoryContentStyle';

class Animals extends Component {
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
           <Content display={this.props.selectedCtg === 'animals' ? 'flex' : 'none'}>
                <SoundsTemplate icoValue='wolf' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
                <SoundsTemplate  icoValue='wolf' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
                <SoundsTemplate  icoValue='wolf' clickIco={this.clickIco} ico={cityScape}></SoundsTemplate>
           </Content>
        )
    }
}
export default Animals;