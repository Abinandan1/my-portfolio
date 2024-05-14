import styled from "styled-components";

export const Wrapper = styled.footer`
  background: var(--black);
  .footer-container {
    display: grid;
    /* grid-template-columns: 1fr 1fr; */
    /* align-items: center; */
    justify-content: center;
    margin-bottom: 3rem;
  }
  .footer-info {
    margin-bottom: 1rem;
  }
  .footer-info h2 {
    color: var(--primary-400);
    margin-bottom: 0;
  }
  .footer-info p {
    color: var(--primary-200);
  }
  .footer-info p {
    text-transform: capitalize;
  }
  .footer-contact {
    background: var(--primary-100);
    padding: 1rem;
    border-radius: 0.5rem;
    width: 400px;
  }
  .footer-contact h2 {
    margin-bottom: 2rem;
  }
  .form {
    display: grid;
    gap: 1rem;
  }

  .form-input {
    height: 2rem;
    background: var(--white);
    border-radius: var(--border-radius);
    border: transparent;
    width: 350px;
    margin: 0 auto;
    text-transform: capitalize;
    padding: 0 1rem;
    font-family: "Ysabeau Infant";
    font-weight: bold;
    letter-spacing: var(--letter-spacing-1);
  }
  .form-textarea {
    height: 5rem;
    margin-bottom: 1rem;
    padding-top: 0.5rem;
  }
  .btn {
    width: 350px;
    margin: 0 auto;
  }
  .copyright-info {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap: 0.5rem;
  }
  .footer-links {
    display: none;
  }
  @media screen and (max-width: 500px) {
    .copyright-info {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1000px) {
    .footer-info {
      margin: 0;
      display: grid;
      justify-items: center;
    }
    .footer-links {
      display: grid;
      text-align: left;
      gap: 1rem;
    }
    .footer-links a {
      text-transform: capitalize;
      color: var(--white);
      font-size: 1.25rem;
    }
    .footer-links a:hover {
      text-decoration: underline;
      color: var(--primary-200);
    }
    .footer-container {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      /* justify-items: start; */
    }
    .footer-contact {
      /* justify-self: end; */
    }
  }
`;
