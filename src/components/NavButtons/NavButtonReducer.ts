import { fromJS } from "immutable";
import { NavButtonSize } from 'src/actions/NavButtonAction';
import { NAVBUTTON_DECREMENT_SIZE, NAVBUTTON_INCREMENT_SIZE } from '../../constants/NavButtonConstant';

export const NavButtonState = fromJS({
    size: 35,
});


export function navButtonReducer(state = NavButtonState, action: any) {
    const sz = state.get(NavButtonSize);

    switch (action.type) {
        case NAVBUTTON_INCREMENT_SIZE:
            return state
                .set(NavButtonSize, sz + 5);
        case NAVBUTTON_DECREMENT_SIZE:
            return state
                .set(NavButtonSize, sz - 5);
    }
    return state;
}

