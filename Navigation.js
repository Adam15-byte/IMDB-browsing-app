import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TheBestTVshows from "./src/screens/TheBestTVshows";
import PopularScreen from "./src/screens/PopularScreen";
import TheBestMovies from "./src/screens/TheBestMovies";
import { COLORS } from "./src/consts/colors";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PopularScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.black,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopColor: COLORS.white,
          },
        }}
      >
        <Tab.Screen
          name="PopularScreen"
          component={PopularScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.container,
                  { backgroundColor: focused ? COLORS.black : COLORS.white },
                ]}
              >
                <MaterialIcons name="theater-comedy" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TheBestTVshows"
          component={TheBestTVshows}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.container,
                  { backgroundColor: focused ? COLORS.black : COLORS.white },
                ]}
              >
                <MaterialIcons name="theaters" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="TheBestMovies"
          component={TheBestMovies}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View
                style={[
                  styles.container,
                  { backgroundColor: focused ? COLORS.black : COLORS.white },
                ]}
              >
                <MaterialIcons name="grade" size={24} color={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
