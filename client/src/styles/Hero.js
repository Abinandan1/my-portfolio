import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 2rem 0;
  .section-center {
    display: grid;
    place-items: center;
  }
  h1 {
    line-height: 1.5;
    margin: 0 auto;
    max-width: 500px;
    margin-top: 2rem;
  }
  p {
    margin: 3rem auto 5rem auto;
    text-transform: capitalize;
    max-width: 800px;
  }
  .btn {
    padding: 1.25rem;
    font-size: 1.25rem;
  }
  @media screen and (min-width: 768px) {
    h1 {
      margin-top: 10rem;
    }
  }
  @media screen and (min-width: 800px) {
    h1 {
      max-width: none;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
