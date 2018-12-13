// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import HeatIcon from '../svg/heat';
import colors from '../style/colors';
import { updateHeat } from '../redux/actions/heat';

function mapStateToProps(state) {
  return {
    heat: state.heat
  };
}

type Props = {
  t: Function,
  heat: Object
};

class HeatTile extends Component<Props> {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.container,
          {
            backgroundColor: this.props.heat.enabled
              ? colors.blue
              : colors.white
          }
        ]}
        onPress={() => {
          this.props.dispatch(updateHeat(!this.props.heat.enabled));
        }}
      >
        <HeatIcon
          style={styles.icon}
          fill={this.props.heat.enabled ? colors.white : colors.blue}
        />
        <Text style={styles.text}>Heat</Text>
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

export default connect(mapStateToProps)(HeatTile);
