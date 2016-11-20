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