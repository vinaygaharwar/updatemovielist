import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import screen1 from './screen/screen1';
import screen2 from './screen/screen2';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="screen1">
        <Stack.Screen
          name="screen1"
          component={screen1}
          options={{
            title: 'screen1', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen name="screen2" component={screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;