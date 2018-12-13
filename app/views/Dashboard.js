// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {
  t: Function
};

class Dashboard extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Dashboard</Text>
      </View>
    );
  }
}

export default Dashboard;
