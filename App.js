import React, { Component } from 'react';
import { AppState, NetInfo, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { TabNavigator } from './app/navigation/AppNavigator';
import LoadingPersistView from './app/views/LoadingPersistView';
import { store, persistor } from './app/redux/configureStore';

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    persistor.dispatch({ type: 'REHYDRATE' });
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={LoadingPersistView} persistor={persistor}>
          <TabNavigator style={styles.container} />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});
