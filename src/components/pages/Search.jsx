import React, { Component, Fragment } from 'react'
import { StyledSearchTop, StyledSearchMain, StyledSearchAside, StyledSearch } from '../styled-components/search'
import SearchDefinition from '../search/searchDefinition'
import SearchBar from '../search/searchBar'
import SearchRelated from '../search/searchRelated'
import SearchFilter from '../search/searchFilter'
import SearchList from '../search/searchList'
import Pagination from '../pagination'

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      filter: "all",
      currentPage: 1,
      personPerPage: 3
    }

  }

  changeSearch = (content) => {
    content = content.toLowerCase();
    this.setState({
      search: content
    })
  }

  changeFilter = (content) => {
    content = content.toLowerCase();
    this.setState({
      filter: content
    })
  }

  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    })
  }

  render() {
    let { people } = this.props; 

    // Locations
    let locations = people.map(person => {return person["country"]})
    locations = [...new Set(locations)]
    locations.unshift("all")

    // Filter 
    if(this.state.filter !== "all") {
      people = people.filter(person => person.country.toLowerCase() === this.state.filter.toLowerCase());
    }

    if(this.state.search !== "") {
      people = people.filter(person => {
        let values = Object.values(person)

        let hasContent = false;
        values.map(value => {
          value = value.toString().toLowerCase();
          if(value.includes(this.state.search)) {
            hasContent = true;
          }
          return false;
        });

        if(hasContent === true) {
          return person
        }
        return false;
      })
    }

    // Pagination
    const indexOfLastPerson = this.state.currentPage * this.state.personPerPage;
    const indexOfFirstPerson = indexOfLastPerson - this.state.personPerPage;
    const currentPersons = people.slice(indexOfFirstPerson, indexOfLastPerson);

    // Related
    let related = ["HTML", "CSS", "React", "Vue", "Angular"];

    return (
        <Fragment>
            <StyledSearchTop>
              <SearchBar search={this.state.search} changeSearch={this.changeSearch} />
              <SearchDefinition />
            </StyledSearchTop>
            <StyledSearchMain>
              <StyledSearchAside desktop>
                <SearchRelated related={related} changeSearch={this.changeSearch} />
              </StyledSearchAside>
              <StyledSearch>
                <SearchList people={currentPersons}/>
              </StyledSearch>
              <StyledSearchAside>
                <SearchFilter locations={locations} changeFilter={this.changeFilter} />
              </StyledSearchAside>
            </StyledSearchMain>
                <Pagination personPerPage={this.state.personPerPage} totalPerson={people.length} paginate={this.paginate} currentPage={this.state.currentPage} />
        </Fragment>
    )
  }
}

export default Search