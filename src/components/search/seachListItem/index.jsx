import React from "react";
import {
  StyledItemBlock,
  StyledItemBlockLight,
  StyledItemBlockDark,
  StyledItemBlockImage,
  StyledItemBlockImageDiv,
  StyledItemBlockContent,
  StyledItemBlockExtra,
  StyledItemBlockContentTitle,
  StyledItemBlockContentParagraph,
  StyledItemBlockContentSkills,
  StyledItemBlockExtraImage,
  StyledItemBlockExtraNumber,
  StyledItemBlockExtraLocation
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import Details from "../../../media/details.png";
import person1 from "../../../media/person1.png";
import person2 from "../../../media/person2.png";
import person3 from "../../../media/person3.png";
import { Link } from "react-router-dom";

const SearchListItem = ({ person }) => {
  const skillsArray = person.skills.split(",");

  let skills = "";

  for (let i = 0; i < 3; i++) {
    skills += skillsArray[i] + ", ";
    if (i === 2 && skillsArray.length > 3) {
      skills += " +" + (skillsArray.length - 3);
    }
  }

  const description = person.description.substring(0, 200) + "...";

  const getRandomImage = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
      case 1:
        return person1;
      case 2:
        return person2;
      case 3:
        return person3;
      default:
        return person1;
    }
  };

  return (
    <Link to={`/developer/${person.id}`}>
      <StyledItemBlock>
        <StyledItemBlockLight>
          <StyledItemBlockImageDiv>
            {/* <StyledItemBlockImage src={person.image} alt="person" /> */}
            <StyledItemBlockImage src={getRandomImage()} alt="person" />
          </StyledItemBlockImageDiv>
          <StyledItemBlockContent>
            <StyledItemBlockContentTitle>
              {person.name}
            </StyledItemBlockContentTitle>
            <StyledItemBlockContentParagraph>
              {description}
            </StyledItemBlockContentParagraph>
          </StyledItemBlockContent>
          <StyledItemBlockExtra>
            <StyledItemBlockExtraImage src={Details} alt="details" />
            <StyledItemBlockExtraNumber>
              {person.price}
            </StyledItemBlockExtraNumber>
          </StyledItemBlockExtra>
        </StyledItemBlockLight>
        <StyledItemBlockDark>
          <StyledItemBlockImageDiv></StyledItemBlockImageDiv>
          <StyledItemBlockContent>
            <FontAwesomeIcon icon={faHashtag} />
            <StyledItemBlockContentSkills>
              {skills}
            </StyledItemBlockContentSkills>
          </StyledItemBlockContent>
          <StyledItemBlockExtra>
            <StyledItemBlockExtraLocation>
              <FontAwesomeIcon icon={faWarehouse} />
              {person.city}, {person.country}
            </StyledItemBlockExtraLocation>
          </StyledItemBlockExtra>
        </StyledItemBlockDark>
      </StyledItemBlock>
    </Link>
  );
};

export default SearchListItem;
