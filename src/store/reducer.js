import { INPUT_BLUR, INPUT_FOCUSED } from './actionTypes';

const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === INPUT_FOCUSED) {
        return {
            focused: true
        }
    }
    if (action.type === INPUT_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}