import {DATE_FILTER} from '../constants'
import {articles} from '../fixtures'

export default (articlesState = {}, action) => {
    const {payload, type} = action
    switch(type) {
        case DATE_FILTER:
            return {from: payload.from, to: payload.to}
        //articlesState.filter( article => {

                //Date.parse(article.date) > Date.parse(payload.from ) && Date.parse(article.date) < Date.parse(payload.to)
          //  })
    }
    return articlesState
}