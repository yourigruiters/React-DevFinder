import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledDefinition = Styled.div`
    position: relative;
    width: 100%;
    height: auto;    
    margin-bottom: 30px;
    padding: 15px 20px;
    border: 1px solid rgba(74, 73, 74, 1.0);
    border-radius: 3px;
    box-sizing: border-box;
`

export const StyledDefinitionTitle = Styled.p`
    position: absolute;
    top: -11px;
    left: 18px;
    padding: 0px 5px;
    color: ${colors.gray};
    background-color: ${colors.bgDark};
    font-family: ${fonts.primary};
    text-transform: uppercase;
`

export const StyledDefinitionParagraph = Styled.p`
    color: ${colors.red};
    font-family: ${fonts.primary};
    font-size: 14px;
`

