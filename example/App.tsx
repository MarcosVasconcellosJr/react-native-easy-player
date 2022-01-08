/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Home } from './src/screens';

export type RootParamList = {
  Example: undefined;
};
const Stack = createNativeStackNavigator<RootParamList>();

const _App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Example"
          options={{
            title: 'Example',
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = gestureHandlerRootHOC(() => <_App />);
export default App;
