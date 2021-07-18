import React from 'react'
import { InfoWrapper } from './styles'

type InfoProps = {
  color: string
  height: number
  weight: number
  capture_rate: number | string
  base_experience: number | string
  base_happiness: number | string
}

const Info: React.FC<InfoProps> = props => {
  return (
    <InfoWrapper>
      <span>
        <strong>Color: </strong>
        {props.color[0].toUpperCase() +
          props.color.substr(1, props.color.length)}
      </span>
      <span>
        <strong>Height: </strong>
        {props.height}
      </span>
      <span>
        <strong>Weight: </strong>
        {props.weight}
      </span>
      <span>
        <strong>Capture Rate: </strong>
        {props.capture_rate}
      </span>
      <span>
        <strong>Base Experience: </strong>
        {props.base_experience}
      </span>
      <span>
        <strong>Base Happiness: </strong>
        {props.base_happiness}
      </span>
    </InfoWrapper>
  )
}

export default Info
