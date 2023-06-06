import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootBottomTabParamList = {
  TabNavigator: undefined;
  Screen_B: { ItemName: string; ItemId: number };
};

type ScreenBNavigationProp = BottomTabNavigationProp<RootBottomTabParamList, 'TabNavigator'>;
type ScreenBProps = {
  navigation: ScreenBNavigationProp;
  route: any
};

const ScreenB: React.FC<ScreenBProps> = ({ navigation, route }) => {

  const { ItemName, ItemId } = route.params;

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
      <Text style={styles.text}>{ItemName}</Text>
      <Text style={styles.text}>{ItemId}</Text>
    </View>
  );
};

export default ScreenB;

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