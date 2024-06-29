import { Stack } from 'expo-router'
import React from 'react'
import SearchScreen from './SearchScreen'

const SearchStack = () => {
  return (
    <Stack>
        <Stack.Screen name='SearchScreen'/>
        <Stack.Screen name='PokemonDetail' />
    </Stack>
  )
}

export default SearchStack