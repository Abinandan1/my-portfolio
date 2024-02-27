import styled from "styled-components";

export const Wrapper = styled.section`
  img {
    width: 4rem;
    height: 4rem;
  }
  .skills-container {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    justify-content: center;
  }
  .skill {
    display: grid;
    gap: 0.5rem;
  }
  .skill p {
    text-transform: uppercase;
  }
  .skill .img-container {
    border-radius: 50%;
    background: var(--primary-200);
    height: 8rem;
    width: 8rem;
    display: grid;
    place-items: center;
  }
  @media screen and (min-width: 1000px) {
    .skills-container {
      margin-top: 8rem;
      grid-template-rows: none;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
      gap: 2rem;
    }
    .skill {
      gap: 2rem;
    }
  }
`;
