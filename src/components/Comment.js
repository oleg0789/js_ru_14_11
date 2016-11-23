<<<<<<< HEAD
import React, {Component} from 'react';

class Comment extends Component {

    render() {
        const {comment} = this.props;
        return (
            <div>
                <h4>{comment.user}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }
}

export default Comment;
=======
import React, { PropTypes } from 'react'

function Comment(props) {
    const { title, text, user } = props.comment
    const header = title && <h4>{title}</h4>
    return (
        <div>
            {header}
            <p>{text} <b>by {user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.object.isRequired
}

export default Comment
>>>>>>> 57576f2b2085247fceecc7b5053f3342c63669a5
