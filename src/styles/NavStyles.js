import styled from "styled-components";
export const NavStyles = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 15vh;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
      font-size: 1rem;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 1rem;
        padding: 0.25rem;
    }
    svg {
        font-size: 1.5rem;
    }
`;
