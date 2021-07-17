import React from 'react'
import { InfoWrapper } from './styles'

type InfoProps = {
  color: string
  height: number
  weight: number
  capture_rate: number
  base_experience: number
  base_happiness: number
}

const Info: React.FC<InfoProps> = props => {
  return (
    <InfoWrapper>
      <span>
        <strong>Color: </strong>
        {props.color}
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
