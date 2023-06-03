import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Screen_A: undefined;
  Screen_B: undefined;
};

type ScreenANavigationProp = StackNavigationProp<RootStackParamList, 'Screen_A'>;
type ScreenAProps = {
  navigation: ScreenANavigationProp;
};

type ScreenBNavigationProp = StackNavigationProp<RootStackParamList, 'Screen_B'>;
type ScreenBProps = {
  navigation: ScreenBNavigationProp;
};

const Stack = createStackNavigator<RootStackParamList>();

const ScreenA: React.FC<ScreenAProps> = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable onPress={onPressHandler} style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
};

const ScreenB: React.FC<ScreenBProps> = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })} >
        <Text style={styles.text}>Go Back to Screen A</Text>
      </Pressable>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_A" component={ScreenA} />
        <Stack.Screen name="Screen_B" component={ScreenB} />
      </Stack.Navigator>
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