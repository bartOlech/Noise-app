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
        getToken: Cookies.get('auth'),
        fullName: null,
        isAuthenticated: false,
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
            if(json.fullName){
                this.setState({
                fullName: json.fullName,
                isAuthenticated: true
            })
            }   
            this.props.setAuthValue(this.state.isAuthenticated)  
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
        const {fullName, isAuthenticated} = this.state;
        return(
            <UserCnt  visibility={isAuthenticated?'flex':'none'}>
                <User>Witaj </User><FullName>{fullName}</FullName>
                {/* here component sign out */}
            </UserCnt>
        )
    }
}
export default UserData;