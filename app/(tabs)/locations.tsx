import SearchBox from '@/components/ui/common/searchBox';
import CardEpisode from '@/components/ui/ep/episodeCard';
import { useLocationsVM } from '@/src/viewmodels/LocationsVM';
import { useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';


export default function LocationsScreen() {

  const { locations, page, isLoading, filtered, query, filter, loadLocations, setQuery } = useLocationsVM()
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
                renderItem={({ item }) => <CardEpisode loc={item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                  // Combines system spacing requirements with standard padding
                  paddingBottom: insets.bottom + 80
                }}
      
              
            onEndReached={() => loadLocations()}
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
