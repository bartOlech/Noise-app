import React from 'react';
import styled from 'styled-components';
import playIco from '../img/play.png';
import playIconNavy from '../img/play2.png';
import LikeIco from '../img/like.png';

// react notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { Bounce } from 'react-toastify';
import { css } from 'glamor';

const Template = (props) => {

      // toast template
      const toastTemplate = (notification) => {
        toast(notification, {
            className: css({
                background: '#0D54A5'
            }),
            bodyClassName: css({
                textAlign: 'center',
                color: '#F1F1F2'
              }),
            progressClassName: css({
                background: 'rgba(2,2,2,0)'           
              }),
            position: toast.POSITION.TOP_CENTER
            });
    }

    const Content = styled.div`
        padding-bottom: 30px;
        width: 102px;
        height: 102px;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        position: relative;
        margin-top: 35px;
        @media (max-width: 540px) {
            margin-bottom: 25px;
            &:first-child{
                margin-top: 0;
            }
        }
        @media (min-width: 540px) {
            margin-left: 80px;
            margin-right: 80px;
            margin-bottom: 85px;
            
        }
    `
    const Button2 = styled.option`
        width: 50px;
        height: 50px;
        position: absolute;
        border: none;
        background-image: url(${props => props.playIco});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
        left: 29px;
        top: 25px;
        cursor: pointer;
        opacity: .8;
        outline:none;
       
    `
    const Button = styled.button`
        width: 100px;
        height: 100px;
        background: url(${props.ico});
        background-repeat: no-repeat;
        background-size: cover;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 1;
        position: absolute;
        bottom: 1px;
        right: 1px;
        filter: ${props => props.blur};
        outline:none;
        box-shadow: 0 2px 3px #ccc;
    `
    // Rate ico
    const RateIcoSection = styled.div`
        display: ${props => props.displayRateIco};
        opacity: ${props => props.opacityIco};
        width: 33px;
        height: 33px;
        background: url(${LikeIco});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        right: -44px;
        top: 26px;
        cursor: pointer;
        outline: 0;
        transition: 1s;
        &:first-child{
            left: -44px;
            top: 42px;
            transform: rotate(180deg);
        }
        &:active{
            animation: clickAnimation .5s;
        }
        @keyframes clickAnimation {
            0%{width: 33px; height: 33px;}
            50%{width: 36px; height: 36px;}
            100%{width: 33px; height: 33px;}
        }
    `

    const clickIco = (e) => {
        props.clickIco(e.currentTarget.value)
    }

    // Add a sound to favourite
    const ratePositive = () => {
        if(props.isAuth){
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    soundName: props.tittle
                }),
                mode: 'cors',
            };
            fetch('/api/setFavourite', options).then(res => res.json()).then(json => {
  
            }).catch(err => {
                console.log(err)
            })
        }else{
            toastTemplate('Nie jesteś zalogowany!')
        }
    }

    // remove a sound to favourite
    const rateNegatively = () => {
        if(props.isAuth){
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    soundName: props.tittle
                }),
                mode: 'cors',
            };
            fetch('/api/removeFromFavourite', options).then(res => res.json()).then(json => {
    
            }).catch(err => console.log(err))
            
        }else{
            toastTemplate('Nie jesteś zalogowany!')
        }
    }

    return (
    
        <Content>
            <RateIcoSection 
                opacityIco={props.isAuth?'1':'.6'} 
                onClick={rateNegatively} 
                displayRateIco={props.displayRate}>
            </RateIcoSection>
            <Button 
                title={props.tittle} 
                blur={props.blur} 
                value={props.icoValue} 
                onClick={clickIco}>
            </Button> 
            <RateIcoSection 
                opacityIco={props.isAuth?'1':'.6'} 
                onClick={ratePositive} 
                displayRateIco={props.displayRate}> 
            </RateIcoSection>
            <ToastContainer transition={Bounce}/>
            <Button2 
                playIco={props.playIco === 'on' ? playIconNavy : playIco} 
                onClick={clickIco} 
                value={props.icoValue} 
                title={props.tittle}>
            </Button2>
        </Content>
    )
}
export default Template;