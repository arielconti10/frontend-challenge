import styled from 'styled-components'

import Container from '../../components/Container'

const MainDetails = styled(Container)`
  padding: 2rem 0 0;
  a img {
    width: 5rem;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateX(-1rem);
    }
  }

  > section {
    display: grid;
    margin-top: 3rem;
    gap: 2.5rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--veryLightBlue);
    justify-items: center;
    h1 {
      color: var(--veryLightBlue);
      font-weight: 400;
      text-align: center;
      font-size: 3rem;
    }
    img {
      width: 100%;
      max-width: 50rem;
    }
  }

  @media (min-width: 840px) {
    > section {
      padding-bottom: 5rem;
      gap: 0rem 2rem;
      grid-template: 50px 50px auto auto / 1fr 1fr;
      grid-template-areas: 'pokeimg vazio' 'pokeimg pokename' 'pokeimg pokestats' 'pokeinfo pokestats';
      h1 {
        grid-area: pokename;
        font-size: 3.5rem;
      }
      img {
        grid-area: pokeimg;
      }
    }
  }
`

export { MainDetails }
