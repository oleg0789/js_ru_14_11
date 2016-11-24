import React, { PropTypes,  Component }  from 'react'
import Article from './Article'
import toggleElem from '../decorators/toggleElem'

class ArticleList extends Component {

    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const {articles, toggleElem, isElemOpened} = this.props
        return articles.map(article =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isOpen = {isElemOpened(article.id)}
                    toggleOpen = {toggleElem(article.id)}
                />
            </li>
        )

    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    openedId: PropTypes.number
}

export default toggleElem(ArticleList)

