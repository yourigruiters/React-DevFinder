import Styled from 'styled-components'
import { colors, fonts } from '../../styled-components/constants'

export const StyledSearchContainer = Styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;    
    margin-bottom: 30px;
`

export const StyledSearchLogo = Styled.img`
    display: block;
    width: 200px;
    height: 40px;
    margin-top: 4px;

    @media (max-width: 850px) {
        margin: auto;
        margin-bottom: 20px;
    }
`

export const StyledSearchForm = Styled.form`
    position: relative;
    width: 550px;
    height: auto;

    @media (max-width: 850px) {
        width: 100%;
    }
`

export const StyledSearchInput = Styled.input`
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: ${colors.blockLight};
    font-family: ${fonts.secondary};
    color: ${colors.gray};
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 18px;
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,1);
`

export const StyledSearchButton = Styled.button`
    position: absolute;
    top: 17px;
    right: 14px;
    background-color: transparent;
    border: none;
    outline: none;

    svg {
        font-size: 15px;
        margin-top: 1px;
        margin-right: 8px;
        cursor: pointer;

        > path {
            color: ${colors.gray};
        }

        &:hover > path {
            color: ${colors.black};
        }
    }  
`