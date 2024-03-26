import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as splashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { useAppContext } from "../context/appContext";
import { CountrySelection, Landing, Login, Register } from "../pages";
import TabbedHome from "../pages/TabbedHome";

const unLoggedRoutes = [
  { name: "Landing", component: Landing, headerShown: false },
  { name: "CountrySelection", component: CountrySelection, headerShown: false },
  { name: "Login", component: Login, headerShown: false },
  { name: "Register", component: Register, headerShown: false },
];

const loggedRoutes = [{ name: "Home", component: TabbedHome, headerShown: false }];

const Stack = createNativeStackNavigator();

const NavContainer = () => {
  const { user } = useAppContext();

  const [fontsLoaded] = useFonts({
    light: require("../assets/fonts/Montserrat-Light.ttf"),
    medium: require("../assets/fonts/Montserrat-Medium.ttf"),
    regular: require("../assets/fonts/Montserrat-Regular.ttf"),
    semibold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    bold: require("../assets/fonts/Montserrat-Bold.ttf"),
    black: require("../assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && user) {
      await splashScreen.hideAsync();
    }
  }, [fontsLoaded, user]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        {/* navigation */}
        {!user || user === "undefined"
          ? unLoggedRoutes.map(({ name, component, headerShown }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{ headerShown: headerShown }}
              />
            ))
          : loggedRoutes.map(({ name, component, headerShown }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={{ headerShown: headerShown }}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
