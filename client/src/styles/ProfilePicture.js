import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0.5rem;
    left: 1rem;
  }
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
  }
`;
