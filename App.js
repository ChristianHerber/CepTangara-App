import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import Cep from './src/components/cep'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cep/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '15%',
    // paddingBottom: '15%',
  },
});
