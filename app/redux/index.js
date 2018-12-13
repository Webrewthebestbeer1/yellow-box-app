// @flow

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import appState from './reducers/appState';
// import location, { locationBlacklist } from './location';
import network from './reducers/network';
import heat from './reducers/heat';
import pump from './reducers/pump';

const rootReducer = combineReducers({
  appState,
  network,
  heat,
  pump
});

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['appState', 'network']
  // transforms: [locationBlacklist]
};

export default persistReducer(persistConfig, rootReducer);
