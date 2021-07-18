import styled from 'styled-components'

const InfoWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  justify-content: center;
  span {
    color: var(--veryLightBlue);
    font-size: 1.3rem;
  }
  @media (min-width: 600px) {
    span {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 840px) {
    grid-area: pokeinfo;
    gap: 1rem 3rem;
    span {
      font-size: 1.7rem;
    }
  }
`

export { InfoWrapper }
