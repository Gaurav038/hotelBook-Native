import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import Home from "./screens/Home";
import Saved from "./screens/Saved";
import Booking from "./screens/Booking";
import Profile from "./screens/Profile";

const { View, Text, StyleSheet } = require("react-native");

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "Home", headerShown: false, tabBarIcon: ({focused}) => focused ? 
            (
                <Entypo name="home" size={24} color="#003588" />
            ):
            (
                <AntDesign name="home" size={24} color="black" />
            )
        }}
        />
        <Tab.Screen
          name="Save"
          component={Saved}
          options={{ tabBarLabel: "Saved", headerShown: false, tabBarIcon: ({focused}) => focused ? 
            (
                <AntDesign name="heart" size={24} color="#003588" />            
            ):
            (
                <AntDesign name="hearto" size={24} color="black" />            
            )
        }}
        />
        <Tab.Screen
          name="Notification"
          component={Booking}
          options={{ tabBarLabel: "Notification", headerShown: false, tabBarIcon: ({focused}) => focused ? 
            (
                <Ionicons name="notifications-sharp" size={24} color="#003588" />            
            ):
            (
<               Ionicons name="notifications-outline" size={24} color="black" />           
            )
        }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ tabBarLabel: "Profile", headerShown: false, tabBarIcon: ({focused}) => focused ? 
            (
                <FontAwesome name="user-circle-o" size={24} color="#003588" />            
            ):
            (
                <FontAwesome name="user-o" size={24} color="black" />            
            )
        }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
