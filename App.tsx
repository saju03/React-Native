import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme()==='dark'
  return(
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000000' : '#FFFFFF' }]}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteTxt : styles.blackTxt}>Hello Native</Text>
      </View>
    </SafeAreaView>
  )
}


export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
 

  },
  whiteTxt:{
    color:'#FFFFFF'
  },
  blackTxt:{
    color:'#B63131'
  },
 
})