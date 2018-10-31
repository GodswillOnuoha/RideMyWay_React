import React from 'react';
import { connect } from 'react-redux'
import { auth } from '../actions/auth';

class Register extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        repassword: ""
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value.trim() });
    }

    handleRegister = (event) => {
        event.preventDefault();
        this.props.dispatch(auth.register(this.state));
    }

    render() {
        const { message } = this.props.auth

        return (
            < form className="login signup form" id="signup-form" onSubmit={this.handleRegister} >
                <h1 className="title">User Signup</h1>
                <div className="form-item">
                    <label htmlFor="firstname">Name</label><div className='error'>{message}</div>
                    <input type="text" placeholder="First name" id="firstname"
                        onChange={this.handleChange}
                        pattern=".{2,}" title="2 characters minimum" />
                </div>

                <div className="form-item">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" placeholder="Last name" id="lastname"
                        onChange={this.handleChange}
                        pattern=".{2,}" title="2 characters minimum" />
                </div>
                <div className="form-item">
                    <label htmlFor="username">Username </label>
                    <input type="text" placeholder="Username" id="username" required
                        onChange={this.handleChange}
                        required pattern=".{5,}" title="5 characters minimum" />
                </div>
                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" id="email" required
                        onChange={this.handleChange}
                        required />
                </div>
                <div className="form-item" >
                    <label htmlFor="password"> Password</label>
                    <input type="password" placeholder="Password" id="password" required
                        onChange={this.handleChange}
                        required pattern=".{8,}" title="8 characters minimum" />
                </div>
                <div className="form-item">
                    <label htmlFor="repassword"> Re Password </label>
                    <div className="imputError" id="repasswordErr"></div>
                    <input type="password" placeholder="Re Password" id="repassword" required
                        onChange={this.handleChange}
                        required pattern=".{8,}" title="8 characters minimum" />
                </div>

                <button type="submit" className="submit-btn">Signup</button>
                <p className="login-signup-switch">
                    <label htmlFor='form-switch'>Already a Member ? login</label>
                </p>
            </form >
        )
    }
}

export default connect(state => { return { auth: state.auth } })(Register)
