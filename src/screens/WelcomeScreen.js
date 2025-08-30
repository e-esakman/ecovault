import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ onGetStarted }) => {
  return (
    <LinearGradient
      colors={['#10b981', '#059669', '#047857']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.welcomeContent}>
            <Text style={styles.appTitle}>EcoVault</Text>
            <View style={styles.logoContainer}>
              <Text style={styles.logoEmoji}>🌱</Text>
            </View>
            <Text style={styles.tagline}>
              Track your eco-actions{'\n'}
              Earn rewards{'\n'}
              Join your community
            </Text>
          </View>
          
          <View style={styles.welcomeActions}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={onGetStarted}
            >
              <Text style={styles.buttonText}>Get started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },
  welcomeContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 40,
    textAlign: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoEmoji: {
    fontSize: 60,
  },
  tagline: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 32,
    opacity: 0.9,
  },
  welcomeActions: {
    paddingBottom: 20,
  },
  getStartedButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonText: {
    color: '#10b981',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default WelcomeScreen;