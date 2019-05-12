import React, { Component } from 'react';
import SoundsTemplate from '../SoundsTemplate';
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
                    displayRate={clickedBtn !== 'amusement_park' || clickedIco === 'amusement_park' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'amusement_park' || clickedIco === 'amusement_park' ? 'off' : 'on'} 
                    tittle='Wesołe miasteczko' 
                    blur={clickedBtn !== 'amusement_park' || clickedIco === 'amusement_park' ? blurOff : blurOn} 
                    icoValue='amusement_park' 
                    clickIco={this.clickIco} 
                    ico={amusementPark}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'casino' || clickedIco === 'casino' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'casino' || clickedIco === 'casino' ? 'off' : 'on'} 
                    tittle='Kasyno' 
                    blur={clickedBtn !== 'casino' || clickedIco === 'casino' ? blurOff : blurOn} 
                    icoValue='casino' 
                    clickIco={this.clickIco} 
                    ico={casino}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'city' || clickedIco === 'city' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'city' || clickedIco === 'city' ? 'off' : 'on'} 
                    tittle='Miasto' 
                    blur={clickedBtn !== 'city' || clickedIco === 'city' ? blurOff : blurOn} 
                    icoValue='city' 
                    clickIco={this.clickIco} 
                    ico={city}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'market' || clickedIco === 'market' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'market' || clickedIco === 'market' ? 'off' : 'on'} 
                    tittle='Miejski targ' 
                    blur={clickedBtn !== 'market' || clickedIco === 'market' ? blurOff : blurOn} 
                    icoValue='market' 
                    clickIco={this.clickIco} 
                    ico={market}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'pub' || clickedIco === 'pub' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'pub' || clickedIco === 'pub' ? 'off' : 'on'} 
                    tittle='Pub' 
                    blur={clickedBtn !== 'pub' || clickedIco === 'pub' ? blurOff : blurOn} 
                    icoValue='pub' 
                    clickIco={this.clickIco} 
                    ico={pub}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'stadium' || clickedIco === 'stadium' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'stadium' || clickedIco === 'stadium' ? 'off' : 'on'} 
                    tittle='Stadion piłkarski' 
                    blur={clickedBtn !== 'stadium' || clickedIco === 'stadium' ? blurOff : blurOn} 
                    icoValue='stadium' 
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