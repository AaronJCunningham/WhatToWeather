import "react-native-gesture-handler";
import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

import HomeScreen from "./screens/HomeScreen";

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "WhatToWweather" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
