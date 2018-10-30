import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as actions from '../actions/NavButtonAction';
import { IncreaseButtonControl } from './IncreaseButtonControl';

export function mapStateToProps(state: any) {
    return {
        // Empty to make connect() work
    }
} 

export function mapDispatchToProps(dispatch: Dispatch<actions.AllActions>) {
    return {
        onDecrement: () => dispatch(actions.navButtonDecrementSize()),
        onIncrement: () => dispatch(actions.navButtonIncrementSize()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncreaseButtonControl);
