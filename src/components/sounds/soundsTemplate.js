import React from 'react';
import styled from 'styled-components';



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
    const Button = styled.button`
    width: 100px;
    height: 100px;
    background-image: url(${props.ico});
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
    position: absolute;
    bottom: 1px;
    right: 1px;
     
    &:active{
        filter: blur(1px);
    }`

    const clickIco = (e) => {
        props.clickIco(e.currentTarget.value)
    }


    return (
        <Content>
            <Button value={props.icoValue} onClick={clickIco}>
               
            </Button>
        </Content>
    )
}
export default Template;