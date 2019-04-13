import React, { Component } from 'react';
import SoundsTemplate from '../../components/soundsTemplate';
import blizzard from '../../img/sounds_ico/nature/blizzard.png';
import forest from '../../img/sounds_ico/nature/forest.png';
import forestAtNight from '../../img/sounds_ico/nature/forest_at_night.png';
import thunderstorm from '../../img/sounds_ico/nature/thunderstorm.png';
import waterfall from '../../img/sounds_ico/nature/waterfall.png';
import waves from '../../img/sounds_ico/nature/waves.png';
import Content from './CategoryContentStyle';

class Nature extends Component {
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
        })

        this.props.setSounds(val, clickedBtn, clicked)

    }

    content = () => {
        const { blurOff, blurOn, clickedBtn, clickedIco } = this.state;
        if(this.props.selectedCtg === 'nature'){
            return(
                <Content display={this.props.selectedCtg === 'nature' ? 'flex' : 'none'}>
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'blizzard' || clickedIco === 'blizzard' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'blizzard' || clickedIco === 'blizzard' ? 'off' : 'on'} 
                    tittle='Śnieżyca' 
                    blur={clickedBtn !== 'blizzard' || clickedIco === 'blizzard' ? blurOff : blurOn} 
                    icoValue='blizzard' 
                    clickIco={this.clickIco} 
                    ico={blizzard}>
                </SoundsTemplate>
    
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest' || clickedIco === 'forest' ? 'off' : 'on'} 
                    tittle='Las o poranku' 
                    blur={clickedBtn !== 'forest' || clickedIco === 'forest' ? blurOff : blurOn} 
                    icoValue='forest' 
                    clickIco={this.clickIco} 
                    ico={forest}>
                </SoundsTemplate>
    
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'forest_at_night' || clickedIco === 'forest_at_night' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'forest_at_night' || clickedIco === 'forest_at_night' ? 'off' : 'on'} 
                    tittle='Las nocą' 
                    blur={clickedBtn !== 'forest_at_night' || clickedIco === 'forest_at_night' ? blurOff : blurOn} 
                    icoValue='forest_at_night' 
                    clickIco={this.clickIco} 
                    ico={forestAtNight}>
                </SoundsTemplate>
    
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'thunderstorm' || clickedIco === 'thunderstorm' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'thunderstorm' || clickedIco === 'thunderstorm' ? 'off' : 'on'} 
                    tittle='Burza z piorunami' 
                    blur={clickedBtn !== 'thunderstorm' || clickedIco === 'thunderstorm' ? blurOff : blurOn} 
                    icoValue='thunderstorm' 
                    clickIco={this.clickIco} 
                    ico={thunderstorm}>
                </SoundsTemplate>
    
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'waterfall' || clickedIco === 'waterfall' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'waterfall' || clickedIco === 'waterfall' ? 'off' : 'on'} 
                    tittle='Wodospad' 
                    blur={clickedBtn !== 'waterfall' || clickedIco === 'waterfall' ? blurOff : blurOn} 
                    icoValue='waterfall' 
                    clickIco={this.clickIco} 
                    ico={waterfall}>
                </SoundsTemplate>
    
                <SoundsTemplate 
                    isAuth={this.props.isAuth} 
                    displayRate={clickedBtn !== 'waves' || clickedIco === 'waves' ? 'none' : 'inline'} 
                    playIco={clickedBtn !== 'waves' || clickedIco === 'waves' ? 'off' : 'on'} 
                    tittle='Fale morskie' 
                    blur={clickedBtn !== 'waves' || clickedIco === 'waves' ? blurOff : blurOn} 
                    icoValue='waves' 
                    clickIco={this.clickIco} 
                    ico={waves}>
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
export default Nature;