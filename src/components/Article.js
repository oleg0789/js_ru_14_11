<<<<<<< HEAD
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
=======
import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'

function Article(props) {
    const { article, toggleOpen } = props
    return (
        <section>
            <h3 onClick = {toggleOpen}>{article.title}</h3>
            {getBody(props)}
        </section>
    )
}

Article.propTypes = {
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        comments: PropTypes.array,
        text: PropTypes.string
    }).isRequired
}
>>>>>>> 57576f2b2085247fceecc7b5053f3342c63669a5

function getBody(props) {
    const { article, isOpen } = props
    if (!isOpen) return null
    return (
        <div>
            <p>{article.text}</p>
            <CommentList comments = {article.comments} />
        </div>
    )
}


export default Article