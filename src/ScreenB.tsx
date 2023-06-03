import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

type RootBottomTabParamList = {
    Screen_A: undefined;
    Screen_B: undefined;
  };

type ScreenBNavigationProp = BottomTabNavigationProp<RootBottomTabParamList, 'Screen_B'>;
type ScreenBProps = {
  navigation: ScreenBNavigationProp;
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