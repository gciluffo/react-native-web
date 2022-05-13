/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {NoteList, NoteDetail} from './screens';
import {StacksProvider} from '@mobily/stacks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:8080'],
  config: {
    initialRouteName: 'NoteList' as 'NoteList' | 'NoteDetail' | undefined,
    screens: {
      NoteList: 'notes',
      NoteDetail: 'note-detail/:id',
    },
  },
};

function App() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      const iconFontStyles = `@font-face {
        src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format(truetype);
        font-family: "FontAwesome";
      }`;

      // Create stylesheet
      const style = document.createElement('style');
      style.appendChild(document.createTextNode(iconFontStyles));

      // Inject stylesheet
      document.head.appendChild(style);
    }
  }, []);

  return (
    <StacksProvider spacing={4}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Stack.Navigator>
          <Stack.Screen name="NoteList" component={NoteList} />
          <Stack.Screen name="NoteDetail" component={NoteDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </StacksProvider>
  );
}

export default App;
