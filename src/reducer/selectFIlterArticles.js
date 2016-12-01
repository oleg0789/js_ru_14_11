import {SELECT_FILTER} from '../constants'
import { articles } from '../fixtures'

export default (articleState = articles, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_FILTER:
             console.log(payload)

            return articleState.filter( article =>  article.id == '56c782f197fe2bad471b3740' )

    }
    return articleState
}