import "react-native-gesture-handler";
import React from "react";
import { Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import rootReducer from "./reducers";

import HomeScreen from "./screens/HomeScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();

const Forecast = ({ navigation, route }) => {
  return <Text>Forecast</Text>;
};
const Settings = ({ navigation, route }) => {
  return <Text>Settings</Text>;
};
const About = ({ navigation, route }) => {
  return <Text>About</Text>;
};
const Icon = ({ navigation, route }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
      <Text>Settings</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "WhatToWeather",
              headerRight: (props) => <Icon {...props} />,
            }}
          />
          <Stack.Screen name="Forecast" component={Forecast} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
