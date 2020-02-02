import {Button, Form} from "react-bootstrap";
import * as React from "react";

interface ComponentProps {
    onSubmit: Function
}

interface ComponentState {
    email: string;
    text: string;
}

export class GuestForm extends React.Component<ComponentProps, ComponentState> {
    protected initialState = {
        email: '',
        text: ''
    };

    state = this.initialState;

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState(this.initialState);
    };
    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value} as ComponentState);
    };

    render() {
        return <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formText">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="text"
                        value={this.state.text}
                        rows="3"
                        onChange={this.handleInputChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>;
    }
}
