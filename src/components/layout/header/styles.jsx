import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledHeader = Styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    background-color: ${colors.black};
    padding: 8px 20px 5px;
    box-sizing: border-box;
    border-style: solid;
    border-width: 2px;
    border-color: rgba(51, 52, 55, 1.0);
`

export const StyledPageDiv = Styled.div`
    display: flex;
    width: auto;
    height: 30px;
    line-height: 28px;
    
    a {
        position: relative;
        color: ${colors.gray};
        font-family: ${fonts.third};
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        text-indent: 28px;

        &:hover {
            color: ${colors.blockLight};
        }
    }

    svg {
        position: absolute;
        left: 0;
        font-size: 24px;
        margin-top: 0px;
        margin-right: 6px;

        path {
            color: ${colors.red};
        }
    }
`

export const StyledOptions = Styled.div`
    width: auto;
    height: auto;
    margin-top: 6px;

    a {
        position: relative;
        top: -3px;
        color: ${colors.blue};
        font-family: ${fonts.third};
        font-size: 17px;
        text-decoration: none;
        margin-left: 5px;
        margin-right: 30px;

        > svg {
            position: absolute;
            font-size: 24px;
            margin-top: -2px;
            margin-left: 6px;
        }

        > svg path {
            color: ${colors.blue};
        }

        &:hover, 
        &:hover > svg path {
            color: ${colors.blockLight};
        }
    }
`