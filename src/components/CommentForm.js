import React, {Component} from 'react'

class CommentForm extends Component {
    constructor() {
        super()
        this.state = {
            user: '',
            title: '',
            comment: ''
        }
    }

    render() {
        return(
            <form>
                <div>
                    <label htmlFor="">User</label>
                    <input type="text" value={this.state.user} name="user" onChange={this.handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleInputChange}  />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <textarea name="comment" id="" cols="20" rows="5" value={this.state.comment} onChange={this.handleInputChange} />

                </div>
                <p>User: {this.state.user}</p>
                <p>Title: {this.state.title}</p>
                <p>Comment: {this.state.comment}</p>
            </form>
        )
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

}

export default CommentForm