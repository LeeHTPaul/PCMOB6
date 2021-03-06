import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInSignUpScreen from "./screens/SignInSignUpScreen";
import LoggedInTabStack from "./components/LoggedInTabStack";
import { Provider, useSelector } from "react-redux";
import store from "./redux/configureStore";


const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

function App() {
//  const [loading, setLoading] = useState(true);
   const [signedIn, setSignedIn] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);

 /* async function loadToken() {
    if (token != null) {
      setSignedIn(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadToken();
  }, []);
 */

  //return loading ? (
  //  <View style={styles.container}>
  //    <ActivityIndicator />
  //  </View>
  //) : (

  return (
  <NavigationContainer>
      <StatusBar style={isDark? "Light" : "dark" }></StatusBar>
      <Stack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName={token != null ? "Logged In" : "SignInSignUp"}
        animationEnabled={false}
      >
        <Stack.Screen component={SignInSignUpScreen} name="SignInSignUp" />
        <Stack.Screen component={LoggedInTabStack} name="Logged In" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  export default function AppWrapper() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
