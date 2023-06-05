import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  TabNavigator: undefined;
  Screen_B: undefined;
};

type ScreenANavigationProp = DrawerNavigationProp<RootDrawerParamList, 'TabNavigator'>;
type ScreenAProps = {
  navigation: ScreenANavigationProp;
};

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

export default ScreenA;

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