

import SearchBox from '@/components/ui/common/searchBox';
import CardEpisode from '@/components/ui/ep/episodeCard';
import { useEpisodesVM } from '@/src/viewmodels/EpisodesVM';
import { StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function EpisodesScreen() {

  const { episodes, page, isLoading, loadEpisodes } = useEpisodesVM()
  const insets = useSafeAreaInsets();
  
  
  return (
    <SafeAreaView>
      <View>

        <SearchBox />

     <FlatList
          data={episodes}
          renderItem={({ item }) => <CardEpisode ep={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            // Combines system spacing requirements with standard padding
            paddingBottom: insets.bottom + 80
          }}

        
          onEndReached={() => loadEpisodes()}
          onEndReachedThreshold={0.2}

          // Muestra un spinner al final mientras carga
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
