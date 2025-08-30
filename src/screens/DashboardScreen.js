import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

const DashboardScreen = () => {
  const [points, setPoints] = useState(450);
  const [weeklyStreak, setWeeklyStreak] = useState(5);

  const earnPoints = (action, pointsToAdd) => {
    setPoints(prev => prev + pointsToAdd);
    Alert.alert(
      'Points Earned!',
      `You earned ${pointsToAdd} points for ${action}!`,
      [{ text: 'OK' }]
    );
  };

  const renderStreakDots = () => {
    return Array.from({ length: 7 }, (_, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          index < weeklyStreak ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  return (
    <LinearGradient
      colors={['#10b981', '#059669']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good morning!</Text>
          </View>

          <View style={styles.dashboardCard}>
            <Text style={styles.cardTitle}>Dashboard</Text>
            <View style={styles.pointsDisplay}>
              <Text style={styles.pointsNumber}>{points}</Text>
              <Text style={styles.pointsLabel}>pts</Text>
            </View>
            <View style={styles.weeklyStreak}>
              <Text style={styles.streakLabel}>Weekly streak</Text>
              <View style={styles.streakDots}>
                {renderStreakDots()}
              </View>
            </View>
          </View>

          <View style={styles.impactCard}>
            <Text style={styles.cardTitle}>📊 This Week's Impact</Text>
            <View style={styles.impactStats}>
              <View style={styles.impactItem}>
                <Text style={styles.impactIcon}>🌍</Text>
                <View style={styles.impactContent}>
                  <Text style={styles.impactLabel}>CO₂ Saved</Text>
                  <Text style={styles.impactValue}>12.5kg</Text>
                  <Text style={styles.impactChange}>+2.1kg</Text>
                </View>
              </View>
              <View style={styles.impactItem}>
                <Text style={styles.impactIcon}>♻️</Text>
                <View style={styles.impactContent}>
                  <Text style={styles.impactLabel}>Items Recycled</Text>
                  <Text style={styles.impactValue}>23</Text>
                  <Text style={styles.impactChange}>+5</Text>
                </View>
              </View>
              <View style={styles.impactItem}>
                <Text style={styles.impactIcon}>🚲</Text>
                <View style={styles.impactContent}>
                  <Text style={styles.impactLabel}>Green Commutes</Text>
                  <Text style={styles.impactValue}>5</Text>
                  <Text style={styles.impactChange}>+2</Text>
                </View>
              </View>
              <View style={styles.impactItem}>
                <Text style={styles.impactIcon}>🌳</Text>
                <View style={styles.impactContent}>
                  <Text style={styles.impactLabel}>Trees Planted</Text>
                  <Text style={styles.impactValue}>2</Text>
                  <Text style={styles.impactChange}>+1</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.actionItems}>
            <TouchableOpacity
              style={styles.actionItem}
              onPress={() => earnPoints('recycle', 10)}
            >
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>♻️</Text>
                <Text style={styles.actionText}>Recycle</Text>
              </View>
              <Text style={styles.actionPoints}>+10 pts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
              onPress={() => earnPoints('bike', 20)}
            >
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>🚲</Text>
                <Text style={styles.actionText}>I biked to work</Text>
              </View>
              <Text style={styles.actionPoints}>+20 pts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
              onPress={() => earnPoints('plant', 50)}
            >
              <View style={styles.actionContent}>
                <Text style={styles.actionIcon}>🌳</Text>
                <Text style={styles.actionText}>I planted a tree</Text>
              </View>
              <Text style={styles.actionPoints}>+50 pts</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  dashboardCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  impactCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  pointsDisplay: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  pointsNumber: {
    fontSize: 48,
    fontWeight: '800',
    color: '#10b981',
  },
  pointsLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: '#6b7280',
    marginLeft: 8,
  },
  weeklyStreak: {
    alignItems: 'center',
  },
  streakLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  streakDots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  activeDot: {
    backgroundColor: '#10b981',
  },
  inactiveDot: {
    backgroundColor: '#e5e7eb',
  },
  impactStats: {
    gap: 16,
  },
  impactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
  },
  impactIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  impactContent: {
    flex: 1,
  },
  impactLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  impactValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  impactChange: {
    fontSize: 12,
    color: '#10b981',
    fontWeight: '500',
  },
  actionItems: {
    gap: 12,
    paddingBottom: 20,
  },
  actionItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  actionPoints: {
    fontSize: 14,
    fontWeight: '600',
    color: '#10b981',
  },
});

export default DashboardScreen;