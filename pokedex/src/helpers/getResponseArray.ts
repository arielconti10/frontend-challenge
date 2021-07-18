// range de pokemons na api
const ranges = [
  { start: 1, end: 898 },
  { start: 10001, end: 10220 }
]

function* idGenerator() {
  let hasNext = true
  let id = 1
  while (hasNext) {
    id =
      id <= ranges[0].end || id >= ranges[1].start
        ? id
        : id - ranges[0].end - 1 + ranges[1].start
    yield id
    id++
    hasNext = id <= ranges[1].end
  }
}

const genId = idGenerator()

function getResponseArray(page: number, perPage: number): Promise<Response[]> {
  let fetchArray: Promise<Response>[] = []
  for (let i = 0; i < page * perPage; i++) {
    const id = genId.next()
    if (id.done) return Promise.all(fetchArray)
    fetchArray.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id.value}`))
  }
  return Promise.all(fetchArray)
}

export default getResponseArray
