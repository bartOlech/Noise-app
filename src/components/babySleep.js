import React, {Component} from 'react';
import babySleepImg from '../img/sleep.png';
import muteIco from '../img/mute-ico.png';
import soundIco from '../img/sound-ico.png';

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

class BabySleep extends Component{
    constructor(props){
        super(props)
        this.state = {
            imgIsVisible: false,
            isVisible: false
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
            isVisible: false
        })
    }

    render(){
        const {imgIsVisible, isVisible} = this.state;
        return(
            <div style={isVisible?null:HideStyle}>
                <div className='babySleepCnt'>
                    <h3 className='babySleepText'>Uśpij dziecko</h3>
                    <img style={imgIsVisible?ImgStyle:HideStyle} src={babySleepImg}></img>
                </div>
                <div className='play-btn-section'>
                <div class="normal-container">
                    <div class="smile-rating-container">
                        <div class="smile-rating-toggle-container">
                            <form class="submit-rating">
                                <input id="meh"  name="satisfaction" type="radio" /> 
                                <input id="fun" name="satisfaction" type="radio" /> 
                                <label for="meh" class="rating-label rating-label-meh"><img style={icoMuteStyle} src={muteIco} alt='sound ico'></img></label>
                                <div class="smile-rating-toggle"></div>
                                <div class="rating-eye rating-eye-left"></div>
                                <div class="rating-eye rating-eye-right"></div>
                                
                                <div class="mouth rating-eye-bad-mouth"></div>
                                
                                <div class="toggle-rating-pill"></div>
                                <label for="fun" class="rating-label rating-label-fun"><img style={icoSoundStyle} src={soundIco} alt='sound ico'></img></label>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default BabySleep;