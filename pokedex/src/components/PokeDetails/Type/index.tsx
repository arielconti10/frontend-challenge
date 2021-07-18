import React, { useState, useEffect } from 'react'

import PokeTypeBadge from '../../PokeTypeBadge'
import { TypeWrapper } from './styles'

type PokemonType = {
  name: string
  double_damage_from: string[]
  double_damage_to: string[]
  half_damage_from: string[]
  half_damage_to: string[]
  no_damage_from: string[]
  no_damage_to: string[]
}

type TypeProps = {
  types: string[]
}

const Type: React.FC<TypeProps> = ({ types: typesNames }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [types, setTypes] = useState<PokemonType[]>([])
  const [error, setError] = useState<any>()

  useEffect(() => {
    setIsLoading(true)
    const getTypes = async () => {
      const fetchedTypes: PokemonType[] = []
      const responseArray = await Promise.all(
        typesNames.map(type => fetch(`https://pokeapi.co/api/v2/type/${type}/`))
      )

      for (const response of responseArray) {
        const { damage_relations, name } = await response.json()
        const parsedDamageRelations = Object.entries(damage_relations)
          .map(([key, value]: any[]) => ({
            [key]: value.map((type: Record<string, any>) => type.name)
          }))
          .reduce((acc, val) => ({ ...acc, ...val }))

        const fetchedType = {
          ...parsedDamageRelations,
          name
        } as PokemonType
        fetchedTypes.push(fetchedType)
      }

      return fetchedTypes
    }

    getTypes()
      .then(fetchedTypes => {
        setTypes(fetchedTypes)
        setIsLoading(false)
        setError(null)
      })
      .then(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [typesNames])

  return (
    <>
      <TypeWrapper as="section" className="wrapper">
        <h2>Types</h2>
        {types.map(type => (
          <article key={type.name}>
            <h3>
              {type.name[0].toUpperCase() +
                type.name.substr(1, type.name.length)}
              :{' '}
            </h3>
            <div>
              <p>Double damage from: </p>
              <div className="badges">
                {type.double_damage_from.map(item => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
              <p>Double damage to: </p>
              <div className="badges">
                {type.double_damage_to.map(item => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
              <p>Half damage from: </p>
              <div className="badges">
                {type.half_damage_from.map(item => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
              <p>Half damage to: </p>
              <div className="badges">
                {type.half_damage_to.map(item => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
              <p>No damage from: </p>
              <div className="badges">
                {type.no_damage_from.map((item: string) => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
              <p>No damage to: </p>
              <div className="badges">
                {type.no_damage_to.map(item => (
                  <PokeTypeBadge className={item.toLowerCase()} key={item}>
                    {item}
                  </PokeTypeBadge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </TypeWrapper>
      {error && (
        <h1 className="info">{error?.message || 'Something went wrong'}</h1>
      )}
      {isLoading && <div className="spinner"></div>}
    </>
  )
}

export default Type
