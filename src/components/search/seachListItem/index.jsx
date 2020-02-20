import React from 'react'
import { StyledItemBlock, StyledItemBlockLight, StyledItemBlockDark, StyledItemBlockImage, StyledItemBlockImageDiv, StyledItemBlockContent, StyledItemBlockExtra, StyledItemBlockContentTitle, StyledItemBlockContentParagraph, StyledItemBlockContentSkills, StyledItemBlockExtraImage, StyledItemBlockExtraNumber, StyledItemBlockExtraLocation } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import Details from '../../../media/details.png'
import { Link } from 'react-router-dom';

const SearchListItem = ({ person }) => {

    const skillsArray = person.skills.split(",");

    let skills = "";

    for(let i = 0; i < 3; i++) {
        skills += skillsArray[i]+", ";
        if(i === 2 && skillsArray.length > 3) {
            skills += (" +"+(skillsArray.length - 3));
        }
    }

    const description = (person.description.substring(0,200) + "...");

    return (
        <Link to={`/developer/${person.id}`}>
            <StyledItemBlock>
                <StyledItemBlockLight>
                    <StyledItemBlockImageDiv>
                        <StyledItemBlockImage src={person.image} alt="person" />
                    </StyledItemBlockImageDiv>
                    <StyledItemBlockContent>
                        <StyledItemBlockContentTitle>{person.name}</StyledItemBlockContentTitle>
                        <StyledItemBlockContentParagraph>{description}</StyledItemBlockContentParagraph>
                    </StyledItemBlockContent>
                    <StyledItemBlockExtra>
                        <StyledItemBlockExtraImage src={Details} alt="details" />
                        <StyledItemBlockExtraNumber>{person.price}</StyledItemBlockExtraNumber>
                    </StyledItemBlockExtra>
                </StyledItemBlockLight>
                <StyledItemBlockDark>
                    <StyledItemBlockImageDiv>

                    </StyledItemBlockImageDiv>
                    <StyledItemBlockContent>
                        <FontAwesomeIcon icon={faHashtag} />
                        <StyledItemBlockContentSkills>{skills}</StyledItemBlockContentSkills>
                    </StyledItemBlockContent>
                    <StyledItemBlockExtra>
                        <StyledItemBlockExtraLocation><FontAwesomeIcon icon={faWarehouse} />{person.city}, {person.country}</StyledItemBlockExtraLocation>
                        
                    </StyledItemBlockExtra>
                </StyledItemBlockDark>
            </StyledItemBlock>
        </Link>
    )
}

export default SearchListItem;