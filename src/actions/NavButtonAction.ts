import * as actions from '../constants/NavButtonConstant'

export interface INavButtonIncrementSize {
    type: actions.NAVBUTTON_INCREMENT_SIZE;
}

export interface INavButtonDecrementSize {
    type: actions.NAVBUTTON_DECREMENT_SIZE;
}

export function navButtonIncrementSize(): INavButtonIncrementSize {
    return {
        type: actions.NAVBUTTON_INCREMENT_SIZE
    }
}

export function navButtonDecrementSize(): INavButtonDecrementSize {
    return {
        type: actions.NAVBUTTON_DECREMENT_SIZE
    }
}

export type AllActions = INavButtonDecrementSize | INavButtonIncrementSize;

export const NavButtonReducer = 'navButtonReducer';
export const NavButtonSize = 'size';

