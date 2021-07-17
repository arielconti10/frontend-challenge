import React from 'react'

import { StatsWrapper, StatBar } from './styles'

type Stat = {
  base: number
  effort: number
}

type StatsProps = {
  hp: Stat
  atk: Stat
  def: Stat
  special_atk: Stat
  special_def: Stat
  speed: Stat
}

const Stats: React.FC<StatsProps> = ({ children, ...stats }) => {
  return (
    <StatsWrapper>
      {Object.entries(stats).map(([stat, value]) => (
        <div key={stat}>
          <span>
            {stat
              .replace(/(hp|atk|def|s)/g, str => str.toUpperCase())
              .replace('_', ' ')}
            : {value.base} / Effort: {value.effort}
          </span>
          <StatBar id={stat} className="stat-bar" width={`${value.base}%`}>
            <div className="inner"></div>
          </StatBar>
        </div>
      ))}
    </StatsWrapper>
  )
}

export default Stats
