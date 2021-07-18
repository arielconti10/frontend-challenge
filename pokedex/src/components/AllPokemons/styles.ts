import styled from 'styled-components'

import Container from '../Container'
import Card from '../Card'

const Wrapper = styled(Container)`
  margin: 2.5rem auto;
  display: grid;
  justify-content: center;
  gap: 3rem;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 992px) {
    margin: 3rem auto;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`

const PokeCard = styled(Card)`
  img {
    width: 80%;
  }
  > span {
    color: var(--veryLightBlue);
    font-size: 2.5rem;
  }
  .badges {
    margin: 1.5rem 0 2.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &:hover {
    transform: scale(1.04);
  }
`

export { Wrapper, PokeCard }
