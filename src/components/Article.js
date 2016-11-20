import React, { Component } from 'react'
import CommentList from './CommentList';
class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        const comments = article.comments;

        let commentList = null;
        if (comments && comments.length > 0) {
            commentList = <CommentList commentsArr = {article.comments} />
        }

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {commentList}
            </section>

        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article