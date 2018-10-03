import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { loginUser } from '../actions/user';
import { Redirect } from 'react-router';

// eslint disable experimentalDecorators
@connect((store) => {
    return {
        user: store.users
    }
})
class Login extends React.Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        repassword: ""
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value.trim() });
    }

    // returns true if required imputs are provided
    validateInputs(user) {
        let valid = true;
        if (!user.email) {
            document.getElementById("emailErr").innerHTML = "valid email rquired";
            valid = false;
        }
        if (!user.username) {
            document.getElementById("usernameErr").innerHTML = "username rquired";
            valid = false;
        }
        if (user.password !== user.repassword) {
            document.getElementById('repassword').value = "";
            document.getElementById("repasswordErr").innerHTML = "password mismatch";
            valid = false;
        }
        return valid
    }

    clearError(event) {
        document.getElementById(`${event.target.id}Err`).innerHTML = "";
    }

    handleSubmit(event) {
        if (this.validateInputs(this.state)) {
            this.props.dispatch(loginUser(this.state));
        }
        event.preventDefault();
    }

    render() {
        const { user } = this.props
        if (user.loggedIn) {
            return <Redirect to="/" />
        }

        if (user.error && user.message) {
            document.getElementById(`${user.error}Err`).innerHTML = user.message;
            user.message = null;
        }

        return (
            <div className="main-wrapper">
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/" > <h2>Ride My Way </h2> </Link>
                    </div>
                    <div className="navbar-link">
                        <Link to="/login">Login/Sign Up</Link>
                    </div>
                </nav>

                <div id="content-wrapper">

                    {/* <!-- login section --> */}
                    <section id="login">
                        <input type='checkbox' id='form-switch' />

                        {/* <!-- Login form --> */}
                        <form className="login form" id="login-form" action="" method='post'>
                            <h1 className="title">User Login</h1>
                            <input type="text" placeholder="Email Address" autoFocus required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit" className="submit-btn">Login</button>
                            <p className="login-signup-switch"><Link to="/forgot_password">Forgot Password?</Link></p>
                            <p className="login-signup-switch"><label htmlFor='form-switch'>Not a member? Signup</label></p>
                        </form>

                        {/* <!-- Signup form --> */}
                        <form className="login signup form" id="signup-form" onSubmit={this.handleSubmit}>
                            <h1 className="title">User Signup</h1>
                            <div className="form-item">
                                <label htmlFor="firstname">Name</label>
                                <div className="imputError" id="firstnameErr"></div>
                                <input type="text" placeholder="First name" id="firstname"
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="lastname">Last Name</label>
                                <div className="imputError" id="lastnameErr"></div>
                                <input type="text" placeholder="Last name" id="lastname"
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="username">Username </label>
                                <div className="imputError" id="usernameErr"></div>
                                <input type="text" placeholder="Username" id="username" required
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email">Email</label>
                                <div className="imputError" id="emailErr"></div>
                                <input type="email" placeholder="Email" id="email" required
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <div className="form-item" >
                                <label htmlFor="password"> Password</label>
                                <div className="imputError" id="passwordErr"></div>
                                <input type="password" placeholder="Password" id="password" required
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="repassword"> Re Password </label>
                                <div className="imputError" id="repasswordErr"></div>
                                <input type="password" placeholder="Re Password" id="repassword" required
                                    onChange={this.handleChange.bind(this)}
                                    onFocus={this.clearError.bind(this)} />
                            </div>
                            <button type="submit" onClick={this.handleSubmit.bind(this)} className="submit-btn">Signup</button>
                            <p className="login-signup-switch">
                                <label htmlFor='form-switch'>Already a Member ? login</label>
                            </p>
                        </form>
                    </section>

                </div>
                {/* </div> <!-- end content wrapper --> */}

                <footer>
                    <p>
                        Ride My Way &copy; 2018
                    </p>
                </footer>
                <script type='text/javascript' src='scripts/main.js'></script>
                {/* </div> <!-- end of main wrapper --> */}
            </div>
        )
    }
}
export default Login;