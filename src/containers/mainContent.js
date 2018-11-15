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
        isClicked: false
    }

    playBtn = () =>{
        this.setState({
            isClicked: true
        })
        setTimeout(()=>{
            this.setState({
                isClicked: false
            })
        }, 500)
    }
    
    render(){
        return(
            <Content>
              <ul className='music-btn-list'>
                    <li><div onClick={()=>this.playBtn()} class={this.state.isClicked?'round baby clicked-btn':'round baby'}>{this.state.babySoundBtn}<div class="round"><div className='btn-ctn'><img src={PlayIcon} alt='play ico'></img></div></div></div>
                    </li>
                    <li><div onClick={()=>this.playBtn()} class={this.state.isClicked?'round adult clicked-btn':'round adult'} >{this.state.adultSoundBtn}<div class="round"><img src={PlayIcon} alt='play ico'></img></div></div>
                    </li>
                    <li><div onClick={()=>this.playBtn()} class={this.state.isClicked?'round rain clicked-btn':'round rain'}>{this.state.rainSoundBtn}<div class="round"><img src={PlayIcon} alt='play ico'></img></div></div>
                    </li>
                 </ul> 
            </Content>
        )
    }
}
export default Header;