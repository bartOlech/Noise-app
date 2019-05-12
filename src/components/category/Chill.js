import React, { Component } from 'react';
import SoundsTemplate from '../SoundsTemplate';
import birds from '../../img/sounds_ico/chill/birds.png';
import purring from '../../img/sounds_ico/chill/purring.png';
import fire from '../../img/sounds_ico/chill/fire.png';
import rain from '../../img/sounds_ico/chill/rain.png';
import river from '../../img/sounds_ico/chill/river.png';
import tap from '../../img/sounds_ico/chill/tap.png';
import Content from './CategoryContentStyle';

class Chill extends Component {
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
        if(this.props.selectedCtg === 'chill'){
            return(
                <Content display={this.props.selectedCtg === 'chill' ? 'flex' : 'none'}>
                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'birds' || clickedIco === 'birds' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'birds' || clickedIco === 'birds' ? 'off' : 'on'} 
                        tittle='Ptaki o poranku' 
                        blur={clickedBtn !== 'birds' || clickedIco === 'birds' ? blurOff : blurOn} 
                        icoValue='birds' 
                        clickIco={this.clickIco} 
                        ico={birds}>
                    </SoundsTemplate>

                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'cat_purring' || clickedIco === 'cat_purring' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'cat_purring' || clickedIco === 'cat_purring' ? 'off' : 'on'} 
                        tittle='Mruczenie kota' 
                        blur={clickedBtn !== 'cat_purring' || clickedIco === 'cat_purring' ? blurOff : blurOn} 
                        icoValue='cat_purring' 
                        clickIco={this.clickIco} 
                        ico={purring}>
                    </SoundsTemplate>

                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'fire' || clickedIco === 'fire' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'fire' || clickedIco === 'fire' ? 'off' : 'on'} 
                        tittle='Ognisko' 
                        blur={clickedBtn !== 'fire' || clickedIco === 'fire' ? blurOff : blurOn} 
                        icoValue='fire' 
                        clickIco={this.clickIco} 
                        ico={fire}>
                    </SoundsTemplate>

                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'gutter' || clickedIco === 'gutter' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'gutter' || clickedIco === 'gutter' ? 'off' : 'on'} 
                        tittle='Miejska rynna' 
                        blur={clickedBtn !== 'gutter' || clickedIco === 'gutter' ? blurOff : blurOn} 
                        icoValue='gutter' 
                        clickIco={this.clickIco} 
                        ico={rain}>
                    </SoundsTemplate>

                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'river' || clickedIco === 'river' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'river' || clickedIco === 'river' ? 'off' : 'on'} 
                        tittle='Rzeka' 
                        blur={clickedBtn !== 'river' || clickedIco === 'river' ? blurOff : blurOn} 
                        icoValue='river' 
                        clickIco={this.clickIco} 
                        ico={river}>
                    </SoundsTemplate>

                    <SoundsTemplate 
                        isAuth={this.props.isAuth} 
                        displayRate={clickedBtn !== 'water_faucet' || clickedIco === 'water_faucet' ? 'none' : 'inline'} 
                        playIco={clickedBtn !== 'water_faucet' || clickedIco === 'water_faucet' ? 'off' : 'on'} 
                        tittle='Woda z kranu' 
                        blur={clickedBtn !== 'water_faucet' || clickedIco === 'water_faucet' ? blurOff : blurOn} 
                        icoValue='water_faucet' 
                        clickIco={this.clickIco} 
                        ico={tap}>
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
export default Chill;