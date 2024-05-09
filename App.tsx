/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Img from './src/assets/reference-icon.png';
import InfoCardContainer from './src/components/container/InfoCardContainer';

function App(): React.JSX.Element {
  const handleShowAlert = () => {
    Alert.alert('Ejercicio Tema 5', 'Hola mundo desde una alerta.');
  };

  return (
    <ScrollView>
      <View style={styles.appContainer}>
        <Text>Hola mundo</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit
          amet nisl tellus. Cras sit amet rutrum libero. Donec lorem mauris,
          tempus et tellus at, viverra sodales nibh. Aliquam ultricies, nisl at
          aliquet luctus, metus neque finibus ipsum, non tincidunt nunc tortor
          sit amet risus.
        </Text>
        <Image source={Img} />
        <TouchableOpacity style={styles.button} onPress={handleShowAlert}>
          <Text>Hola Mundo</Text>
        </TouchableOpacity>
        <InfoCardContainer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 50,
    marginTop: 20,
  },
  button: {
    paddingVertical: 16,
    backgroundColor: 'green',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
