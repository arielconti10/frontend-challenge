import React from 'react'

import { StatsWrapper, StatBar } from './styles'

type StatsProps = {
  stats: {
    name: string
    base_stat: number
    effort: number
  }[]
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  stats = stats.map(stat => {
    stat.name = stat.name
      .replace('attack', 'atk')
      .replace('defense', 'def')
      .replace('special-atk', 'special_atk')
      .replace('special-def', 'special_def')
    return { ...stat }
  })

  return (
    <StatsWrapper>
      {stats.map(stat => (
        <div key={stat.name}>
          <span>
            {stat.name
              .replace(/(hp|atk|def|s)/g, str => str.toUpperCase())
              .replace('_', ' ')}
            : {stat.base_stat} / Effort: {stat.effort}
          </span>
          <StatBar
            id={stat.name}
            className="stat-bar"
            width={`${stat.base_stat > 100 ? 100 : stat.base_stat}%`}
          >
            <div className="inner"></div>
          </StatBar>
        </div>
      ))}
    </StatsWrapper>
  )
}

export default Stats
