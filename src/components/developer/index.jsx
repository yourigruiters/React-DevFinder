import React from 'react'
import { StyledItemBlock, StyledItemBlockLight, StyledItemBlockContent, StyledItemBlockContentTitle, StyledItemBlockContentParagraph, StyledItemLoginDiv, StyledItemLogin, StyledItemContainer, StyledItemBlockImage, StyledItemBlockImageDiv } from './styles';
import { Link } from 'react-router-dom';

const Developer = ({people, match }) => {
    const developer = people.find(peep => peep.id === match.params.id);

    return (
        <StyledItemContainer>
            <StyledItemBlock>
                <StyledItemBlockLight>
                    <StyledItemBlockImageDiv>
                        <StyledItemBlockImage src={developer.image} alt="person" />
                    </StyledItemBlockImageDiv>
                    <StyledItemBlockContent>
                        <StyledItemBlockContentTitle>{developer.name}</StyledItemBlockContentTitle>
                        <StyledItemBlockContentParagraph>{developer.description}</StyledItemBlockContentParagraph>
                    </StyledItemBlockContent>
                </StyledItemBlockLight>
            </StyledItemBlock>
            <StyledItemLoginDiv>
                <StyledItemLogin>Please <Link to="/Login">login here</Link> before you can see more or contact from this developer.</StyledItemLogin>
            </StyledItemLoginDiv>
        </StyledItemContainer>
    )
}

export default Developer