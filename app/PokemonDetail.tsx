import BackgroundPokedex from '@/components/BackgroundPokedex'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const PokemonDetail = () => {
  const route = useRoute();
  const { name } = route.params
  
  return (
    <BackgroundPokedex>
        <View>
          <Text>Pokemon Detail for: {name}</Text>
        </View>
    </BackgroundPokedex>
  )
}

export default PokemonDetail