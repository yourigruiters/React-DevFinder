import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledFooter = Styled.footer`
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

export const StyledOptionsLeft = Styled.div`
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
        margin-right: 12px;

        &:hover {
            color: ${colors.blockLight};
        }

        @media (max-width: 400px) {
            font-size: 13px;
            margin-right: 6px;
        }
    }
`

export const StyledOptionsRight = Styled.div`
    width: auto;
    height: 30px;
    line-height: 28px;
    
    a {
        position: relative;
        color: ${colors.orange};
        font-family: ${fonts.third};
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        margin-left: 12px;

        &:first-child {
            color: ${colors.green}
        }

        &:hover {
            color: ${colors.blockLight};
        }

        @media (max-width: 400px) {
            font-size: 13px;
            margin-left: 6px;
        }
    }
`