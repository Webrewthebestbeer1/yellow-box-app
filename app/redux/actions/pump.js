import { HEAT_URL } from '../../env/url';

export function updatePump(enabled: boolean) {
  return dispatch => {
    dispatch(updatePumpBegin());
    dispatch(updatePumpSuccess(enabled));
  };
}

export const updatePumpBegin = () => ({
  type: 'UPDATE_PUMP_BEGIN'
});

export const updatePumpSuccess = enabled => ({
  type: 'UPDATE_PUMP_SUCCESS',
  enabled
});

export const updatePumpFailure = error => ({
  type: 'UPDATE_PUMP_FAILURE',
  payload: { error }
});
