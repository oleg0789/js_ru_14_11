import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

export default (articlesState = normalizedArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:

            const leftArticles = articlesState.filter(article => article.id != payload.articleId)
            // const articles = leftArticles.reduce((acc, article) => {
            //     return acc.set(article, article)
            // }, new Map({}))


            return leftArticles

        case ADD_COMMENT:

         //  return articlesState.map(article => Object.assign(article, article.title = 'hui'))
             //  const parentArticle = articlesState.filter(article => article.id == payload.articleId)

            const articleWithNewComment = articlesState.filter(article => article.id == payload.articleId)

            //const updatedArticle = articleWithNewComment.comments.push(payload.comment.id)

            const commentsArray = articleWithNewComment[0].comments
            console.dir(articleWithNewComment)

           // debugger

            commentsArray.push(payload.comment.id)

            articleWithNewComment[0].comments = commentsArray

            const articleWithSameComments = articlesState.filter(article => article.id != payload.articleId)

            return articleWithSameComments.concat(articleWithNewComment)



             // return articlesState.map(article => {
             //     if (article.id == payload.articleId)  {
             //         //debugger
             //         Object.assign(article, article,  article.comments.push(payload.comment.id))
             //         }
             //     else {
             //         return article
             //     }
             //
             // })

    }

    return articlesState
}

//
// const defaultComments = normalizedComments.reduce((acc, comment) => {
//     return acc.set(comment.id, comment)
// }, new Map({}))