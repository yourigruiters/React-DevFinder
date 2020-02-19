import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledFilterMain = Styled.div`
    width: 100%;
    height: auto;
    cursor: pointer;
`

export const StyledFilterTitle = Styled.p`
    text-align: center;
    color: ${colors.gray};
    font-family: ${fonts.third};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
`
export const StyledFilterDiv = Styled.div`
    cursor: pointer;
    position: relative;
    width: 100%;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid ${colors.blockDark};
    background-color: ${colors.blockLight};

    &:before {
        content: "";
        position: absolute;
        top: 16px;
        right: 20px;
        width: 6px;
        height: 6px;
        border-style: solid;
        border-width: 2px;
        border-color: ${colors.white} ${colors.white} transparent transparent;
        transform: ${props => props.dropdown ? "rotate(135deg)" : "rotate(45deg)"};
        transition: all .25s ease;
    }
`

export const StyledFilterText = Styled.p`
    color: ${colors.white};
`

export const StyledFilterOptions = Styled.div`
    display: ${props => props.dropdown ? "block" : "none" };
    width: 100%;
    height: auto;
    padding: 10px;
    border-radius: 6px;
    box-sizing: border-box;
    background-color: ${colors.blockLight};
    font-size: 14px;
    line-height: 26px;
`

export const StyledFilterOption = Styled.input`
    color: ${colors.white};
    margin: 8px 12px 8px 0px;
    background-color: ${props => props.selected ? colors.orange : colors.blockDark};;
    width: 11px;
    height: 11px;

    &:after {
        width: 12px;
        height: 12px;
        border-radius: 15px;
        top: -1px;
        left: 0px;
        position: relative;
        background-color: ${props => props.selected ? colors.orange : colors.blockDark};
        content: '';
        display: inline-block;
        visibility: visible;
    }

    &:checked:after {
        width: 12px;
        height: 12px;
        border-radius: 15px;
        top: -1px;
        left: 0px;
        position: relative;
        background-color: ${colors.orange};
        content: '';
        display: inline-block;
        visibility: visible;
    }

    &.placeholder {
        color: ${colors.white};
    }
`

