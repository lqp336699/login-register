import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userSignupRequest } from '../actions/signUpAction'
import classname from 'classname'


class SignupPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            email: '',
            PasswordConfirmation: '',
            errors: {},
            isLoading: false
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(
            () => {
                this.props.history.push('/');
              },
            (res) => { this.setState({ errors: res.response.data, isLoading: false }) }
        )
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <h1>sign Up</h1>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <div className="form-label-group mb-3">
                        <label>userName</label>
                        <input type="userName" name="userName" className={ classname('form-control',{'is-invalid':errors.userName}) } placeholder="userName" onChange={this.onChange} />
                        { errors.userName && <span className='form-text text-muted'>{ errors.userName }</span>}
                    </div>

                    <div className="form-label-group mb-3">
                        <label>Email address</label>
                        <input type="email" name="email" className={ classname('form-control',{'is-invalid':errors.email}) } placeholder="Email address" onChange={this.onChange} />
                        { errors.email && <span className='form-text text-muted'>{ errors.email }</span>}
                    </div>

                    <div className="form-label-group mb-3">
                        <label>password</label>
                        <input type="password" name="password" className={ classname('form-control',{'is-invalid':errors.password}) } placeholder="password" onChange={this.onChange} />
                        { errors.password && <span className='form-text text-muted'>{ errors.password }</span>}
                    </div>

                    <div className="form-label-group mb-3">
                        <label >PasswordConfirmation</label>
                        <input type="password" name="PasswordConfirmation" className={ classname('form-control',{'is-invalid':errors.PasswordConfirmation}) } placeholder="PasswordConfirmation" onChange={this.onChange} />
                        { errors.PasswordConfirmation && <span className='form-text text-muted'>{ errors.PasswordConfirmation }</span>}
                    </div>

                    <button className="btn btn-lg btn-primary btn-block mt-3" disabled={ this.state.isLoading } type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2017-2019</p>

                </form>
            </div>
        )
    }

}

export default connect(null, { userSignupRequest })(SignupPage);