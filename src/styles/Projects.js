import styled from "styled-components";

export const Wrapper = styled.section`
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    justify-items: center;
  }
  .project-btns {
    display: grid;
    gap: 1rem;
  }
  a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;
  }
  .icon {
    font-size: 1.25rem;
  }
`;
