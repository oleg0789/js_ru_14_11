import React, { Component, PropTypes } from 'react'
import {addComment} from '../AC/comments'
import { connect } from 'react-redux'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', 'adding comment')
        this.setState({
            user: '',
            text: ''
        })


        const {addComment, articleId} = this.props

        const payload = {
            comment: this.state,
            articleId: articleId
        }


        addComment(payload)

    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(null, {addComment})(NewCommentForm)