import React from 'react';
import jwt from 'jsonwebtoken';

import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import { getUserAction } from '../../../state/actions/getUserAction';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
    logToken: state.authLogin.jwt,
    regToken: state.authRegister.jwt,
    isLoggedIn: state.currentUser.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({
    requestUser: (username) => getUserAction(dispatch, username)
})

class Authorization extends React.Component {

    componentDidMount() {
        const token = this.props.logToken || this.props.regToken;
        window.localStorage.setItem('token', token);
        const username = jwt.verify(token, process.env.REACT_APP_JWT_SECRET || 'jwt_secret_string').username;
        this.props.requestUser(username);
    }

    render() {
        const { isLoggedIn } = this.props;
        return (
            <div 
                style={{
                    position: 'fixed',
                    textAlign: "center"
                }}
            >
                <Loader size='8rem'/>
                { isLoggedIn && <Redirect to='/' />}
            </div>
        )
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization);