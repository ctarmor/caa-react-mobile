import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import NavigationBar from '../../components/NavigationBar';



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
            <Container fluid={true}>
                <Row>
                    <Col>
                        Test Page
                    </Col>
                    <Col>
                        <h2>id: {this.props.match.params.userid}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/home">Home</Link>
                    </Col>
                </Row>
                <Row>
                    <NavigationBar/>
                </Row>
            </Container>
        );
    }
}

export default Feeds;
