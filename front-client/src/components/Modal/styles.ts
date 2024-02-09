import styled from "styled-components";

export const Container = styled.div`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 600px;
    padding: 40px;

    background: #4f0775;
    color: white;
    z-index: 10;
    border-radius: 16px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

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
      background-color: rgb(130, 52, 233);
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
  }

  .modalHeader {
    background: white;
    overflow: hidden;
    border-radius: 16px;
  }

  .heading {
    padding: 10px;
    color: #000;
    font-weight: 700;
    font-size: 5rem;
    text-align: center;
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    button {
      border-radius: 15px;
      border: 2px solid #fff;
      width: 200px;
    }
  }
`;
