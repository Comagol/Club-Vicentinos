import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import NewsScreen from '../screens/NewsScreen';
import MembershipScreen from '../screens/MembershipScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Noticias') {
            iconName = 'article';
          } else if (route.name === 'Membresía') {
            iconName = 'card-membership';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <Icon name={iconName} type="material" size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2089dc',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Noticias" 
        component={NewsScreen}
        options={{
          headerShown: true,
          headerTitle: 'Noticias del Club'
        }}
      />
      <Tab.Screen 
        name="Membresía" 
        component={MembershipScreen}
        options={{
          headerShown: true,
          headerTitle: 'Membresía'
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{
          headerShown: true,
          headerTitle: 'Mi Perfil'
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator; 