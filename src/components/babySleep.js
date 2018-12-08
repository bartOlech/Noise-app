import React, {Component} from 'react';
import babySleepImg from '../img/babyImg.png';

const HideStyle = {
    display: 'none'
}
const ImgStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: '10%'

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
                <img style={imgIsVisible?ImgStyle:HideStyle} src={babySleepImg}></img>
            </div>
        )
    }
}
export default BabySleep;