import Styled from 'styled-components'
import { colors, fonts } from './constants'

export const StyledContainer = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: auto;
`
export const StyledFormContainer = Styled.div`
    width: 40%;
    height: auto;
    margin-top: 100px;

    @media (max-width: 800px) {
        width: 100%;
        margin-top: 50px;

        &:last-child {
            margin-bottom: 50px;
        }
    }
`

export const StyledTitle = Styled.h5`
    font-family: ${fonts.secondary};
    font-weight: normal;
    font-size: 28px;
    text-decoration: none;
    color: ${colors.white};
`

export const StyledForm = Styled.form`
    padding-top: 20px;
`

export const StyledLabel = Styled.label`
    color: ${colors.white};
    margin-bottom: 10px;
`

export const StyledLabelSpan = Styled.span`
    color: ${colors.red};
`

export const StyledInput = Styled.input`
    display: block;
    width: 100%;
    height: 44px;
    margin: 10px 0px 20px;
    border: 1px solid ${colors.blockLight};
    border-radius: 3px;
    background: ${colors.black};
    color: ${colors.red};
    font-size: 14px;
    line-height: 44px;
    text-indent: 10px;
    outline: none;

    &:focus {
        color: ${colors.red};
        border: 1px solid #c9c8c9;
        box-shadow: 0 0 3px rgba(0,0,0,.2);
    }
`

export const StyledButton = Styled.button`
    display: inline-block;
    min-width: 160px;
    margin-bottom: 20px;
    padding: 0 10px !important;
    border: 0;
    border-radius: 3px;
    background: ${colors.red};
    color: ${colors.white};
    font-size: 14px;
    line-height: 44px !important;
    letter-spacing: 1px;
    transition: background 0.4s;
    cursor: pointer;
  
    &:hover {
        background: #a8152d;
    }
`