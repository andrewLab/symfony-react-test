import * as React from "react";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";

import {GuestForm} from "./GuestForm";
import {Comment, CommentList} from "./Comments";

interface ComponentState {
    comments?: Comment[]
}

export class Page extends React.Component<any, ComponentState> {
    state = {
        comments: [] as Comment[]
    };
    addComment = ({email, text}) => {
        let comment: Comment = new Comment();
        comment.email = email;
        comment.text = text;
        this.setState((state: ComponentState) => ({comments: state.comments.concat(comment)}));
    };

    render() {
        return <Container>
            <Row>
                <Col>
                    <h1>Guestbook</h1>
                    <GuestForm onSubmit={this.addComment}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Comments:</h2>
                    <CommentList comments={this.state.comments}/>
                </Col>
            </Row>
        </Container>;
    }
}
