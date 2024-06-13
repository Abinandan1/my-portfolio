import styled from "styled-components";

export const Wrapper = styled.section`
  @media screen and (min-width: 976px) {
    .projects-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .projects-container {
    display: grid;
    gap: 2rem;
    justify-items: center;
    align-items: center;
  }
  .project {
    position: relative;
    cursor: pointer;
    box-shadow: var(--shadow-3);
    border-radius: 0.75rem;
  }
  .project:hover .project-btns {
    opacity: 1;
    visibility: visible;
    background: rgba(16, 185, 129, 0.2);
  }
  .project:hover .img-container {
    outline: 2px solid var(--primary-500);
    outline-offset: -1rem;
    outline-style: groove;
  }
  .project-btns {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    display: grid;
    gap: 1rem;
    justify-content: center;
    align-content: center;
    transition: var(--transition);
    border-radius: 0.75rem;
  }
  .img-container {
    transition: var(--transition);
    border-radius: 0.75rem;
  }
  img {
    border-radius: 0.75rem;
    object-fit: cover;
    width: 25rem;
    height: 15rem;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 20rem;
      height: 10rem;
    }
  }
  a {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 0.5rem;
  }
  .btn:hover {
    background: var(--primary-500);
    transform: scale(1.05);
    color: var(--white);
  }
  .icon {
    font-size: 1.25rem;
  }
`;
