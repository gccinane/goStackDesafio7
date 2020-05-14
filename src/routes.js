import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
