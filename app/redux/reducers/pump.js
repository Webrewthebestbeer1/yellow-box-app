// @flow

type State = {
  enabled: boolean,
  loading: boolean,
  error: ?string
};

const initialState: State = { enabled: false };

export default function pumpReducer(
  state: State = initialState,
  action: { type: string, enabled: boolean }
): State {
  switch (action.type) {
    case 'UPDATE_PUMP_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'UPDATE_PUMP_SUCCESS':
      return {
        ...state,
        loading: false,
        enabled: action.enabled
      };
    case 'UPDATE_PUMP_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}
