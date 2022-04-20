/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NoteList, NoteDetail} from './screens';
import {StacksProvider} from '@mobily/stacks';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <StacksProvider spacing={4}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="NoteList">
          <Stack.Screen name="NoteList" component={NoteList} />
          <Stack.Screen name="NoteDetail" component={NoteDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </StacksProvider>
  );
}

export default App;
