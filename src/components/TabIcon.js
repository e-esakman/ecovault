import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TabIcon = ({ name, color, focused }) => {
  return (
    <Text style={[styles.icon, { opacity: focused ? 1 : 0.6 }]}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});

export default TabIcon;