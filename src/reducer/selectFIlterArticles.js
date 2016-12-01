import {SELECT_FILTER} from '../constants'
import { articles } from '../fixtures'

export default (articleState = articles, action) => {
    const {type, payload} = action

    switch (type) {
        case SELECT_FILTER:
            if (payload.selected == null) return articleState
             return articleState.filter(article => article.id == payload.selected.value)
    }
    return articleState
}