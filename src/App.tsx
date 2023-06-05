import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Screen_A" component={ScreenA} />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
});

export default App;