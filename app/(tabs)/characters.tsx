import CharacterCard from '@/components/ui/characters/characterCard';
import SearchBox from '@/components/ui/common/searchBox';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle='default' />

        <SearchBox />

        <CharacterCard />


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
