import React, { Component }  from 'react'
import Article from './Article'

<<<<<<< HEAD

function ArticleList(props) {
    const { articles } = props
=======
class ArticleList extends Component {
    state = {
        openArticleId: null
    }
>>>>>>> 57576f2b2085247fceecc7b5053f3342c63669a5

    render() {
        const { articles } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == this.state.openArticleId}
                    toggleOpen = {this.openArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: id
        })
    }
}

export default ArticleList