import styled from 'styled-components'

import Container from '../../Container'

const TypeWrapper = styled(Container)`
  h2 {
    margin-bottom: 3rem;
  }
  article {
    max-width: 80rem;
    margin: 0 auto;
    > div {
      padding: 1rem;
    }
    p {
      font-size: 1.5rem;
    }
    .badges {
      margin: 0.5rem 0 1.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  @media (min-width: 576px) {
    article {
      p {
        font-size: 2rem;
      }
      .badges {
        margin: 0.8rem 0 1.8rem;
      }
    }
  }
`

export { TypeWrapper }
