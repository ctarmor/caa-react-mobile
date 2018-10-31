import Octicon from '@githubprimer/octicons-react'
import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as actions from '../../actions/NavButtonAction';
import { INavigationDefinition } from './ButtonDictionary';

export interface INavButtonProps {
    def: INavigationDefinition,
    size: number,
}

class NavButton extends React.Component<INavButtonProps> {
    constructor(props: INavButtonProps) {
        super(props);
    }

    public render() {
        const p = this.props.def;
        const size = this.props.size;

        return (
            <Button color={p.color} href={p.href} >
                <Octicon icon={p.icon} size={size} />
            </Button>
        );
    }
}

export function mapStateToProps(state: any) {
    return {
        size: actions.getButtonSize(state)
    }
}

export default connect(mapStateToProps)(NavButton);

