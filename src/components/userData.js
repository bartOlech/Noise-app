import React, {Component} from 'react';
import styled from 'styled-components';

const UserCnt = styled.div`
    display: ${props => props.visibility};
`
class UserData extends Component{
    state = {
        logged: true
    }
    render(){
        const {logged} = this.state;
        return(
            <UserCnt visibility={logged?'inline':'none'}>
                value
            </UserCnt>
        )
    }
}
export default UserData;