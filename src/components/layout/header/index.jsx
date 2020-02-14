import React from 'react'
import { StyledHeader, StyledPageDiv, StyledOptions } from './styles'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <StyledHeader>
            <StyledPageDiv>
                <Link to="/Search">
                    <FontAwesomeIcon icon={faHashtag} />
                    Browse Skills
                </Link>
            </StyledPageDiv>
            <StyledOptions>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitterSquare} />
                <Link to="/Login">
                    Login
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
            </StyledOptions>
        </StyledHeader>
    )
}

export default Header