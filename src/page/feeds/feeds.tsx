import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row } from 'reactstrap';
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
            <Container color="blue" fluid={true}>
                <Row xm="2" color="Green">
                    <NavigationBar />
                </Row>
            </Container>
        );
    }
}

export default Feeds;
