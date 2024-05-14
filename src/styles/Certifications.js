import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--white);
  .certifications-container {
    margin: 5rem 0;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 2rem;
  }
  .certification {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    /* justify-items: left; */
    gap: 1rem;
  }
  .certification a {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }
  .certification p {
    margin: 0;
    text-align: left;
    max-width: 400px;
  }
  @media screen and (max-width: 500px) {
    .certification p {
      font-size: 1rem;
    }
    .certification a {
      font-size: 0.875rem;
    }
  }
`;
