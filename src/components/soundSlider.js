import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import VolControlIco from '../img/user-ico/sound-ico.png';
import MuteIco from '../img/mute-ico.png';
import Slider from 'react-input-slider';
import Sound from 'react-sound';

const userIcoStyle = {
    width: '33px',
    height: '33px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    position: 'absolute',
    right: '5px',
    zIndex: 2,
    top: '162px'
  }
const hideSlider = {
    display: 'none'
}
  

const VolControl = styled.div`
  background-image: url(${props => props.image});
  top: 325px;
    `

const Content = styled.div`
`
const VolSection = styled.div`

`

class SoundSlider extends Component {
    state = {
        sliderY: 50,
        sliderIsVisible: false,
        currentSound: '',
        playSound: false
    }

    setVisibilitySlider = () => {
        this.setState({
            sliderIsVisible: !this.state.sliderIsVisible
        })
    }

    sliderHandle = ({y}) => {
        this.setState({
            sliderY: {y}
        })
    }

    // set the sounds to be played
    setSound(currentSound, playSound) {
        this.setState({
            currentSound,
            playSound
        }, () => {
            console.log(this.state.currentSound)
        })
    }

    playSound() {
        const {sliderY} = this.state;
        
        return (
            <div>
                <Sound
                    url={this.state.currentSound || ''}
                    playStatus={!this.state.playSound ? Sound.status.STOPPED : Sound.status.PLAYING}
                    loop={true}
                    volume={sliderY.y === undefined?50:this.state.sliderY.y}
                />
            </div>
        )
    }
   
    render() {
        const {sliderY, sliderIsVisible} = this.state;
        const {y} = sliderY
        return(
            <Content>
                {/* function that turn on the sound */}
                {this.playSound()}

                <VolSection style={userIcoStyle}>
                    <VolControl 
                        image={y === 0 ? MuteIco : VolControlIco} 
                        style={userIcoStyle} 
                        onClick={this.setVisibilitySlider}>
                    </VolControl>
                    <Fragment>
                        <Slider 
                        axis="y" 
                        y={y}
                        onChange={this.sliderHandle} 
                        styles={{
                            track: {
                                backgroundColor: '#D9DEE5',
                                position: 'absolute',
                                top: '205px',
                                left: '7px'
                              },
                              active: {
                                backgroundColor: this.props.sliderSoundActiveColor
                              },
                              thumb: {
                                width: 14,
                                height: 14
                              }
                        }}
                        style={sliderIsVisible ? null : hideSlider}
                        />
                    </Fragment>
                </VolSection> 
            </Content>
        )
    }
}

export default SoundSlider;