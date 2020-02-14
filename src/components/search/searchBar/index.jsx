import React, { Component } from 'react'
import { StyledSearchContainer, StyledSearchButton } from './styles'
import { StyledSearchLogo, StyledSearchForm, StyledSearchInput } from './styles'
import Logo from '../../../media/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {
    handleChange = (e) => {
        this.props.changeSearch(e.target.value);
    }

    render() {
        return (
            <StyledSearchContainer>
                <StyledSearchLogo src={Logo} alt="logo" />
                <StyledSearchForm>
                    <StyledSearchInput placeholder="Search" value={this.props.search} onChange={this.handleChange}/>
                    <StyledSearchButton as="button"><FontAwesomeIcon icon={faSearch} /></StyledSearchButton>
                </StyledSearchForm>
            </StyledSearchContainer>
        )
    }

}

export default SearchBar;