import React from "react";
import { Text, View } from "react-native";
import { useAppContext } from "../context/appContext";
import { CountrySelection, Home, Landing, Login, Register } from "../pages";

const unLoggedRoutes = [
  { name: "Landing", component: Landing, headerShown: false },
  { name: "CountrySelection", component: CountrySelection, headerShown: false },
  { name: "Login", component: Login, headerShown: false },
  { name: "Register", component: Register, headerShown: false },
];

const loggedRoutes = [{ name: "home", component: Home, headerShown: false }];

const AllRoutesHandler = () => {
  const { user } = useAppContext();

  console.log(user);

  return (
    <>
      {!user
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
    </>
  );
};

export default AllRoutesHandler;
