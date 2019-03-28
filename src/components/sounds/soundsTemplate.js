import React from 'react';
import styled from 'styled-components';
import playIco from '../../img/play.png'
import playIconNavy from '../../img/play2.png'
import LikeIco from '../../img/like.png';


function Template(props) {

    const Content = styled.div`
        padding-bottom: 30px;
        margin-bottom: 25px;
        width: 102px;
        height: 102px;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        position: relative;
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
    `

    const clickIco = (e) => {
        props.clickIco(e.currentTarget.value)
    }

    return (

        <Content>
            <RateIcoSection displayRateIco={props.displayRate}></RateIcoSection><Button title={props.tittle} blur={props.blur} value={props.icoValue} onClick={clickIco}>

            </Button> <RateIcoSection displayRateIco={props.displayRate}></RateIcoSection>
            <Button2 playIco={props.playIco === 'on' ? playIconNavy : playIco} onClick={clickIco} value={props.icoValue} title={props.tittle}></Button2>
        </Content>
    )
}
export default Template;