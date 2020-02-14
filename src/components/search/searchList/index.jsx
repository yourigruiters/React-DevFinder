import React, { Fragment } from 'react'
import SearchListItem from '../seachListItem/'

const SearchList = ({ people }) => {
    return (
        <Fragment>
            { people.map(person => (<SearchListItem key={person.id} person={person} />))}
        </Fragment>
    )
}

export default SearchList;