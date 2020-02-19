import React from 'react'
import { StyledHeader, StyledPageDiv, StyledOptions } from './styles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <StyledHeader>
            <StyledPageDiv>
                <Link to="/">
                    <FontAwesomeIcon icon={faHashtag} />
                    Find developers
                </Link>
            </StyledPageDiv>
            <StyledOptions>
                <Link to="/Login">
                    Login
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
            </StyledOptions>
        </StyledHeader>
    )
}

export default Header