import React from 'react';
import styled from 'styled-components';
import playIco from '../../img/play.png'
import playIconNavy from '../../img/play2.png'



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
        animation: ${props => props.rotate};
       @keyframes spin {
            50%  {
                -webkit-transform: rotateY(90deg); transform:rotateY(90deg);
            }
        }
        @keyframes rotate { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
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

    const clickIco = (e) => {
        props.clickIco(e.currentTarget.value)
    }

    return (

        <Content>
            <Button title={props.tittle} blur={props.blur} value={props.icoValue} onClick={clickIco}>

            </Button>
            <Button2 playIco={props.playIco === 'on'?playIconNavy:playIco} rotate={props.rotate} onClick={clickIco} value={props.icoValue} title={props.tittle}></Button2>
        </Content>
    )
}
export default Template;