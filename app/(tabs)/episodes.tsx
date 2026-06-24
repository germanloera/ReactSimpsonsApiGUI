

import SearchBox from '@/components/ui/common/searchBox';
import CardEpisode from '@/components/ui/ep/episodeCard';
import { useEpisodesVM } from '@/src/viewmodels/EpisodesVM';
import { StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect } from 'react';


export default function EpisodesScreen() {

  const { episodes, page, isLoading, filtered, query, filter, loadEpisodes, setQuery } = useEpisodesVM()
  const insets = useSafeAreaInsets();
  
   useEffect(() => { 
      filter()
      },[query])
  
  return (
    <SafeAreaView>
      <View>

        <SearchBox action={query => setQuery(query)} />

     <FlatList
          data={filtered}
          renderItem={({ item }) => <CardEpisode ep={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            // Combines system spacing requirements with standard padding
            paddingBottom: insets.bottom + 80
          }}

        
          onEndReached={() => loadEpisodes()}
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
