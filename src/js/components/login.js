import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { auth } from '../actions/auth';

// eslint disable experimentalDecorators
@connect((state) => {
    return {
        auth: state.auth
    }
})
class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value.trim() });
    }

    clearError = (event) => {
        document.getElementById(`${event.target.id}Err`).innerHTML = "";
    }

    handleLogin = (event) => {
        event.preventDefault()
        this.props.dispatch(auth.login(this.state))

    }

    render() {
        const { message } = this.props.auth
        return (
            < form className="login form" id="login-form" onSubmit={this.handleLogin} >
                <h1 className="title">User Login</h1>
                <div className="error">{message}</div>
                <input type="email" name='email' placeholder="Email Address" autoFocus onChange={this.handleChange} required />
                <input type="password" name='password' placeholder="Password"
                    pattern=".{8,}" title="8 characters minimum" onChange={this.handleChange} required />
                <button type="submit" className="submit-btn">Login</button>
                <p className="login-signup-switch"><Link to="/forgot_password">Forgot Password?</Link></p>
                <p className="login-signup-switch"><label htmlFor='form-switch'>Not a member? Signup</label></p>
            </form >
        )
    }
}
export default Login;