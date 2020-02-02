import * as React from "react";

import Container from 'react-bootstrap/Container';
import {Button, Card, Col, Form, Row} from "react-bootstrap";

export class Page extends React.Component {
    render() {
        return <Container>
            <Row>
                <Col>
                    <h1>Guestbook</h1>
                    <Form>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group controlId="formComment">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Comments:</h2>
                    <Card body>
                        <Card.Title>Email</Card.Title>
                        <Card.Text>
                            Comment textingo
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>;
    }
}
