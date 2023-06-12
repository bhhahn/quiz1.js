import React,{useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Roster from './Roster';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View>
            <Button
                title="Roster"
                onPress={() =>
                navigation.navigate('Roster')
                }
            />
      </View>
    );
  };

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Main" component={App} />
        <Stack.Screen name="Roster" component={Roster} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Main() {
  return (
    <View>
      <View style ={styles.header}>
        <Text color='#000F08'>Welcome to Ben's App Demo</Text>
      </View>
      <View style={styles.container}>
        <Text>Add Players then Start the Game</Text>
        <StatusBar style="auto" />
        <Button
          title="Start Game"
          color="#4CB944"
          onPress={() => Alert.alert('Game Started (Does not do anything right now)')}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#757780',
    alignItems: 'start',
    justifyContent: 'center',
  },
  container: {
    flex: 3,
    backgroundColor: '#FBF5F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
