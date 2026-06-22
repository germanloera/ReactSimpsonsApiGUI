

import CardEpisode from '@/components/ui/ep/episodeCard';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function EpisodesScreen() {
  return (
    <SafeAreaView>
      <View>

        <CardEpisode />
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
