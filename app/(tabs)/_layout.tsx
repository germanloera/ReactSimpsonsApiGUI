import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Fontisto } from '@expo/vector-icons'
import SimpsonTab from '@/components/ui/common/tab';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    
      tabBar={props => <SimpsonTab {...props} /> }
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        sceneStyle: { paddingTop:60 }
    
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
         
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: 'Characters',
        
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          title: 'Episodes',
         
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          title: 'Locations',
         
        }}
      />
    </Tabs>
  );
}
