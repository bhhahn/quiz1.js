import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
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
