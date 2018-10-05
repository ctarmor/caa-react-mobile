import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

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

    public render() {
        return (
            <div>
                <Grid rows={3} cols={5}>
                    <Row className="show-grid">
                        Feeds page
                    <h2>id: {this.props.match.params.userid}</h2>
                        <Link to="/home">Home</Link>
                        <Col sm={6} md={3}>
                            <Row>c1r2</Row>
                            <Row>c1r3</Row>
                        </Col>
                        <Col>
                            <Row>c2r2</Row>
                            <Row>c2r3</Row>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code>{'<Col xs={12} md={8} />'};</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>{'<Col xs={6} md={4} />'}</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <code>{'<Col xs={6} md={4} />'}</code>
                        </Col>
                        <Col xs={6} md={4}>
                            <code>{'<Col xs={6} md={4} />'}</code>
                        </Col>
                        <Col xsHidden={false} md={4}>
                            <code>{'<Col xsHidden md={4} />'}</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col xs={6} xsOffset={6}>
                            <code>{'<Col xs={6} xsOffset={6} />'}</code>
                        </Col>
                    </Row>

                    <Row className="show-grid">
                        <Col md={6} mdPush={6}>
                            <code>{'<Col md={6} mdPush={6} />'}</code>
                        </Col>
                        <Col md={6} mdPull={6}>
                            <code>{'<Col md={6} mdPull={6} />'}</code>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Feeds;
