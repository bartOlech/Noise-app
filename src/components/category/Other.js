import React, { Component } from 'react';
import SoundsTemplate from '../SoundsTemplate';
import coins from '../../img/sounds_ico/other/coins.png';
import penWritting from '../../img/sounds_ico/other/pen_writting.png';
import popcorn from '../../img/sounds_ico/other/popcorn.png';
import typing from '../../img/sounds_ico/other/typing.png';
import cutting from '../../img/sounds_ico/other/cutting.png';
import walkInSnow from '../../img/sounds_ico/other/walk_in_snow.png';
import Content from './CategoryContentStyle';

class Other extends Component {
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
        if(this.props.selectedCtg === 'other'){
            return(
                <Content display={this.props.selectedCtg === 'other' ? 'flex' : 'none'}>
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'coins' || clickedIco === 'coins' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'coins' || clickedIco === 'coins' ? 'off' : 'on'} 
                    tittle='Monety' 
                    blur={clickedBtn !== 'coins' || clickedIco === 'coins' ? blurOff : blurOn} 
                    icoValue='coins' 
                    clickIco={this.clickIco} 
                    ico={coins}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'pen_writing' || clickedIco === 'pen_writing' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'pen_writing' || clickedIco === 'pen_writing' ? 'off' : 'on'} 
                    tittle='Pisanie książki' 
                    blur={clickedBtn !== 'pen_writing' || clickedIco === 'pen_writing' ? blurOff : blurOn} 
                    icoValue='pen_writing' 
                    clickIco={this.clickIco} 
                    ico={penWritting}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'popcorn' || clickedIco === 'popcorn' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'popcorn' || clickedIco === 'popcorn' ? 'off' : 'on'} 
                    tittle='Popcorn' 
                    blur={clickedBtn !== 'popcorn' || clickedIco === 'popcorn' ? blurOff : blurOn} 
                    icoValue='popcorn' 
                    clickIco={this.clickIco} 
                    ico={popcorn}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'typing' || clickedIco === 'typing' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'typing' || clickedIco === 'typing' ? 'off' : 'on'} 
                    tittle='Pisanie na klawiaturze' 
                    blur={clickedBtn !== 'typing' || clickedIco === 'typing' ? blurOff : blurOn} 
                    icoValue='typing' 
                    clickIco={this.clickIco} 
                    ico={typing}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'vegetables_cutting' || clickedIco === 'vegetables_cutting' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'vegetables_cutting' || clickedIco === 'vegetables_cutting' ? 'off' : 'on'} 
                    tittle='Krojenie warzyw' 
                    blur={clickedBtn !== 'vegetables_cutting' || clickedIco === 'vegetables_cutting' ? blurOff : blurOn} 
                    icoValue='vegetables_cutting' 
                    clickIco={this.clickIco} 
                    ico={cutting}>
                </SoundsTemplate>

                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'walk_in_snow' || clickedIco === 'walk_in_snow' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'walk_in_snow' || clickedIco === 'walk_in_snow' ? 'off' : 'on'} 
                    tittle='Spacer po śniegu' 
                    blur={clickedBtn !== 'walk_in_snow' || clickedIco === 'walk_in_snow' ? blurOff : blurOn} 
                    icoValue='walk_in_snow' 
                    clickIco={this.clickIco} 
                    ico={walkInSnow}>
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
export default Other;