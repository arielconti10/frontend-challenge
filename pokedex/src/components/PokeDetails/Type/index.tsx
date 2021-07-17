import React from 'react'

import PokeTypeBadge from '../../PokeTypeBadge'
import { TypeWrapper } from './styles'

const type_details = [
  {
    name: 'Grass',
    double_damage_from: ['Flying', 'Poison', 'Bug', 'Fire', 'Ice'],
    double_damage_to: ['Ground', 'Rock', 'Water'],
    half_damage_from: ['Ground', 'Water', 'Grass', 'Electric'],
    half_damage_to: [
      'Flying',
      'Poison',
      'Bug',
      'Steel',
      'Fire',
      'Grass',
      'Dragon'
    ],
    no_damage_from: [],
    no_damage_to: []
  },
  {
    name: 'Poison',
    double_damage_from: ['Ground', 'Psychic'],
    double_damage_to: ['Grass', 'Fairy'],
    half_damage_from: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy'],
    half_damage_to: ['Poison', 'Ground', 'Rock', 'Ghost'],
    no_damage_from: [],
    no_damage_to: ['Steel']
  }
]

const Type: React.FC = () => {
  return (
    <TypeWrapper as="section" className="wrapper">
      <h2>Types</h2>
      {type_details.map(type => (
        <article key={type.name}>
          <h3>{type.name}: </h3>
          <div>
            <p>Double damage from: </p>
            <div className="badges">
              {type.double_damage_from.map(item => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
            <p>Double damage to: </p>
            <div className="badges">
              {type.double_damage_to.map(item => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
            <p>Half damage from: </p>
            <div className="badges">
              {type.half_damage_from.map(item => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
            <p>Half damage to: </p>
            <div className="badges">
              {type.half_damage_to.map(item => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
            <p>No damage from: </p>
            <div className="badges">
              {type.no_damage_from.map((item: string) => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
            <p>No damage to: </p>
            <div className="badges">
              {type.no_damage_to.map(item => (
                <PokeTypeBadge className={item.toLowerCase()}>
                  {item}
                </PokeTypeBadge>
              ))}
            </div>
          </div>
        </article>
      ))}
    </TypeWrapper>
  )
}

export default Type
