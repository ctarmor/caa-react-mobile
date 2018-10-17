import * as React from 'react';
import { Navbar } from 'reactstrap';

import { NavigationButtons } from '../NavButtons/ButtonDictionary';
import NavButton from '../NavButtons/NavButton';

export interface INavigationBarProps {
    ptoggle?: boolean
}

export interface INavigationBarState {
    isOpen?: boolean;
}




// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {

    constructor(props: INavigationBarProps) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: true
        };
    }

    public toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public componentDidMount() {
        // tslint:disable-next-line:no-console
        console.info(">> NavigationBar componentDidMount");
    }

    public componentWillUnmount() {
        // tslint:disable-next-line:no-console
        console.info(">> NavigationBar componentWillMount");
    }


    // https://reactstrap.github.io/components/navbar/


    public render() {
        return (
            <Navbar color="blue" light={true} expand="md">
                {
                    NavigationButtons.navbuttons.map((b, i) => {
                        return (
                            // tslint:disable-next-line:jsx-key
                            <NavButton def={b} />
                        );
                    })
                }
            </Navbar>
        );
    }
}

export default NavigationBar;
