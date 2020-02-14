import Styled from 'styled-components'
import { colors, fonts } from '../styled-components/constants'

export const StyledPaginationDiv = Styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
    height: auto;
    margin: auto;
`

export const StyledPaginationText = Styled.p`
    color: ${colors.gray};
    font-family: ${fonts.secondary};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    padding: 2px;
    margin-right: 5px;
`

export const StyledPaginationOptions = Styled.ul`
    width: 100%;
    height: auto;
`

export const StyledPaginationOption = Styled.li`
    display: inline-block;
    padding: 2px;
    margin: 0px 3px;
    color: ${props => props.currentPage ? colors.orange : colors.gray};
    font-family: ${fonts.secondary};
    font-size: 16px;
    font-weight: ${props => props.currentPage ? "bold" : "none"};
    cursor: pointer;

    &:hover {
        color: ${colors.orange};
    }
`