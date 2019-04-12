import React, { Component } from 'react';
import SoundsTemplate from '../../components/soundsTemplate';
import amusementPark from '../../img/sounds_ico/places/amusement_park.png';
import casino from '../../img/sounds_ico/places/casino.png';
import city from '../../img/sounds_ico/places/city.png';
import market from '../../img/sounds_ico/places/market.png';
import pub from '../../img/sounds_ico/places/pub.png';
import stadium from '../../img/sounds_ico/places/stadium.png';
import Content from './CategoryContentStyle';

class Places extends Component {
    state = {
            isVisible: false,
            clickedBtn: '',
            blurOff: 'blur(0)',
            blurOn: 'blur(2px)',
            clickedIco: '',
            clicked: false,
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
        }, () => {
            this.props.setSounds(val, clickedBtn, clicked)
        })
    }

    content = () => {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        if(this.props.selectedCtg === 'places'){
            return(
                <Content display={this.props.selectedCtg === 'places' ? 'flex' : 'none'}>
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'off' : 'on'} 
                    tittle='forest' 
                    blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} 
                    icoValue='forest' 
                    clickIco={this.clickIco} 
                    ico={amusementPark}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'trees' || clickedIco === 'trees' ? 'off' : 'on'} 
                    tittle='trees' 
                    blur={clickedBtn !== 'trees' || clickedIco === 'trees' ? blurOff : blurOn} 
                    icoValue='trees' 
                    clickIco={this.clickIco} 
                    ico={casino}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? 'off' : 'on'} 
                    tittle='forest2' 
                    blur={clickedBtn !== 'forest2' || clickedIco === 'forest2' ? blurOff : blurOn} 
                    icoValue='forest2' 
                    clickIco={this.clickIco} 
                    ico={city}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest3' || clickedIco === 'forest3' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest3' || clickedIco === 'forest3' ? 'off' : 'on'} 
                    tittle='forest3' 
                    blur={clickedBtn !== 'forest3' || clickedIco === 'forest3' ? blurOff : blurOn} 
                    icoValue='forest3' 
                    clickIco={this.clickIco} 
                    ico={market}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest4' || clickedIco === 'forest4' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest4' || clickedIco === 'forest4' ? 'off' : 'on'} 
                    tittle='forest4' 
                    blur={clickedBtn !== 'forest4' || clickedIco === 'forest4' ? blurOff : blurOn} 
                    icoValue='forest4' 
                    clickIco={this.clickIco} 
                    ico={pub}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest5' || clickedIco === 'forest5' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest5' || clickedIco === 'forest5' ? 'off' : 'on'} 
                    tittle='forest5' 
                    blur={clickedBtn !== 'forest5' || clickedIco === 'forest5' ? blurOff : blurOn} 
                    icoValue='forest5' 
                    clickIco={this.clickIco} 
                    ico={stadium}>
                </SoundsTemplate>
            </Content>
            )
        }
        
    }

    render() {
        return (
            <div>
                {this.content()}
            </div>
        )
    }
}
export default Places;