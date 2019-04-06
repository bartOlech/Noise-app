
import styled from 'styled-components';

const MainCategoryStyle = styled.div`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    @media (min-width: 540px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
    }
`

export default MainCategoryStyle