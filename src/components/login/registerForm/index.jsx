import React, { Component } from 'react'
import { StyledFormContainer, StyledForm, StyledTitle, StyledLabel, StyledInput, StyledButton, StyledLabelSpan } from '../../styled-components/form'

class RegisterForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        nameError: "",
        emailError: "",
        passwordError: "",
        rePasswordError: ""
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            name: "",
            email: "",
            password: "",
            rePassword: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            rePasswordError: ""
        })
    }

    handleChange = (e) => {
        let errorMessage = "";
        
        switch(e.target.name) {
            case "name":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please enter a name" : "";
                this.setState({nameError: errorMessage});
                break;
            case "email":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please enter an e-mail address" : "";
                this.setState({emailError: errorMessage});
                break;
            case "password":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please enter a password" : "";
                this.setState({passwordError: errorMessage});
                break;
            case "rePassword":
                errorMessage = e.target.value === "" || !e.target.value.replace(/\s/g, '').length ? "Please re-enter your password" : "";
                this.setState({rePasswordError: errorMessage});
                break;
            default:
                break;
        }

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const nameError = this.state.nameError !== "" && <StyledLabelSpan>({this.state.nameError})</StyledLabelSpan>
        const emailError = this.state.emailError !== "" && <StyledLabelSpan>({this.state.emailError})</StyledLabelSpan>
        const passwordError = this.state.passwordError !== "" && <StyledLabelSpan>({this.state.passwordError})</StyledLabelSpan>
        const rePasswordError = this.state.rePasswordError !== "" && <StyledLabelSpan>({this.state.rePasswordError})</StyledLabelSpan>

        return (
            <StyledFormContainer>
                <StyledTitle>Register here</StyledTitle>
                <StyledForm autoComplete="off" onSubmit={this.handleSubmit}>
                    <StyledLabel>Name {nameError}</StyledLabel>
                    <StyledInput type="text" name="name" onChange={this.handleChange} value={this.state.name} autoComplete="new-name" required></StyledInput>
                    <StyledLabel>E-mail {emailError}</StyledLabel>
                    <StyledInput type="text" name="email" onChange={this.handleChange} value={this.state.email} autoComplete="new-email" required></StyledInput>
                    <StyledLabel>Password {passwordError}</StyledLabel>
                    <StyledInput type="password" name="password" onChange={this.handleChange} value={this.state.password} autoComplete="new-password" required></StyledInput>
                    <StyledLabel>Repeat password {rePasswordError}</StyledLabel>
                    <StyledInput type="password" name="rePassword" onChange={this.handleChange} value={this.state.rePassword} autoComplete="new-repassword" required></StyledInput>
                    <StyledButton>Register</StyledButton>
                </StyledForm>
            </StyledFormContainer>
        )
    }
}

export default RegisterForm