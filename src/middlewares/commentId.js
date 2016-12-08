import {ADD_COMMENT} from '../constants'

export default store => next => action => {
    const id = Math.floor((Math.random() * 1000) + 10)

    switch(action.type) {
        case ADD_COMMENT:
            action.payload.comment.id = id
    }
   return next(action)
}