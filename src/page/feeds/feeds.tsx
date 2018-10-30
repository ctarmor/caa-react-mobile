import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import IncreaseButtonControl from 'src/controls/IncreaseButtonsMap';
import NavigationBar from '../../components/NavigationBar/NavigationBar';


class Feeds extends React.Component<RouteComponentProps<any>> {


    public componentDidMount() {
        // tslint:disable-next-line:no-console
        console.info(">> Feeds componentDidMount");
    }

    public componentWillUnmount() {
        // tslint:disable-next-line:no-console
        console.info(">> Feeds componentWillMount");
    }


    // https://react-bootstrap.github.io/layout/grid/
    // https://reactstrap.github.io/components/alerts/

    public render() {
        return (
            <div>
                <IncreaseButtonControl/>
                <NavigationBar/>
            </div>
        );
    }
}

export default Feeds;
