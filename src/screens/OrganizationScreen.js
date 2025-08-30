import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OrganizationScreen = () => {
  const [showMap, setShowMap] = useState(false);

  const organizations = [
    {
      id: 1,
      name: 'Green Earth Foundation',
      icon: '🌳',
      distance: '0.8 km away',
      status: 'Active',
      statusColor: '#10b981',
      event: {
        title: 'Community Tree Planting',
        time: 'Today, 2:00 PM',
        participants: 12,
      },
    },
    {
      id: 2,
      name: 'Ocean Cleanup Initiative',
      icon: '🏖️',
      distance: '1.2 km away',
      status: 'Active',
      statusColor: '#10b981',
      event: {
        title: 'Beach Cleanup Drive',
        time: 'Tomorrow, 9:00 AM',
        participants: 8,
      },
    },
    {
      id: 3,
      name: 'Recycle Right Community',
      icon: '♻️',
      distance: '2.1 km away',
      status: 'Upcoming',
      statusColor: '#f59e0b',
      event: {
        title: 'Neighborhood Recycling Drive',
        time: 'This Weekend',
        participants: 5,
      },
    },
  ];

  const joinEvent = (orgName) => {
    Alert.alert(
      'Event Joined!',
      `You've successfully joined the event at ${orgName}!`,
      [{ text: 'OK' }]
    );
  };

  const getDirections = (orgName) => {
    Alert.alert(
      'Directions',
      `Opening directions to ${orgName}...`,
      [{ text: 'OK' }]
    );
  };

  const toggleMapView = () => {
    setShowMap(!showMap);
  };

  const renderMapView = () => (
    <View style={styles.mapContainer}>
      <View style={styles.mapPlaceholder}>
        <View style={styles.mapContent}>
          <View style={[styles.mapPin, { top: '30%', left: '40%' }]}>
            <Text style={styles.pinIcon}>🌳</Text>
            <Text style={styles.pinLabel}>Tree Planting</Text>
          </View>
          <View style={[styles.mapPin, { top: '60%', left: '70%' }]}>
            <Text style={styles.pinIcon}>🏖️</Text>
            <Text style={styles.pinLabel}>Beach Cleanup</Text>
          </View>
          <View style={[styles.mapPin, { top: '45%', left: '25%' }]}>
            <Text style={styles.pinIcon}>♻️</Text>
            <Text style={styles.pinLabel}>Recycling Drive</Text>
          </View>
        </View>
        <View style={styles.mapControls}>
          <TouchableOpacity style={styles.mapButton} onPress={toggleMapView}>
            <Text style={styles.mapButtonText}>📋 List View</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderOrganization = (org) => (
    <View key={org.id} style={styles.orgCard}>
      <View style={styles.orgHeader}>
        <Text style={styles.orgIcon}>{org.icon}</Text>
        <View style={styles.orgInfo}>
          <Text style={styles.orgName}>{org.name}</Text>
          <Text style={styles.orgDistance}>{org.distance}</Text>
        </View>
        <View style={[styles.orgStatus, { backgroundColor: org.statusColor }]}>
          <Text style={styles.orgStatusText}>{org.status}</Text>
        </View>
      </View>

      <View style={styles.orgEvent}>
        <Text style={styles.eventTitle}>{org.event.title}</Text>
        <View style={styles.eventDetails}>
          <Text style={styles.eventTime}>📅 {org.event.time}</Text>
          <Text style={styles.eventParticipants}>👥 {org.event.participants} joined</Text>
        </View>
      </View>

      <View style={styles.orgActions}>
        <TouchableOpacity
          style={styles.joinButton}
          onPress={() => joinEvent(org.name)}
        >
          <Text style={styles.joinButtonText}>Join Event</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.directionsButton}
          onPress={() => getDirections(org.name)}
        >
          <Text style={styles.directionsButtonText}>📍 Directions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Organizations</Text>
        <TouchableOpacity style={styles.mapToggle} onPress={toggleMapView}>
          <Text style={styles.mapToggleText}>🗺️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationHeader}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationText}>Close to you</Text>
      </View>

      {showMap ? (
        renderMapView()
      ) : (
        <ScrollView style={styles.organizationList} showsVerticalScrollIndicator={false}>
          {organizations.map(renderOrganization)}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  mapToggle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapToggleText: {
    fontSize: 18,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  locationIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  mapContainer: {
    flex: 1,
    margin: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#e5e7eb',
    position: 'relative',
  },
  mapContent: {
    flex: 1,
    position: 'relative',
  },
  mapPin: {
    position: 'absolute',
    alignItems: 'center',
  },
  pinIcon: {
    fontSize: 24,
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  pinLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1f2937',
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 4,
  },
  mapControls: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  mapButton: {
    backgroundColor: '#10b981',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  mapButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  organizationList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  orgCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orgHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  orgIcon: {
    fontSize: 32,
    marginRight: 12,
  },
  orgInfo: {
    flex: 1,
  },
  orgName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  orgDistance: {
    fontSize: 14,
    color: '#6b7280',
  },
  orgStatus: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  orgStatusText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  orgEvent: {
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  eventDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventTime: {
    fontSize: 14,
    color: '#6b7280',
  },
  eventParticipants: {
    fontSize: 14,
    color: '#6b7280',
  },
  orgActions: {
    flexDirection: 'row',
    gap: 12,
  },
  joinButton: {
    flex: 1,
    backgroundColor: '#10b981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  directionsButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  directionsButtonText: {
    color: '#1f2937',
    fontWeight: '600',
  },
});

export default OrganizationScreen;