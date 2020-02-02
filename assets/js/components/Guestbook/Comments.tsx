import * as React from "react";
import {Card} from "react-bootstrap";

export class Comment {
    email?: string;
    text?: string;
}

interface ComponentProps {
    comments: Comment[]
}

export class CommentList extends React.Component<ComponentProps, any>{
    render() {
        return this.props.comments.map((comment: Comment, index) => {
            return <Card body key={index}>
                <Card.Title>{comment.email}</Card.Title>
                <Card.Text>{comment.text}</Card.Text>
            </Card>
        })
    }
}
