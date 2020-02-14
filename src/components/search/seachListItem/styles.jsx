import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledItemBlock = Styled.div`
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,1); 
    margin-bottom: 40px;   
    cursor: pointer;
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

export const StyledItemBlockDark = Styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: auto;
    padding: 10px 20px 25px;
    box-sizing: border-box;
    background-color: ${colors.blockDark};
`

export const StyledItemBlockImageDiv = Styled.div`
    position: absolute;
    z-index: 9999;
    display: block;
    width: 125px;
    height: auto;

    @media (max-width: 750px) {
        display: none;
    }
`

export const StyledItemBlockImage = Styled.img`
    display: block;
    width: 125px;
    height: 125px;
    border-radius: 6px;
`

export const StyledItemBlockContent = Styled.div`
    margin-left: 150px;

    svg {
        position: absolute;
        left: 170px;
        font-size: 20px;
        margin-top: 0px;
        margin-right: 6px;

        path {
            color: ${colors.red};
        }
    }

    @media (max-width: 750px) {
        margin-left: 0px;

        svg {
            left: 20px;
        }
    }
`

export const StyledItemBlockContentTitle = Styled.h3`
    font-family: ${fonts.primary};
    font-size: 22px;
    letter-spacing: 1px;
    color: ${colors.white};
    text-transform: uppercase;
    margin-bottom: 10px;
`

export const StyledItemBlockContentParagraph = Styled.p`
    font-family: ${fonts.secondary};
    font-size: 12px;
    color: ${colors.white};
`

export const StyledItemBlockContentSkills = Styled.p`
    font-family: ${fonts.third};
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
    text-indent: 25px;
`

export const StyledItemBlockExtra = Styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 175px;
    height: auto;
    margin-left: 12px;
`

export const StyledItemBlockExtraImage = Styled.img`
    display: block;
    width: 45px;
    height: 18px;
`

export const StyledItemBlockExtraNumber = Styled.p`
    font-family: ${fonts.primary};
    font-size: 16px;
    font-weight: bold;
    color: ${colors.white};
`

export const StyledItemBlockExtraLocation = Styled.p`
    font-family: ${fonts.primary};
    font-size: 14px;
    color: ${colors.white};

    svg {
        margin-right: 10px;
    }
`