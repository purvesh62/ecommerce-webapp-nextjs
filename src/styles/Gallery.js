import styled from "styled-components";

export const Gallery = styled.div`
  display: grid;
  /* 20rem is the minimum width */
  /* 1fr is whatever space which is left */
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  padding: 1rem;
`;
