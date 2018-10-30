import expect from 'expect';
import navButtonReducer from '../NavButtonReducer';
import { fromJS } from 'immutable';


describe('navButtonReducer', () => {
    let state;
    beforeEach(() => {
        state = fromJS({
            size: 1,
        });
    });

    it('should return the initial state', () => {
        const expectedResult = state;
        expect(navButtonReducer(undefined, {})).toEqual(expectedResult);
    });

    it('should handle the changeUsername action correctly', () => {
        const fixture = 2;
        const expectedResult = state.set('size', fixture);

        expect(navButtonReducer(state, changeUsername(fixture))).toEqual(expectedResult);
    });
});