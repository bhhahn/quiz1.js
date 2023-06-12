import React,{useState} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import App from './App';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View>
            <Button
                title="Home"
                onPress={() =>
                navigation.navigate('App')
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

const Rost = () => {
    const [players,setChange] = useState(0)
    return (
      <View>
            <Text style = {{fontSize: 40}}>
                Number of Players on Roster:
            </Text>
            <Text style = {{fontSize: 20}}>
                {players}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}} >
                <Button
                    title="Add Player"
                    onPress = {() => setChange(players+1)}
                />
            </View>
     </View>)
     }
export default Rost;