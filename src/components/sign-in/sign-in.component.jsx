import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss'

class SignIn extends React.Component {
    state = { 
        email: '',
        password: '',
     }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput name="email" value={this.state.email} onChange={this.handleChange} label="Email" required/>
                    <FormInput name="password" value={this.state.password} onChange={this.handleChange} label="Password" required/>
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignIn;