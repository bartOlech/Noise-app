import React from 'react';
import styled from 'styled-components';
import VolControlIco from '../img/user-ico/sound-ico.png';

const userIcoStyle = {
    width: '33px',
    height: '33px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
    position: 'absolute',
    right: '10px',
    zIndex: 2
  }
  

const VolControl = styled.div`
  background-image: url(${VolControlIco});
  top: 325px;
`

const Content = styled.div`

`

const handleVolControl = () => {
    console.log('working...')
}

function SoundSlider (props) {
    return(
        <Content>
             <VolControl style={userIcoStyle} onClick={handleVolControl}></VolControl>
        </Content>
    )
}

export default SoundSlider;