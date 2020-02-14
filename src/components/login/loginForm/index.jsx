import React, { Component } from 'react'
import { StyledFormContainer, StyledForm, StyledTitle, StyledLabel, StyledInput, StyledButton, StyledLabelSpan } from '../../styled-components/form'

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
        })
    }

    handleChange = (e) => {
        let errorMessage = "";
        
        switch(e.target.name) {
            case "email":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please enter an e-mail address" : "";
                this.setState({emailError: errorMessage});
                break;
            case "password":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please enter a password" : "";
                this.setState({passwordError: errorMessage});
                break;
            default:
                break;
        }

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const emailError = this.state.emailError !== "" && <StyledLabelSpan>({this.state.emailError})</StyledLabelSpan>
        const passwordError = this.state.passwordError !== "" && <StyledLabelSpan>({this.state.passwordError})</StyledLabelSpan>

        return (
            <StyledFormContainer>
                <StyledTitle>Already Registered? <strong>Login!</strong></StyledTitle>
                <StyledForm autoComplete="off" onSubmit={this.handleSubmit}>
                    <StyledLabel>E-mail {emailError}</StyledLabel>
                    <StyledInput type="text" name="email" onChange={this.handleChange} value={this.state.email} autoComplete="new-email" required></StyledInput>
                    <StyledLabel>Password {passwordError}</StyledLabel>
                    <StyledInput type="password" name="password" onChange={this.handleChange} value={this.state.password} autoComplete="new-password" required></StyledInput>
                    <StyledButton>Login</StyledButton>
                </StyledForm>
            </StyledFormContainer>
        )
    }
}

export default LoginForm