import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import SocialScreen from './src/screens/SocialScreen';
import UploadScreen from './src/screens/UploadScreen';
import OrganizationScreen from './src/screens/OrganizationScreen';

// Import components
import TabIcon from './src/components/TabIcon';

const Tab = createBottomTabNavigator();

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (showWelcome) {
    return (
      <SafeAreaProvider>
        <WelcomeScreen onGetStarted={() => {
          setShowWelcome(false);
          setShowLogin(true);
        }} />
        <StatusBar style="light" />
      </SafeAreaProvider>
    );
  }

  if (showLogin && !isLoggedIn) {
    return (
      <SafeAreaProvider>
        <LoginScreen onLogin={() => {
          setShowLogin(false);
          setIsLoggedIn(true);
        }} />
        <StatusBar style="light" />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: '#10b981',
            tabBarInactiveTintColor: '#6b7280',
            tabBarLabelStyle: styles.tabLabel,
          }}
        >
          <Tab.Screen
            name="Home"
            component={DashboardScreen}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="🏠" color={color} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Social"
            component={SocialScreen}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="👥" color={color} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Upload"
            component={UploadScreen}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="📁" color={color} focused={focused} />
              ),
            }}
          />
          <Tab.Screen
            name="Organizations"
            component={OrganizationScreen}
            options={{
              tabBarIcon: ({ color, focused }) => (
                <TabIcon name="🏢" color={color} focused={focused} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingBottom: 8,
    paddingTop: 8,
    height: 70,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
});
