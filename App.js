import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pages/Home';
import styles from './src/Pages/Home/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar hidden/>
    </View>
      
  
  );
}

