import React, {Component} from 'react';
import babySleepImg from '../img/sleep.png';
import muteIco from '../img/mute-ico.png';
import soundIco from '../img/sound-ico.png';
import babySound from '../sounds/piano.mp3';

const HideStyle = {
    display: 'none'
}
const ImgStyle = {
    width: '100px',
    height: '100px'

}
const icoMuteStyle = {
    width: '50px',
    height: '50px',
    marginLeft: '7px'
}
const icoSoundStyle = {
    width: '50px',
    height: '50px',
    marginRight: '-8px'
}
const fade = {
    opacity: '0.5'
}

class BabySleep extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgIsVisible: false,
            isVisible: false,
            audioIsOff: true,
            alreadyClickedOn: false,
            alreadyClickedOff: true,
            play: false
        }
    }

    showBabyCnt(){
        this.setState({
            imgIsVisible: true,
            isVisible: true
        })
    }

    hideCnt(){
        this.setState({
            isVisible: false,
            audioIsOff: true
        })
    }
    turnOnSound = ()=>{
        this.audio.play();
        if(this.state.audioIsOff && !this.state.alreadyClickedOn ){
            this.setState({
                audioIsOff: false,
                alreadyClickedOn: true,
                alreadyClickedOff: false
            })
        }
    }
    turnOffSound = ()=>{
        this.audio.pause();
        if(!this.state.audioIsOff && !this.state.alreadyClickedOff ){
            this.setState({
                audioIsOff: true,
                alreadyClickedOff: true,
                alreadyClickedOn: false,
                menuBtnIsCheck: false
            })
        }
    }
    //DODANIE FUNKCJI PAUZUJĄCEJ W GŁÓWNYM ODTWARZACZU(TERAZ TYLKO WYCISZA)
    playSound(){
        return(
            <audio ref={(audio) => { this.audio = audio } } src={babySound} muted={this.state.audioIsOff?true:false} loop/>
        )
    }

    fadeView(){
        this.setState({
            menuBtnIsCheck: !this.state.menuBtnIsCheck
        })
    }

    render(){
        const {imgIsVisible, isVisible, menuBtnIsCheck} = this.state;
        
        return(
            <div style={isVisible?null:HideStyle}>
            <div style={menuBtnIsCheck?fade:null}>
                    {/* audio */}
                {this.playSound()}

                <div className='babySleepCnt'>
                    <h3 className='babySleepText'>Uśpij dziecko</h3>
                    <img style={imgIsVisible?ImgStyle:HideStyle} alt='main ico' src={babySleepImg}></img>
                </div>
                <div className='play-btn-section'>
                <div className="normal-container">
                    <div className="smile-rating-container">
                        <div className="smile-rating-toggle-container">
                            <form className="submit-rating">
                                <input onClick={this.turnOffSound} id="meh"  name="satisfaction" type="radio" /> 
                                <input onClick={this.turnOnSound} id="fun" name="satisfaction" type="radio" /> 
                                <label htmlFor="meh" className="rating-label rating-label-meh"><img style={icoMuteStyle} src={muteIco} alt='sound ico'></img></label>
                                <div className="smile-rating-toggle"></div>
                                <div className="rating-eye rating-eye-left"></div>
                                <div className="rating-eye rating-eye-right"></div>
                                
                                <div className="mouth rating-eye-bad-mouth"></div>
                                
                                <div className="toggle-rating-pill"></div>
                                <label htmlFor="fun" className="rating-label rating-label-fun"><img style={icoSoundStyle} src={soundIco} alt='sound ico'></img></label>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
            </div>
        )
    }
}
export default BabySleep;