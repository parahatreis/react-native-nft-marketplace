import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

const FocusedStatusBar = ({ backgroundColor, ...props }) => {
  const isFocused = useIsFocused();

  return isFocused ? (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  ) : null;
}

// Status bar Height (differentiate according to platform)
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 48 : StatusBar.currentHeight;

// Styles
const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT
  }
});

export default FocusedStatusBar