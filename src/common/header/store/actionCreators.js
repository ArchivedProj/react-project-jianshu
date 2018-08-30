import {INPUT_BLUR,INPUT_FOCUSED} from './actionTypes';
export const getInputFocusedAction = ()=>({
    type:INPUT_FOCUSED
});

export const getInputBlurAction = ()=>({
    type:INPUT_BLUR
});