import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <GameEngine
      style= {{position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0}}>
      </GameEngine>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
