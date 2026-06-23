
import CharacterCard from '@/components/ui/characters/characterCard';
import SearchBox from '@/components/ui/common/searchBox';
import {  useCharactersVM } from '@/src/viewmodels/CharactersVM';
import { use, useEffect } from 'react';
import { ActivityIndicator, FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function CharactersScreen() {
  const { characters, page, isLoading, loadCharacters } = useCharactersVM()
  const insets = useSafeAreaInsets();
/*
  useEffect(() => { 

    loadCharacters();

  }, []); */


  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle='default' />

        <SearchBox />


        <FlatList
          data={characters}
          renderItem={({ item }) => <CharacterCard character={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            // Combines system spacing requirements with standard padding
            paddingBottom: insets.bottom + 80
          }}

        
          onEndReached={() => loadCharacters()}
          onEndReachedThreshold={0.2}

          // Shows a spinner at the bottom while loading
          ListFooterComponent={
            isLoading ? <ActivityIndicator size="small" /> : null
          }
        
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
