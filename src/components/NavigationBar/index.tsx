import * as React from 'react';


class NavigationBar extends React.Component {

    public componentDidMount() {
        // tslint:disable-next-line:no-console
        console.info(">> NavigationBar componentDidMount");
    }

    public componentWillUnmount() {
        // tslint:disable-next-line:no-console
        console.info(">> NavigationBar componentWillMount");
    }


    public render() {
        return (
            <div>
                nav bar
            </div>
        );
    }
}

export default NavigationBar;
