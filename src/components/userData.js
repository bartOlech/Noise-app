import React, {Component} from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';

const UserCnt = styled.div`
    display: ${props => props.visibility};
`
const User = styled.div`
    color: #fff;
    font-weight: 500;
    padding-right: 10px;
`
const FullName = styled.div`
    color: #D2CFDE;
    font-weight: 700;
`

class UserData extends Component{
    state = {
        logged: true,
        getToken: Cookies.get('auth'),
        fullName: null,
        isAuthenticated: false,
        //user: null,
        tokenStatus: ''
    }

     componentDidMount() {
        if(this.state.getToken){
        const options = {
            method: 'POST',
            body: JSON.stringify({
                userName: this.state.userName
            }),
            mode: 'cors',
            credentials: 'include',
            cache: 'default'
        };
        fetch('/api/facebookk', options).then(res => {
        res.json().then(json => {
            this.setState({
                tokenStatus: json.tokenStatus,
                fullName: json.fullName,
                isAuthenticated: true
            })
        })
        }).catch(err =>{console.log(err)})
         }  
  }

  isAuth(isAuthenticated, fullName){
      this.setState({
          isAuthenticated,
          fullName
      })
  }

    render(){
        const {fullName, getToken, isAuthenticated} = this.state;
        console.log(isAuthenticated)
        return(
            <UserCnt visibility={isAuthenticated?'flex':'none'}>
                <User>Witaj </User><FullName>{fullName}</FullName>
            </UserCnt>
        )
    }
}
export default UserData;