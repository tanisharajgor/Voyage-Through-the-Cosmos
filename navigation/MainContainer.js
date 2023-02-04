import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import PlanetScreen from './screens/PlanetsScreen';
import StarScreen from './screens/StarsScreen';
import VRScreen from './screens/VRScreen';

//Screen names
const homeName = 'Home';
const planetName = 'Planets';
const starName = 'Stars';
const vrName = 'VR';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

export default function MainContainer() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == planetName) {
              iconName = focused ? 'planet' : 'planet-outline';
            } else if (rn == starName) {
              iconName = focused ? 'sunny' : 'sunny-outline';
            } else if (rn == vrName) {
              iconName = focused ? 'videocam' : 'videocam-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 100,
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4288ff',
          inactiveTintColor: 'white',
          labelStyle: { paddingBottom: 5, fontSize: 10, color: 'white' },
          style: { padding: 10, height: 70 },
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={planetName} component={PlanetScreen} />
        <Tab.Screen name={starName} component={StarScreen} />
        <Tab.Screen name={vrName} component={VRScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
