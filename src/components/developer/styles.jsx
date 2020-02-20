import Styled from 'styled-components'
import { colors, fonts } from '../styled-components/constants'

export const StyledItemContainer = Styled.div`
    width: 100%;
    height: auto;
    max-width: 800px;
    margin: auto;
`

export const StyledItemBlock = Styled.div`
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,1); 
    margin-bottom: 40px;  
`

export const StyledItemBlockLight = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${colors.blockLight};
`

export const StyledItemBlockImageDiv = Styled.div`
    display: block;
    width: 250px;
    height: auto;

    @media (max-width: 750px) {
        display: none;
    }
`

export const StyledItemBlockImage = Styled.img`
    display: block;
    width: 250px;
    height: auto;
    border-radius: 6px;
`

export const StyledItemBlockContent = Styled.div`
    margin-left: 30px;
    margin-right: 20px;

    @media (max-width: 750px) {
        margin-left: 0px;
        margin-right 0px;
    }
`

export const StyledItemBlockContentTitle = Styled.h3`
    font-family: ${fonts.primary};
    font-size: 40px;
    letter-spacing: 1px;
    color: ${colors.white};
    text-transform: uppercase;
    margin-bottom: 10px;
`

export const StyledItemBlockContentParagraph = Styled.p`
    font-family: ${fonts.secondary};
    font-size: 14px;
    color: ${colors.white};
`

export const StyledItemLoginDiv = Styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    border: 2px solid ${colors.blockLight};
    border-radius: 40px;
`

export const StyledItemLogin = Styled.p`
    font-size: 16px;
    font-family: ${fonts.secondary};
    color: ${colors.white};

    a {
        color: ${colors.blockLight};

        &:hover {
            color: ${colors.blockDark};
        }
    }

    @media (max-width: 750px) {
        font-size: 13px;
    }
`