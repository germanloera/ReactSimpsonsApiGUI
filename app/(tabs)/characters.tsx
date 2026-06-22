
import CharacterCard from '@/components/ui/characters/characterCard';
import SearchBox from '@/components/ui/common/searchBox';
import { CharactersVM, useCharactersVM } from '@/src/viewmodels/CharactersVM';
import { useEffect } from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function CharactersScreen() {
  const { characters, page, isLoading, loadCharacters } = useCharactersVM()

  useEffect(() => { 

    loadCharacters();

  }, []);


  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle='default' />

        <SearchBox />


        <FlatList
          data={characters}
          renderItem={({ item }) => <CharacterCard character={item} />}
          keyExtractor={item => item.id}

        />




      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
