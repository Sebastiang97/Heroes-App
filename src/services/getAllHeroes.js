import { api_key, base_url } from './config'

const getAllHeroes = ({ search = '', limit = 10, id = '' }) => {
  const apiUrl = `${base_url}/characters?apikey=${api_key}&limit=${limit}`

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((res) => {
      const { results = [] } = res.data
      const heroes = results.map((heroe) => {
        const { thumbnail, description, resourceURI, name, id } = heroe
        const { path, extension } = thumbnail
        const url = path + '.' + extension
        return { name, id, url, description, resourceURI }
      })
      return heroes
    })
}

export default getAllHeroes
