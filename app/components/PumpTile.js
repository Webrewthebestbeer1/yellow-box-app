// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import PumpIcon from '../svg/pump';
import colors from '../style/colors';
import { updatePump } from '../redux/actions/pump';

function mapStateToProps(state) {
  return {
    pump: state.pump
  };
}

type Props = {
  t: Function,
  pump: Object
};

class PumpTile extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: this.props.pump.enabled
              ? colors.blue
              : colors.white
          }
        ]}
        onPress={() => {
          this.props.dispatch(updatePump(!this.props.pump.enabled));
        }}
      >
        <PumpIcon
          style={styles.icon}
          fill={this.props.pump.enabled ? colors.white : colors.blue}
        />
        <Text style={styles.text}>Pump</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    aspectRatio: 1,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ddd',
    shadowRadius: 2,
    shadowColor: '#afafaf',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  icon: {
    marginTop: 20
  },
  text: {
    marginBottom: 20
  }
});

export default connect(mapStateToProps)(PumpTile);
