import Octicon from '@githubprimer/octicons-react'
import * as React from 'react';
import { Button } from 'reactstrap';
import { INavigationDefinition } from './ButtonDictionary';


export interface INavButtonProps {
    def: INavigationDefinition
}

class NavButton extends React.Component<INavButtonProps, {}> {
    constructor(props: INavButtonProps) {
        super(props);
    }

    public render() {
        const p = this.props.def;

        return (
            <Button color={p.color} href={p.href} >
                <Octicon icon={p.icon} size={"small"} />
            </Button>
        );
    }
}

export default NavButton;
