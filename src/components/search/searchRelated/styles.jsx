import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledRelatedTitle = Styled.p`
    text-align: center;
    color: ${colors.gray};
    font-family: ${fonts.third};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
`
export const StyledRelatedList = Styled.ul`
    width: 100%;
    height: auto;
    text-align: center;
`

export const StyledRelatedListItem = Styled.li`
    list-style-type: none;
    margin: 6px 0px;
    color: ${colors.red};
    font-family: ${fonts.primary};
    font-size: 14px;       
    text-decoration: none; 
    cursor: pointer;

    &:hover {
        color: #a8152d;
    }
`

