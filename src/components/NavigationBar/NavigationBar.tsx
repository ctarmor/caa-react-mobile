import * as React from 'react';
// ßimport { GridLayout } from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';
// import { Col, Container, Row } from 'reactstrap';
import { INavigationDefinition, NavigationButtons } from '../NavButtons/ButtonDictionary';
import NavButton from '../NavButtons/NavButton';

export interface INavigationBarProps {
    ptoggle?: boolean
}

export interface INavigationBarState {
    isOpen?: boolean;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

// https://github.com/STRML/react-grid-layout#providing-grid-width
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

    // Container: https://reactstrap.github.io/components/layout/
    public mapFunction = (b: INavigationDefinition, i: number) =>
        <NavButton def={b} key={i} />

    public render() {
        return (
            <div>
                <ResponsiveGridLayout width={200}>
                    {
                        NavigationButtons.navbuttons.map(this.mapFunction)
                    }
                </ResponsiveGridLayout>
            </div>
        );
    }
}

export default NavigationBar;
