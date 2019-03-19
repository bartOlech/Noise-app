import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import VolControlIco from '../img/user-ico/sound-ico.png';
import MuteIco from '../img/mute-ico.png';
import Slider from 'react-input-slider';

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
const sliderStyle = {
    track: {
        backgroundColor: '#D9DEE5',
        position: 'absolute',
        top: '205px',
        left: '7px'
      },
      active: {
        backgroundColor: '#227970'
      },
      thumb: {
        width: 14,
        height: 14
      }
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

function SoundSlider (props) {
    const [sliderY, setSliderY] = useState({ y: 50 });
    const [sliderIsVisible, setSliderVisibility] = useState({ visible: false})

    const {y} = sliderY
    return(
        
        <Content>
            <VolSection style={userIcoStyle}>
                <VolControl image={y === 0 ? MuteIco : VolControlIco} style={userIcoStyle} onClick={() => setSliderVisibility({ visible: !sliderIsVisible.visible})}>
                
                </VolControl>
                <Fragment>
                    <Slider 
                    axis="y" 
                    y={y}
                    onChange={({ y }) => setSliderY(sliderY => ({ ...sliderY, y }))} 
                    styles={sliderStyle}
                    style={sliderIsVisible.visible ? null : hideSlider}
                    />
                </Fragment>
            </VolSection> 
        </Content>
    )
}

export default SoundSlider;