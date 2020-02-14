import React from 'react'
import { StyledContainer } from '../styled-components/form'
import LoginForm from '../login/loginForm'
import RegisterForm from '../login/registerForm'

const Login = () => {
    return (
        <StyledContainer>
          <LoginForm />
          <RegisterForm />
        </StyledContainer>
    )
}

export default Login