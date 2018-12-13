import { HEAT_URL } from '../../env/url';

export function updateHeat(enabled: boolean) {
  return dispatch => {
    dispatch(updateHeatBegin());
    dispatch(updateHeatSuccess(enabled));
  };
}

export const updateHeatBegin = () => ({
  type: 'UPDATE_HEAT_BEGIN'
});

export const updateHeatSuccess = enabled => ({
  type: 'UPDATE_HEAT_SUCCESS',
  enabled
});

export const updateHeatFailure = error => ({
  type: 'UPDATE_HEAT_FAILURE',
  payload: { error }
});
