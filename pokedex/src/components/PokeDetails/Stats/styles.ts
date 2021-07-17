import styled from 'styled-components'

const StatsWrapper = styled.section`
  width: 90%;
  div + div {
    margin-top: 0.5rem;
  }
  div span {
    display: block;
    color: var(--veryLightBlue);
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
  @media (min-width: 840px) {
    align-self: center;
    grid-area: pokestats;
    div + div {
      margin-top: 1.7rem;
    }
    div span {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
`

const StatBar = styled.div<{ width: string }>`
  width: 100%;
  height: 1.8rem;
  background-color: var(--darkGrayishBlue);
  border-radius: 2rem;
  &#hp {
    .inner {
      background-color: var(--statHp);
    }
  }
  &#atk {
    .inner {
      background-color: var(--statAtk);
    }
  }
  &#def {
    .inner {
      background-color: var(--statDef);
    }
  }
  &#special_atk {
    .inner {
      background-color: var(--statSpAtk);
    }
  }
  &#special_def {
    .inner {
      background-color: var(--statSpDef);
    }
  }
  &#speed {
    .inner {
      background-color: var(--statSpd);
    }
  }
  .inner {
    height: 100%;
    border-radius: 2rem
      ${props => (props.width === '100%' ? '2rem 2rem' : '0 0')} 2rem;
    max-width: ${props => props.width};
    animation: 1.5s ease-in-out slide;
  }

  @keyframes slide {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @media (min-width: 840px) {
    height: 2.5rem;
  }
`

export { StatsWrapper, StatBar }
