import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as splashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { AppProvider } from "./context/appContext";
import { CountrySelection, Landing, Login, Register } from "./pages";

const Stack = createNativeStackNavigator();

const unLoggedRoutes = [
  { name: "Landing", component: Landing, headerShown: false },
  { name: "CountrySelection", component: CountrySelection, headerShown: false },
  { name: "Login", component: Login, headerShown: false },
  { name: "Register", component: Register, headerShown: false },
];

export default function App() {
  const [fontsLoaded] = useFonts({
    light: require("./assets/fonts/Montserrat-Light.ttf"),
    medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    regular: require("./assets/fonts/Montserrat-Regular.ttf"),
    semibold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    bold: require("./assets/fonts/Montserrat-Bold.ttf"),
    black: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await splashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {unLoggedRoutes.map(({ name, component, headerShown }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{ headerShown: headerShown }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
