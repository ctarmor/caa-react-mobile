import * as React from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';


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
            <Navbar color="light" light={true} expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar={true}>
                    <Nav className="ml-auto" navbar={true}>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav={true} inNavbar={true}>
                            <DropdownToggle nav={true} caret={true}>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right={true}>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider={true} />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
