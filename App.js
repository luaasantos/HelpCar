import { StyleSheet, View } from 'react-native';
import { Apresentacao } from './src/screens/apresentacao';

import { Poppins_700Bold, useFonts, Poppins_400Regular, Poppins_800ExtraBold } from "@expo-google-fonts/poppins"



export default function App() {
  const  [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold
  
  });
  return (
    <View style={styles.container}>
      {fontsLoaded ? <Apresentacao></Apresentacao>
        : ''}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
