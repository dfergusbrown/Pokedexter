import * as Speech from 'expo-speech';

interface BasePair {
    name: string;
    url: string;
}

interface Type {
    slot: number;
    type: BasePair;
}

interface FlavorTextEntry {
    flavor_text: string,
    language: BasePair,
    version: BasePair
}

interface SpeciesData {
    flavor_text_entries: FlavorTextEntry[];
    name: string;
}

interface PokemonData {
    types: Type[];
}

export const readPokemonInfo = (speciesData: SpeciesData, pokemonData: PokemonData) => {
    const filteredEntriesByLang: FlavorTextEntry[] = speciesData.flavor_text_entries.filter((entry: FlavorTextEntry) => {
      return entry.language.name === 'en'
    })
    const randomNum: number = Math.floor(Math.random()*filteredEntriesByLang.length)
    const randomizedSelection: FlavorTextEntry = filteredEntriesByLang[randomNum]
    const voiceSelection = {voice: "Google US English"}

    const intro: string = `${speciesData.name}, a ${pokemonData.types[0].type.name} type pokemon.`
    const flavorText: string = `${randomizedSelection.flavor_text}`
    if (pokemonData && pokemonData.types) {
      Speech.speak(intro, voiceSelection)
      Speech.speak(flavorText, voiceSelection)
    }
  }