import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import HomeInfoPill from '@/components/ui/home/home-info-pill';
import HomeInfoAdvice from '@/components/ui/home/home-info-advise';
import HomeInfoSmallPills from '@/components/ui/home/home-info-small';
import SimpsonHeader from '@/components/ui/common/header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      <SimpsonHeader />
      <HomeInfoPill />
      <HomeInfoSmallPills />
      <HomeInfoAdvice />

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
    

  },
});
