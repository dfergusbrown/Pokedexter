import axios from 'axios';

const baseURL: string = 'https://pokeapi.co/api/v2/pokemon'
const betaURL: string = 'https://beta.pokeapi.co/graphql/v1beta'
 
export const api = axios.create({
    baseURL: baseURL
})

export const getAllPokemon = async () => {
    return await api.get('/?limit=100')
}

export const getPokemonById = async (id: string) => {
    return await api.get(`/${id}`)
}