import React, { Fragment, Component } from 'react'
import { StyledFilterMain, StyledFilterTitle, StyledFilterDiv, StyledFilterText, StyledFilterOptions, StyledFilterOption } from './styles'

class SearchFilter extends Component {
    state = {
        dropdown: false
    }

    handleClick = () => {
        this.setState({
            dropdown: !this.state.dropdown
        })
    }

    render() {
        const { locations, changeFilter } = this.props;
        const dropdown = this.state.dropdown;

        return (
            <StyledFilterMain>
                <StyledFilterTitle>Filter locations</StyledFilterTitle>
                <StyledFilterDiv dropdown={dropdown} onClick={this.handleClick}>
                    <StyledFilterText>Location</StyledFilterText>
                </StyledFilterDiv>
                <StyledFilterOptions dropdown={dropdown}>
                    { locations.map(location => (<Fragment key={location}><StyledFilterOption type="radio" name="location" onClick={() => {changeFilter(location)}}/>{location}<br /></Fragment>))}
                </StyledFilterOptions>
            </StyledFilterMain>
        )
    }
}

export default SearchFilter;