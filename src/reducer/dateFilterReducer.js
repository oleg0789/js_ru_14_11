import {DATE_FILTER} from '../constants'
import {articles} from '../fixtures'

export default (articles = articles, action) => {
    const {payload, type} = action

    switch(type) {
        case DATE_FILTER:
            return articles.filter( article => article.date > payload.from && article.date < payload.to )
    }
    return articles
}