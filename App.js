import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Cep from './src/components/Cep'
import Header from './src/components/Header';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#3498db',
    // accent: '#f1c40f',
  }
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Header />
      <SafeAreaView style={styles.container}>
        <Cep />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
    // paddingBottom: '15%',
  },
});
