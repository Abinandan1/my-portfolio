import styled from "styled-components";

export const Wrapper = styled.aside`
  display: none;
  background: var(--white);
  border-radius: var(--border-radius);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.75rem;
  .social-icons {
    display: grid;
    gap: 1rem;
  }
  .icon {
    color: var(--primary-400);
    height: 2rem;
    width: 2rem;
    transition: var(--transition);
  }
  .icon:hover {
    color: var(--primary-600);
  }
  @media screen and (min-width: 800px) {
    display: block;
  }
`;
