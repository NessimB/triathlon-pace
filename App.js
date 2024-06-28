// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import '@expo/metro-runtime';

import { useState } from 'react';
import { PaperProvider, Text, DefaultTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import ToggleButton from "./components/ToogleButton"


const theme ={
  ...DefaultTheme,
  colors : {
    ...DefaultTheme.colors,
    primary : "black"
  }
}

export default function Main() {

  return (
      <PaperProvider theme={theme}>
       <View style={styles.container}> 
        <Text variant="displayMedium">Triathlon Pace</Text>
       </View>
       <View style={styles.container}> 
        <ToggleButton/>
       </View>
      </PaperProvider>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up Apssp.ts to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// Créer un style global pour les conteneurs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Vous pouvez ajouter alignItems si vous souhaitez centrer également horizontalement
  },
});

