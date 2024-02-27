import styled from "styled-components";

export const Wrapper = styled.nav`
  background: var(--primary-400);
  border-radius: var(--border-radius);
  width: 250px;
  box-shadow: var(--shadow-2);
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
  }
  a {
    cursor: pointer;
    color: var(--primary-50);
    transition: var(--transition);
    height: 24px;
  }
  a:hover {
    color: var(--primary-800);
  }
  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }
  .icon-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    background: var(--white);
    margin-top: 1rem;
    padding: 0.1rem 0.5rem;
    text-transform: capitalize;
    font-size: 0.9rem;
    color: var(--grey-400);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
  }
`;
