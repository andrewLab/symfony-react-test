import * as React from "react";
import Container from 'react-bootstrap/Container';
import {Col, Row} from "react-bootstrap";

import {GuestForm} from "./GuestForm";
import {Comment, CommentList} from "./Comments";

interface ComponentState {
    comments?: Comment[]
}

const baseUrl = "http://" + window.location.hostname;
const endpoints = {
    listComments: baseUrl + "/comment/list",
    storeComment: baseUrl + "/comment" // POST
};

export class Page extends React.Component<any, ComponentState> {
    state = {
        comments: [] as Comment[]
    };
    async componentDidMount() {
        let comments = await this.getComments();
        this.setState({
            comments: comments.reverse()
        });
    }
    addComment = async ({email, text}) => {
        let comment: Comment = new Comment();
        comment.email = email;
        comment.text = text;
        try {
            await this.persistComment(comment);
            this.setState((state: ComponentState) => ({comments: [comment].concat(state.comments)}));
        } catch (e) {
            alert(e.message);
        }
    };

    getComments = async () => {
        const response = await fetch(endpoints.listComments);
        return await response.json();
    };
    persistComment = async (comment: Comment) => {
        const response = await fetch(endpoints.storeComment, {
            method: "POST",
            body: JSON.stringify(comment)
        });
        return await response.json();
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
