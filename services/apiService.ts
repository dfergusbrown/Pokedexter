import axios from 'axios';

const baseURL: string = 'https://pokeapi.co/api/v2'
const betaURL: string = 'https://beta.pokeapi.co/graphql/v1beta'
 
export const api = axios.create({
    baseURL: baseURL
})

export const getAllPokemon = async () => {
    return await api.get('/pokemon/?limit=1000')
}

export const getPokemonById = async (id: string) => {
    return await api.get(`/pokemon/${id}`)
}

export const getSpeciesbyId = async (id: string) => {
    return await api.get(`/pokemon-species/${id}`)
}