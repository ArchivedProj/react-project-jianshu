import { actionTypes } from './index';

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === actionTypes.INPUT_FOCUSED) {
        return {
            focused: true
        }
    }
    if (action.type === actionTypes.INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}