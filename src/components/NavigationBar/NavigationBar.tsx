import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { ColumnProps } from 'reactstrap/lib/Col';
import { INavigationDefinition, NavigationButtons } from '../NavButtons/ButtonDictionary';
import NavButton from '../NavButtons/NavButton';

export interface INavigationBarProps {
    ptoggle?: boolean
}

export interface INavigationBarState {
    isOpen?: boolean;
}

// const ResponsiveGridLayout = WidthProvider(Responsive);

// https://github.com/STRML/react-grid-layout#providing-grid-width
// https://www.typescriptlang.org/docs/handbook/react-&-webpack.html

class NavigationBar extends React.Component<INavigationBarProps, INavigationBarState> {


    // https://reactstrap.github.io/components/navbar/

    // Container: https://reactstrap.github.io/components/layout/


    public colProps: ColumnProps = { };

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


    public mapFunction = (b: INavigationDefinition, i: number) =>
        <Col xl={this.colProps} lg={this.colProps} md={this.colProps} sm={this.colProps}  >
            <NavButton def={b} key={i}/>
        </Col>

    public render() {
        return (
            <Container fluid={false}>
                <Row noGutters={true}>
                    {
                        NavigationButtons.navbuttons.map(this.mapFunction)
                    }
                </Row>
            </Container>
        );
    }
}

export default NavigationBar;
