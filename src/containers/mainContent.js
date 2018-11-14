import React, {Component} from 'react';
import styled from 'styled-components';
import '../App.css';
import PlayIcon from '../img/play_icon.png'

const Content = styled.div`
       
    `;

class Header extends Component{
    state = {
        babySoundBtn: 'Dziecko',
        adultSoundBtn: 'Dorosły',
        rainSoundBtn: 'Deszcz',
    }
    
    render(){
        return(
            <Content>
              <ul className='music-btn-list'>
                    <li><div class="round baby">{this.state.babySoundBtn}<div class="round"><div className='btn-ctn'><img src={PlayIcon} alt='play ico'></img></div></div></div>
                    </li>
                    <li><div class="round adult">{this.state.adultSoundBtn}<div class="round"><img src={PlayIcon} alt='play ico'></img></div></div>
                    </li>
                    <li><div class="round rain">{this.state.rainSoundBtn}<div class="round"><img src={PlayIcon} alt='play ico'></img></div></div>
                    </li>
                 </ul> 
            </Content>
        )
    }
}
export default Header;