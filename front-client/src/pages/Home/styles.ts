import styled from "styled-components";

export const Container = styled.div`
  background-color: #353434;
  width: 100%;
  height: 100%;
  padding: 2rem;
  color: white;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Wrapper = styled.div`
  background-color: #454344;
  width: fit-content;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
`;

export const InputsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;

  form {
    display: grid;
    place-content: center;
  }

  .form-control {
    font-size: 1.5rem;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
  }

  .form-control + .form-control {
    margin-top: 1em;
  }

  .form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: rgb(130, 52, 233);
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: #fff;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }

  input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
  }

  @media (max-width: 550px) {
    flex-direction: column;

    div,
    button {
      width: 100%;
    }
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
