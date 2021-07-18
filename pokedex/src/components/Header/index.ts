import styled from 'styled-components'

const Header = styled.header`
  background-color: var(--darkGrayishBlue);
  padding: 1.5rem;
  > div {
    display: flex;
    flex-direction: column;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;
    font-size: 2.5rem;
    font-weight: 400;
    img {
      height: 6rem;
    }
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-bottom: 1px solid white;
    margin-top: 2rem;
    padding: 0 0.5rem;
    input {
      background-color: transparent;
      padding: 0.5rem 0;
      outline: none;
      border: none;
      width: 100%;
      &,
      &::placeholder {
        font-size: 1.7rem;
        color: white;
      }
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      img {
        width: 2.3rem;
        margin-bottom: 0.7rem;
      }
    }
  }

  @media (min-width: 500px) {
    > div {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    .input-group {
      width: 20rem;
    }
  }

  @media (min-width: 600px) {
    .input-group {
      width: 35rem;
    }
  }
`
export default Header
