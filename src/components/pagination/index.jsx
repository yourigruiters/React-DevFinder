import React from 'react'
import { StyledPaginationDiv, StyledPaginationOptions, StyledPaginationOption, StyledPaginationText } from './styles';

const Pagination = ({ personPerPage, totalPerson, paginate, currentPage, currentPersons }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPerson / personPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <StyledPaginationDiv>
            <StyledPaginationText>Page</StyledPaginationText>
            <StyledPaginationOptions>
                {/* {pageNumbers.map(number => (
                    <StyledPaginationOption key={number} onClick={() => paginate(number)}>
                        {number}
                    </StyledPaginationOption>
                ))} */}
                {pageNumbers.map(number => {
                    if(currentPage === number) {
                        return <StyledPaginationOption key={number} onClick={() => paginate(number)} currentPage="true">
                            {number}
                        </StyledPaginationOption>
                    } else {
                        return <StyledPaginationOption key={number} onClick={() => paginate(number)}>
                            {number}
                        </StyledPaginationOption>
                    }

                })}
            </StyledPaginationOptions>
        </StyledPaginationDiv>
    )
}

export default Pagination
