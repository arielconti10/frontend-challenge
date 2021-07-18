import styled from 'styled-components'

import Container from '../../Container'

const AbilitiesWrapper = styled(Container)`
  article {
    max-width: 80rem;
    margin: 3rem auto;
    p {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 576px) {
    article {
      p {
        font-size: 2rem;
      }
    }
  }
`

export { AbilitiesWrapper }
