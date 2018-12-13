// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PumpTile from '../components/HeatTile';
import HeatTile from '../components/PumpTile';

type Props = {
  t: Function
};

class Control extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 20 }}>YellowBox</Text>
        </View>
        <View style={styles.tileRow}>
          <PumpTile />
          <HeatTile />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  header: {
    marginTop: 40,
    marginBottom: 20
  },
  tileRow: {
    flex: 1,
    flexDirection: 'row'
  }
});

export default Control;
