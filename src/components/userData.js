import React, { Component } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import Loader from 'react-loader-spinner';
import '../cssFonts/fonts.css'

    const UserCnt = styled.div`
        display: ${props => props.visibility};
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 5px;
    `
    const User = styled.div`
        color: #fff;
        font-weight: 500;
        padding-right: 10px;
    `
    const FullName = styled.div`
        color: #ECECEC;
        font-weight: 700;
        padding-right: 10px;
        font-family: 'Varela Round', sans-serif;
    `
    const LoaderSection = styled.div`
        display: ${props => props.visibility};
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 0;
        margin-right: 60px;
    `

class UserData extends Component {
    state = {
        getToken: Cookies.get('auth'),
        social: Cookies.get('social'),
        loaded: false    
    }

    componentDidMount() {
        if (this.state.getToken) {
            if (this.state.social === 'google') {
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
                fetch('https://noizze.pl/noizzeserver/googleVerify', options).then(r => {
                    r.json().then(json => {
                        if (json.fullName) {
                            this.setState({
                                loaded: true,
                            })
                        }
                        if (json.err) {
                            this.setState({
                                loaded: true
                            })
                        }
                        this.props.setAuthValue(true, json.fullName, json.email)
                    });
                }).catch(err => { console.log(err) })
            } else if (this.state.social === 'facebook') {
                const options = {
                    method: 'POST',
                    body: JSON.stringify({
                        userName: this.state.userName
                    }),
                    mode: 'cors',
                    credentials: 'include',
                    cache: 'default'
                };
                fetch('https://noizze.pl/noizzeserver/auth', options).then(res => {
                    res.json().then(json => {
                        if (json.fullName) {
                            this.setState({
                                loaded: true,
                            })
                        }
                        if (json.err) {
                            this.setState({
                                loaded: true
                            })
                        }
                        this.props.setAuthValue(true, json.fullName, json.email)
                    })
                }).catch(err => { console.log(err) })
            }
        }
    }

    LoaderElement = () => {
        if (this.state.getToken) {
            return (
                <LoaderSection 
                    visibility={this.state.loaded ? 'none' : 'flex'}>
                    <Loader 
                    type="ThreeDots" 
                    color="white" 
                    height={40} 
                    width={40} />
                </LoaderSection>
            )
        }
    }

    render() {
        return (
            <>
                {this.LoaderElement()}
                <UserCnt visibility={this.props.isAuth ? 'flex' : 'none'}>
                    <User></User><FullName>{this.props.fullName}</FullName>
                </UserCnt>
            </ >
        )
    }
}
export default UserData;