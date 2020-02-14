import React from 'react'
import { StyledFooter, StyledOptionsLeft, StyledOptionsRight } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <StyledFooter>
            <StyledOptionsLeft>
                <Link to="/Terms">Terms</Link>
                <Link to="/Privacy">Privacy</Link>
            </StyledOptionsLeft>
            <StyledOptionsRight>
                <Link to="/About">About Skilldar</Link>
                <Link to="/GetStarted">Get Started</Link>
            </StyledOptionsRight>
        </StyledFooter>
    )
}

export default Footer