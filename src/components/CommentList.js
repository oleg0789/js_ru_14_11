<<<<<<< HEAD
import React, {Component} from 'react';
import Comment from './Comment';


class CommentList extends Component {
    constructor() {
        super()
        this.state = {
            showComments: false
        }
    }

    render() {
        const {commentsArr} = this.props;
        const commentToggleText = this.state.showComments ? "Скрыть комментарии" : "Показать коментарии"
        const CommentList = commentsArr.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        const Comments = this.state.showComments ? CommentList : null

        return (
            <div>
                <h4 onClick={this.toggleComments}>{ commentToggleText }</h4>
                <ul>
                    {Comments}
                </ul>
            </div>
        )

    }
    toggleComments = event => {
        this.setState({
            showComments : !this.state. showComments
        })
    }
}


export default CommentList;
=======
import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    render() {
        return (
            <div>
                {this.getButton()}
                {this.getList()}
            </div>
        )
    }

    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments || !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

export default toggleOpen(CommentList)
>>>>>>> 57576f2b2085247fceecc7b5053f3342c63669a5
