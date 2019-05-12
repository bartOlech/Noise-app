import React from 'react';
import styled from 'styled-components';
import FavouritesIco from '../../img/user-ico/heart.png';

const Content = styled.div`
    background-image: url(${FavouritesIco});
    top: 200px;
    width: 33px;
    height: 33px;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    position: absolute;
    right: 9px;
    z-index: 2;
    `

const FavouritesBtn = (props) => {

    const favouritesIcoBtn = () => {
        props.favouritesIcoBtn()
    }
    return(
        <Content onClick={favouritesIcoBtn}>

        </Content>
    )
}

export default FavouritesBtn;