import Styled from 'styled-components'
import { colors, fonts } from './constants'

export const StyledDefaultTitle = Styled.h4`
    font-size: 80px;
    font-family: ${fonts.default};
    color: ${colors.gray};

    @media (max-width: 800px) {
        font-size: 65px;
    }

    @media (max-width: 400px) {
        font-size: 50px;
    }
`