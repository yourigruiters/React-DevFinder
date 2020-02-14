import Styled from 'styled-components'

export const StyledSearchTop = Styled.div`
    width: 100%;
    max-width: 800px;
    height: auto;
    margin: auto;
    margin-bottom: 20px;
`

export const StyledSearchMain = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;

    @media (max-width: 1250px) {
        flex-direction: column;
`

export const StyledSearchAside = Styled.div`
    display: block;
    width: 170px;
    height: auto;

    @media (max-width: 1250px) {
        display: ${props => props.desktop && "none" };
        order: 1;
        margin: auto;
        margin-bottom: 20px;
    }
`

export const StyledSearch = Styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    height: auto;
    min-height: 614px;

    @media (max-width: 1250px) {
        margin: auto;
        order: 2;
    }
`