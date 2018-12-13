// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
  t: Function
};

class LoadingPersistView extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Persisting data...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default LoadingPersistView;
