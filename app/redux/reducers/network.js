// @flow

type State = {
  enabled: boolean
};

const initialState: State = { enabled: false };

export default function networkReducer(
  state: State = initialState,
  action: { type: string, enabled: boolean }
): State {
  switch (action.type) {
    case 'SET_NETWORK_ENABLED':
      return {
        enabled: action.enabled
      };
    default:
      return state;
  }
}
