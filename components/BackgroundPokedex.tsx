import React, {ReactNode} from 'react'
import { ImageBackground, View, Text, Button } from 'react-native'

interface BackgroundPokedexProps {
    children: ReactNode;
  }

const BackgroundPokedex: React.FC<BackgroundPokedexProps> = ({children}) => {
  return (
    <ImageBackground 
    source={require('../assets/images/pokedex_background.jpg')}
    style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }}
    resizeMode="stretch"
    >{children}</ImageBackground>
  )
}

export default BackgroundPokedex