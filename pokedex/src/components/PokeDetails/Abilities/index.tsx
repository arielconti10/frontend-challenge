import React, { useEffect, useState } from 'react'

import { AbilitiesWrapper } from './styles'

type Ability = {
  name: string
  info: string
}

type AbilitiesProps = {
  abilities: string[]
}

const Abilities: React.FC<AbilitiesProps> = ({ abilities: abilitiesNames }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [abilities, setAbilities] = useState<Ability[]>([])
  const [error, setError] = useState<any>()

  useEffect(() => {
    setIsLoading(true)

    const getAbilities = async () => {
      const fetchedAbilities: Ability[] = []

      const responseArray = await Promise.all(
        abilitiesNames.map(ability =>
          fetch(`https://pokeapi.co/api/v2/ability/${ability}/`)
        )
      )

      for (const response of responseArray) {
        const { effect_entries, name } = await response.json()
        const { effect } = effect_entries.find(
          (effectObj: Record<string, any>) => effectObj.language.name === 'en'
        )
        fetchedAbilities.push({
          name,
          info: effect
        })
      }

      return fetchedAbilities
    }

    getAbilities()
      .then(fetchedAbilities => {
        setAbilities(fetchedAbilities)
        setIsLoading(false)
        setError(null)
      })
      .then(err => {
        setError(err)
        setIsLoading(false)
      })
  }, [abilitiesNames])

  return (
    <>
      <AbilitiesWrapper as="section" className="wrapper">
        <h2>Abilities</h2>
        {abilities.map(ability => (
          <article key={ability.name}>
            <h3>
              {ability.name[0].toUpperCase() +
                ability.name.substr(1, ability.name.length)}
            </h3>
            <p>{ability.info}</p>
          </article>
        ))}
      </AbilitiesWrapper>
      {error && (
        <h1 className="info">{error?.message || 'Something went wrong'}</h1>
      )}
      {isLoading && <div className="spinner"></div>}
    </>
  )
}

export default Abilities
