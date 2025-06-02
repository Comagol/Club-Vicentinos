import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import MembershipScreen from '../screens/MembershipScreen';
import NewsScreen from '../screens/NewsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = 'person';
          } else if (route.name === 'Membership') {
            iconName = 'card';
          } else if (route.name === 'News') {
            iconName = 'newspaper';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#111518',
        tabBarInactiveTintColor: '#60778a',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Membership" component={MembershipScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs; 