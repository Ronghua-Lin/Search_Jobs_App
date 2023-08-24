import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import Home from "./app/index"

export default function App() {
  return (
    
    // <View style={styles.container}>

    <SafeAreaView >

      <Home/>
    </SafeAreaView>

  );
}
