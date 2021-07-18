import styled from 'styled-components'

import Container from '../../Container'

const EvolutionWrapper = styled(Container)`
  a {
    text-decoration: none;
    color: var(--lightGrayishBlue);
  }
  .cards {
    margin: 3rem 0;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 2.5rem;
    article {
      max-width: 30rem;
      img {
        width: 80%;
      }
      p {
        font-size: 1.5rem;
        margin-bottom: 3rem;
      }
      &:hover {
        transform: scale(1.03);
      }
    }
  }

  @media (min-width: 576px) {
    .cards {
      gap: 3rem;
      width: 80%;
      margin: 5rem auto;
      article p {
        font-size: 1.8rem;
      }
    }
  }
`

export { EvolutionWrapper }
