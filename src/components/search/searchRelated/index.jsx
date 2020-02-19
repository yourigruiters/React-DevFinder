import React, { Fragment } from 'react'
import { StyledRelatedTitle, StyledRelatedList, StyledRelatedListItem } from './styles'

const SearchRelated = ({ related, changeSearch }) => {

    return (
        <Fragment>
            <StyledRelatedTitle>Related #Tags</StyledRelatedTitle>
            <StyledRelatedList>
                { related.map(relatedItem => (<StyledRelatedListItem key={relatedItem} onClick={() => {changeSearch(relatedItem)}}>{relatedItem}</StyledRelatedListItem>))}
            </StyledRelatedList>
        </Fragment>
    )
}

export default SearchRelated;