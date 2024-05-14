import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--white);
  p {
    margin: 0 auto;
    margin-bottom: 6rem;
  }
  .education {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .education p {
    text-transform: uppercase;
    transform: rotate(-90deg);
    margin: 0;
    letter-spacing: 0.25rem;
  }
  .education-details {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .education-details div {
    display: grid;
  }
  .icon {
    height: 2rem;
    width: 2rem;
  }
  @media screen and (max-width: 600px) {
    .education p {
      font-size: 1rem;
    }
    .education {
      grid-template-columns: 160px auto 1fr;
    }
  }
  @media screen and (min-width: 800px) {
    .education-details div {
      font-size: 1.25rem;
    }
    p {
      max-width: 600px;
    }
    .education p {
      letter-spacing: 0.5rem;
    }
  }
  @media screen and (min-width: 1000px) {
    .education-details div {
      font-size: 1.5rem;
    }
    p {
      max-width: 700px;
    }
    .education p {
      letter-spacing: 1rem;
    }
  }
`;
