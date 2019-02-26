import React from 'react';
import styled from 'styled-components';
import clouds from '../../img/clouds.png';

const Content = styled.div`
    height: 100px;
    width: 100%;
    background-image: url(${clouds});
`

function Clouds(){
    return(
        <Content>
            
        </Content>
    )
}
export default Clouds;