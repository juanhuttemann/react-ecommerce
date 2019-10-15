import React from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)

            this.setState({
                email: '',
                password: '',
            })

        } catch(error) {
            console.log(error)
        }

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
                    <FormInput 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        label="Email" 
                        required 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        label="Password" 
                        required 
                    />
                    
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton 
                            onClick={signInWithGoogle} 
                            isGoogleSignIn
                        >
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;