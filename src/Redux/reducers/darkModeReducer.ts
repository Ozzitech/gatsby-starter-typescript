import { TOOGLE_DARK_MODE } from 'Redux/actionTypes';

type InitialStateType = {
  isDarkMode: boolean;
};

const InitialState: InitialStateType = {
  isDarkMode: false,
};

const DarkModeReducer: any = (state = InitialState, action: any) => {
  switch (action.type) {
    case TOOGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};
export { DarkModeReducer };
