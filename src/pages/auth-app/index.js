import React from 'react';
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import * as AuthUtils from '../../utils/auth';

function AuthApp(props) {
    return AuthUtils.isAuthCookiePresent() ?
        <Outlet />
        : <Navigate to="/login" />;
};


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(AuthApp);;