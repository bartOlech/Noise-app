import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import Loader from 'react-loader-spinner';

const UserCnt = styled.div`
    display: ${props => props.visibility};
    justify-content: center;
    margin-top: 5px;
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
const LoaderSection = styled.div`
    display: ${props => props.visibility};
    justify-content: center;
    margin-top: 5px;
`

class UserData extends Component {
    state = {
        getToken: Cookies.get('auth'),
        fullName: null,
        isAuthenticated: false,
        loaded: false
    }

    // componentDidMount() {
    //     if (this.state.getToken) {
    //         const options = {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 userName: this.state.userName
    //             }),
    //             mode: 'cors',
    //             credentials: 'include',
    //             cache: 'default'
    //         };
    //         fetch('/api/auth', options).then(res => {
    //             res.json().then(json => {
    //                 if (json.fullName) {
    //                     this.setState({
    //                         fullName: json.fullName,
    //                         isAuthenticated: true,
    //                         loaded: true
    //                     })
    //                 }
    //                 this.props.setAuthValue(this.state.isAuthenticated)
    //             })
    //         }).catch(err => { console.log(err) })
    //     }
    // }

    componentDidMount() {
        if (this.state.getToken) {
            const options = {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        id: null
                    }
                }),
                mode: 'cors',
                credentials: 'include',
                cache: 'default'
            };
            fetch('/api/googleVerify', options).then(r => {
                r.json().then(json => {
                    if (json.fullName) {
                        this.setState({
                            fullName: json.fullName,
                            isAuthenticated: true,
                            loaded: true
                        })
                    }
                    if(json.err){
                        this.setState({
                            loaded: true
                        })
                    }
                    this.props.setAuthValue(this.state.isAuthenticated)
                });
            }).catch(err => { console.log(err) })
        }
    }

    isAuth(isAuthenticated, fullName) {
        this.setState({
            isAuthenticated,
            fullName
        })
    }

    userIsLogOut(isAuthenticated) {
        this.setState({
            isAuthenticated
        })
    }

    LoaderElement = () => {
        if (this.state.getToken) {
            return (
                <LoaderSection visibility={this.state.loaded ? 'none' : 'flex'}><Loader type="ThreeDots" color="white" height={40} width={40} />
                </LoaderSection>
            )
        }
    }

    render() {
        const { fullName, isAuthenticated } = this.state;
        console.log(this.state.loaded)
        return (
            <>
                {this.LoaderElement()}
                <UserCnt visibility={isAuthenticated ? 'flex' : 'none'}>
                    <User>Witaj </User><FullName>{fullName}</FullName>
                    {/* here component sign out */}
                </UserCnt>
            </ >
        )
    }
}
export default UserData;